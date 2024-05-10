import { TouchableOpacity, Text, StyleSheet, Modal,TouchableHighlight, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useState } from "react";
const press = () => console.log("hit")

  
const OptionButton = () => {
    const [visible, setModalVisible] = useState(false);

      
    return (
        <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
            <View style={styles.modalView}>
            <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                onPress={() => setModalVisible(false)}>
                <Text>Hide Modal</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Ionicons style={styles.icon} name="options-outline"></Ionicons>
        </TouchableOpacity>
        </View>
    )
    
};


const styles = StyleSheet.create({
button: {
    width: 20,
},
icon: {
  fontSize: 25,
  marginRight:0,  
},
modalView:{
    marginTop: 250,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',

}
});

export default OptionButton;