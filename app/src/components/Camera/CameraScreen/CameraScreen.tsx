import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Camera, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';
import * as FileSystem from 'expo-file-system';
import * as ort from 'onnxruntime-react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { Buffer } from 'buffer';
import { Asset } from 'expo-asset';
import * as Permissions from 'expo-permissions'; // Import Permissions from expo
import { NativeModules } from 'react-native';
const { OnnxModule } = NativeModules;


const CameraScreen = () => {
  const camera = useRef(null);
  const [label, setLabel] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [session, setSession] = useState(null);
  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera']
 })


 useEffect(() => {

  const loadModel = async () => {
    try {
      
      // Define the model file path
      const modelPath = FileSystem.documentDirectory + 'pokemon-model.onnx';

      // Download the model asynchronously
      await FileSystem.downloadAsync(
        Asset.fromModule(require('/Users/wesleyguarneri/Desktop/pokedex-3/app/assets/pokemon-model.onnx')).uri,
        modelPath
      );

      // Load the model using ONNX Runtime
      const loadedSession = await ort.InferenceSession.create('/pokemon-model.onnx')
      setSession(loadedSession);
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  };

  loadModel();
}, []);

  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   if (frame.pixelFormat === 'rgb') {
  //     const buffer = frame.toArrayBuffer();
  //     const data = new Uint8Array(buffer);
  //     console.log(`Pixel at 0,0: RGB(${data[0]}, ${data[1]}, ${data[2]})`);
  //   }
  // }, []);

  const capturePhoto = async () => {
    console.log('sess '+session)
    if (camera.current !== null && session) {
      const file = await camera.current.takePhoto()
      const uri = file.path
      setImageUri(uri);
      await classifyImage(uri);
    }
  };

  const classifyImage = async (uri) => {
    const manipResult = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 224, height: 224 } }],
      { base64: true }
    );

    const base64Image = manipResult.base64;

    const raw = Buffer.from(base64Image, 'base64');
    const imageTensor = preprocessImageToTensor(raw);

    const feeds = { input: imageTensor };  // Adjust based on your model's input name
    // console.log('Feeds:', feeds);

    const results = await session.run(feeds);
    // console.log('Results:', results);

    const output = results[session.outputNames[0]];  // Adjust based on your model's output name

    const predictedClass = argMax(output.data);
    console.log('pclass '+predictedClass)
    setLabel(predictedClass);  // You may want to map the class index to the actual class name
  };

  const argMax = (array) => {
    return array.indexOf(Math.max(...array));
  };

  if (!device) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        // frameProcessor={frameProcessor}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.camButton}
          onPress={capturePhoto}
        />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {label && <Text style={styles.label}>Predicted Class: {label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#B2BEB5',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 100,
    color: 'white',
  },
});

export default CameraScreen;


const preprocessImageToTensor = (buffer) => {
  // Assuming the image is 224x224 RGB
  const width = 224;
  const height = 224;
  const channels = 3;

  // Convert buffer to Uint8Array
  const uint8Array = new Uint8Array(buffer);

  // Normalize the image data and convert to float32
  const float32Array = new Float32Array(width * height * channels);
  for (let i = 0; i < uint8Array.length; i++) {
    float32Array[i] = uint8Array[i] / 255.0;
  }

  // Create tensor from Float32Array
  const tensor = new ort.Tensor('float32', float32Array, [1, channels, height, width]);
  return tensor;
};