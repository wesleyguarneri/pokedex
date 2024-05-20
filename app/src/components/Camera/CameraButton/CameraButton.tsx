import { TouchableOpacity, Text, StyleSheet, Modal,TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useCallback, useState } from "react";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

const CameraButton = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const handleCameraNavigation = useCallback(() => {
        navigation.navigate('Camera');
      }, [navigation]);
      
    return (
        <View>
        <TouchableOpacity style={styles.button} onPress={handleCameraNavigation}>
            <Icon style={styles.icon} name="camera"></Icon>
        </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
button: {
    width: 25,
},
icon: {
  fontSize: 25,
  marginLeft:0,  
},
});

export default CameraButton;