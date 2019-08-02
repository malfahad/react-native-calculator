
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import buttonStyles from '../styles/buttonsStyles';

let Buttons = (props)=>{
    const numbers = [['7','8','9'], ['4','5','6'], ['1','2','3'], ['.','0','=']]
    let numberViews = []
    for(let i=0; i<numbers.length; i++) {
        let numberRow = []
        for(let j=0; j<numbers[i].length; j++ ){
            numberRow.push(
            <TouchableOpacity 
                style = {styles.buttons} 
                key={numbers[i][j]}
                onPress={()=>{props.btnClick(numbers[i][j])}}>
                <Text  style= {styles.textStyle}>{numbers[i][j]}</Text>
            </TouchableOpacity>)
        }
        numberViews.push(<View style={styles.row} key={i}>{numberRow}</View>)
    }

    return (
        <View style={styles.digitsStyle} >
           {numberViews}      
        </View>);
}
    
const styles = buttonStyles;

export default Buttons;
