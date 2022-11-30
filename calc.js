function displayValue(num){
inp.value += num
}
function allClear(){
    inp.value=""
}
function evaluateOut(){
  inp.value = eval(inp.value)
}
function backOff(){
   inp.value = inp.value.slice(0, -1)
}