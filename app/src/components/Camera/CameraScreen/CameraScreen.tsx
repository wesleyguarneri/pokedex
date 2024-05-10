import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { StyleSheet } from 'react-native';


const CameraScreen = () => {
    // const devices = useCameraDevices('back');
    // const device = devices.back;
    const device = useCameraDevice('back', {
        physicalDevices: ['wide-angle-camera']
     })

     return(
        <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
     )
}

export default CameraScreen;