// alert name
document.getElementById("aname").onclick = function(){
    alert('Muhammad Tahir Siddique')
    let statement = document.getElementById("statement")
    statement.innerHTML = "alert('Muhammad Tahir Siddique')";
    let output = document.getElementById("output")
    output.innerHTML = "Muhammad tahir siddique"



}
//  alert number
document.getElementById("anumber").onclick = function(){
    alert('1234')
    let statement = document.getElementById("statement")
    statement.innerHTML = "alert('1234')";
    let output = document.getElementById("output")
    output.innerHTML = "1234"



}
// show variable
document.getElementById("svariable").onclick = function(){
    alert('8 types of variable')
    let statement = document.getElementById("statement")
    statement.innerHTML = "alert('8 types of variable')";
    let output = document.getElementById("output")
    output.innerHTML = "8 types of variable"



}
//  show chammelCase 
document.getElementById("cammel").onclick = function(){
    alert('say oky')
    let statement = document.getElementById("statement")
    statement.innerText = "<li>userResponse</li> <li>userResponseTime</li><li>userResponseTimeLimit</li><li>response</li>";
    let output = document.getElementById("output")
    output.innerHTML = ` <ul><li>userResponse</li> <li>userResponseTime</li><li>userResponseTimeLimit</li><li>response</li> <ul>`
}
// sum to numbers
document.getElementById("sum2").onclick = function(){
    alert('2+2')
    let statement = document.getElementById("statement")
    statement.innerHTML = "let Num1 = 2 <br> let Num2 = 2 <br> let ans = Num1+Num2";
    let output = document.getElementById("output")
    output.innerHTML = 2+2;



}
// mutiply two numbers
document.getElementById("multi2").onclick = function(){
    alert('2*2')
    let statement = document.getElementById("statement")
    statement.innerHTML = "let Num1 = 2 <br> let Num2 = 2 <br> let ans = Num1*Num2";
    let output = document.getElementById("output")
    output.innerHTML = 2*2;



}
// mutiply two numbers
document.getElementById("divide2").onclick = function(){
    alert('2/2')
    let statement = document.getElementById("statement")
    statement.innerHTML = "let Num1 = 2 <br> let Num2 = 2 <br> let ans = Num1/Num2";
    let output = document.getElementById("output")
    output.innerHTML = 2/2;



}
// calculate  numbers
document.getElementById("calculate").onclick = function(){
    alert('(4+7)*6+5-1)')
    let statement = document.getElementById("statement")
    statement.innerHTML = "alert('(4+7)*6+5-1'))";
    let output = document.getElementById("output")
    output.innerHTML = (4+7)*6+5-1;



}
// clear statement
document.getElementById("cstate").onclick = ()=>{
    let statement = document.getElementById("statement")
    statement.innerHTML = "";
}


// clear output
document.getElementById("coutput").onclick = ()=>{
    let output = document.getElementById("output")
    output.innerHTML = "";
}
// subtract
document.getElementById("subtract2").onclick = function(){
    alert('2-2')
    let statement = document.getElementById("statement")
    statement.innerHTML = "let Num1 = 2 <br> let Num2 = 2 <br> let ans = Num1-Num2";
    let output = document.getElementById("output")
    output.innerHTML = 2-2;
}
