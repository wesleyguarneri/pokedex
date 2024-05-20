import { Camera, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRef } from 'react';


const CameraScreen = () => {

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    if (frame.pixelFormat === 'rgb') {
      const buffer = frame.toArrayBuffer()
      const data = new Uint8Array(buffer)
      console.log(`Pixel at 0,0: RGB(${data[0]}, ${data[1]}, ${data[2]})`)
    }
  }, [])

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      // setImageSource(photo.path);
      // setShowCamera(false);
      console.log(photo.path);
    }
  };
  
    const camera = useRef<Camera>(null)
    const device = useCameraDevice('front', {
        physicalDevices: ['wide-angle-camera']
     })

     return(
      //   <Camera
      //   style={StyleSheet.absoluteFill}
      //   device={device}
      //   isActive={true}
      //   pixelFormat="rgb"
      //   frameProcessor={frameProcessor}
      // />
      <>
      <Camera
      ref={camera}
      style={StyleSheet.absoluteFill}
      device={device}
      photo={true}
      isActive={true}
      />

      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.camButton}
        onPress={() => capturePhoto()}
      />
    </View>
    </>
     )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
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
});
export default CameraScreen;