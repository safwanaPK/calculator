// display all numbers and operators other than ac  and = inside the input with id=result
// when we click on it

function display(num){
  result .value+=num
}
// clear all contents from input when we click on ac buttton
function clearAll(){
    result.value= " "
}
// evaluate expression using eval
function output(){
    result.value=eval(result.value)
}
// remove last item
function remove(){
    result.value=( result.value).slice(0,-1)
}