module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];

  for(let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  let stack = []; 
  for(let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    let topElement = stack[stack.length-1];
    
    if(closeBrackets.includes(currentSymbol) && stack.length > 0 && closeBrackets.indexOf(currentSymbol) === openBrackets.indexOf(topElement)){
      stack.pop();
    }
    else if(openBrackets.includes(currentSymbol)){
      stack.push(currentSymbol);
    } 
    else {
      return false;
      }   
    }

  return stack.length === 0; 
}