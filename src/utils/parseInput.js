
let parseInput = (currentInput, currentResult,text)=> {
    switch(text) {
        case '-':
        case '+':
        case '*':
        case '/':
          let operators = ['+','-','*','/']
          let chars =  currentInput.split('')
          let lastChar = chars.pop()
          if(operators.includes(lastChar)){
            chars.push(text)
            return {
              inputText: chars.join('')
            }
          }else {
              return { inputText: currentInput + text }
          }
        case 'Del':
            if(currentResult.length > 0){
              return {
                resultText : ''
              }
            }else if(currentInput.length > 0){
              let items = currentInput.split('')
              items.pop()
              return {
                inputText: items.join('')
              }
            } 
          break;
        case '0':
            if(currentInput != '0'){
              return { inputText: currentInput + text }
            }
          break;
        case '.':
          if(!currentInput.includes('.')){
            return { inputText: currentInput + text }
          }
          break;
        default:
           return { inputText: currentInput + text }
    }
}
export default parseInput;
