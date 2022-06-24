

console.log("\nThis is a simple javascript calclculator\nEnter\n'+' for addition \n'-' for subtraction \n'*' for multiplication \n'/' for division and \n'%' for modular operation\ne.g a*b+c-e");

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})



    rl.question('Enter an operation ',(answer) => {
        function looseJsonParse(obj){
            return Function('"use strict";return ('+obj+')')()
        };
        const solution=looseJsonParse(answer);
        console.log(solution);
        rl.close();
    });

    
