//parseInt: convert to number
var number1 = 40.50;
console.log(parseInt(number1)); //return: 40;

//parseFloat:convert to float 
var number2 = "50.40";
console.log(parseFloat(number2)); //Return: 50.4;

//Convert to String.
var number3 = 30.50;
number3 = ''+number3;
console.log(typeof number3);

//toFixed(2); decimal precision
var num10 = 0.1;
var num20 = 0.2;
var total = num10 + num20;
console.log(total.toFixed(2));