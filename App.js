import React from 'react';
import { Text, View } from 'react-native';
import Buttons  from './src/components/buttons';
import Operations from './src/components/operations';
import {evaluate} from 'mathjs';
import parseInput from './src/utils/parseInput';
import calculatorStyles from './src/styles/calculatorStyles';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultText:'',
      inputText:''
    }
  }
  calculateResult = () => {
    let {inputText} = this.state
    let result = evaluate(inputText)
    this.setState({
      resultText : result.toString()
    })
  }
  btnClick = (text) => {
    let {inputText, resultText} = this.state
    if(text == '='){
      this.calculateResult()
    } else {
      let newState = parseInput(inputText, resultText, text)
      this.setState(newState)  
    }
  }
  btnLongClick = (text)=>{
    if(text == 'Del'){
      this.setState({
        inputText: '',
        resultText:''
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputStyle} >
          <Text style={styles.inputText}>{this.state.inputText}</Text>
        </View>
        <View style={styles.resultStyle}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.buttonsStyle}  >
          <Buttons btnClick={this.btnClick}/>
          <Operations btnClick={this.btnClick} btnLongClick={this.btnLongClick}/>
        </View> 
      </View>
    );
  } 
}

const styles = calculatorStyles;
