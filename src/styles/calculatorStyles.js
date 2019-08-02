
import { StyleSheet } from 'react-native';

const calculatorStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffc',
    },
    inputStyle: {
      flex: 3,
      backgroundColor: '#fff',
      justifyContent : 'flex-end',
      alignItems: 'flex-end',
    },
    resultStyle: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent : 'flex-end',
      alignItems: 'flex-end',
    },
    buttonsStyle: {
      flex: 6,
      flexDirection: 'row',
      backgroundColor: '#ccc'
    },
    inputText: {
      fontSize: 50
    },
    resultText: {
      fontSize: 30
    }
  });

export default calculatorStyles;
