
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import operationsStyles from '../styles/operationsStyles';

const Operations = (props) => {
    const operations = ['Del', '/', '*', '-', '+']
    let operationViews = []
    
    for(let i=0; i<operations.length; i++) {
            operationViews.push(
            <TouchableOpacity style = {styles.buttons} key={operations[i]} onPress={()=>{ props.btnClick(operations[i])}} onLongPress={()=>{props.btnLongClick(operations[i])}}>
                <Text  style= {styles.textStyle}>{operations[i]}</Text>
            </TouchableOpacity>)
    }
    
    return (<View style={styles.operationsStyle}>
        {operationViews}      
     </View>
 );
}
    
const styles = operationsStyles;

export default Operations;
