const input = ['1','2','+', '3', '4', '+', '+'];
let stack = [];

while(token = input.shift()) {
    if( isNaN(token) ) {
        console.log("Symbols",token);
        let second_number = parseInt(stack.pop());
        let first_number = parseInt(stack.pop());
        switch (token){
            case '+':
                stack.push( first_number + second_number);
                break;
            case '-':
                stack.push( first_number - second_number);
                break;
            case '*':
                stack.push( first_number * second_number);
                break;
            case '/':
                stack.push( first_number / second_number);
                break;
        }
    } else { 
        console.log("Number",token);
        stack.push(token);
    }
    console.log(input, stack);
}