
import { StyleSheet } from 'react-native';

const operationsStyles = StyleSheet.create({
    buttons: {
        flex: 1,
        alignContent:'stretch',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        fontWeight:'normal'
    },
    operationsStyle: {
        flex: 1, 
        justifyContent: 'space-around',
        backgroundColor: '#828282'
    },
})

export default operationsStyles;
