import { Alert, Animated, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textBox: {
      margin: 10,
      height: 80,
      // backgroundColor: 'rgba(0,0,0,.1)',
      justifyContent: 'center',
      borderRadius: 5,
    },
    categoryBox: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.2)',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    entryText: {
      justifyContent: 'center',
      fontSize: 18,
      width: '100%',
      flex: 2,
    },
    categoryText: {
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
      padding: 3,
    },
  });

export default styles;