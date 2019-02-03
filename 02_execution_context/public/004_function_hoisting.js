b(); // function b() is being called here and it runs perfectly and prints output even though it is defined below this line
console.log(a); // 'a' is defined below this line, but this statement does not give any error. It just outputs 'a' as undefined. If definition/declaration of 'a' below, is reomoved then this line gives a reference error of 'a' not being defined 

var a = 10;
function b() {
    console.log("Hello World!");
};

/*
 Generally, in programming languages, functions and variables are declared at the top as the excution is carried out line by line. 
 But in javascript execution context is generated in 2 phases. 
 In the first phase, all the declared/defined variables and the functions have their memory space set up and get attached to the global object.
 In this phase, variables do not get the actual value, but just a declaration so they are still 'undefined'
 The next phase is the actual execution phase, in which actual line by line execution takes place. Thus, the above code behaves as such.
 So in the first phase the js engine goes through the code to assign memory spaces, and so nothing remains undeclared, and can be referenced in the execution phase (even though it is declared below the calling line in code).
 That is with the help of the first phase, in the second phase we have limited access to all the code even though it is physically present below the current line of execution
 This is 'Hoisting' in JavaScript. This should not be understood as the functions and the variable declarations being physically moved up in the code by the engine. 
 That is incorrect. Rather, code execution takes place in 2 phases.
*/ 