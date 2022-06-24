const info = alert("this is a simple javascript calclculator\nEnter\n'+' for addition \n'-' for subtraction \n'*' for multiplication \n'/' for division and \n'%' for modular operation\ne.g a*b+c-e " )

const exp = prompt("Enter in your expression", '');
const ans = eval(exp);
alert(` Your answer is ${ans}`);