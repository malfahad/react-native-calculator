
import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
    buttons: {
        flex: 1,
        alignContent:'stretch',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    row : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    digitsStyle: {
        flex: 3, 
        justifyContent: 'space-around',
        backgroundColor: '#363636'
    },
})

export default buttonStyles;
