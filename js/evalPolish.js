const evalPolish = function(inputString) {
    let input = inputString.split(" ");
    let stack = [];
    
    while(token = input.shift()) {
        if( isNaN(token) ) {
            //console.log("Symbols",token);
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
                default:
                    throw new Error();
            }
        } else { 
            //console.log("Number",token);
            stack.push(token);
        }
        //console.log(input, stack);
    }
    
    if (stack.length>1) {
        throw new Error();
    } else if(isNaN(stack)){
        throw new Error();
    }


    return stack.pop();

}
module.exports = evalPolish;