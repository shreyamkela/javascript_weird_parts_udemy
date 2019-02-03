b(); // function b() is being called here and it runs perfectly and prints output even though it is defined below this line
console.log(a); // 'a' is defined below this line, but this statement does not give any error. It just outputs 'a' as undefined. If definition/declaration of 'a' below, is reomoved then this line gives a reference error of 'a' not being defined 

var a = 10;
function b() {
    console.log("Hello World!");
};

/*
 Generally, in programming languages, functions and variables are declared at the top as the excution is carried out line by line. 
 But in javascript execution context is generated (or simply the execution takes place) in 2 phases. For each execution context, first execution context is created , which is the create phase and then it is executed which is the execution phase. 
 In the first pass, global execution context is created and all of the global code is read form the top to bottom by the engine, in which all the global code, declared/defined variables in global scope and the function declarations have their memory space set up and get attached to the global object, and also the variable environment for the global is created. Then this global code is pushed onto stack for execution. 
 When global encounters any function defination during execution, it pushes them onto stack in sequence. As the first function is pushed onto the stack, it also goes through the same phases as the global, first the create phase in which all the memory space and variable environments are setup and then the execution phase in which the global execution context changes to the execution context for this function. Then line by line exectuion take place inside this function, while global execution context waits at the bottom of the stack.
 When it finishes it gets popped off. Similarly, in the global, all invoked functions are pushed on top of this stack in the order of execution.
 Note that in the creation phase of the global, variables do not get the actual value, but just a declaration so they are still 'undefined'. After creation of the global context, execution of the global context takes place, as stated above. Thus, the above code behaves as such.
 So in the first phase the js engine goes through the global code (it doesnt go inside the functions, it only reads the definitions) to assign memory spaces, and so nothing remains undeclared, and can be referenced in the execution phase (even though it is declared below the calling line in code).
 That is with the help of the first phase, in the second phase we have limited access to all the code even though it is physically present below the current line of execution.
 This is 'Hoisting' in JavaScript. This should not be understood as the functions and the variable declarations being physically moved up in the code by the engine. 
 Simply put, during 'Hoisting', functions and variables have their memory spaces set up, and variables are set equal to 'undefined'
 That is incorrect. Rather, code execution takes place in 2 phases.
 Note that, each execution context has a create and an execute phase.
 As a good practice, we always declare variables and functions at the top, just like in other programming languages.
*/ 