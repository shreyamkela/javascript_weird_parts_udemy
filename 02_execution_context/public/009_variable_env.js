function c() {
    myVar; // var is not used therefore myVar will inherit/reference global value (as global is the outer env) in this case. It does not inherit it's calling function b()'s myVar value.
    console.log('c', myVar);
}

function b() {
    var myVar; // myVar declared again therefore myVar is undefined for this context
    console.log('b', myVar);
    c();

    function d() { // This is lexically inside the context/scope of b() and therefore b() is the outer environment to d(). Hence myVar of d() behaves according to myVar of b() as myVar of d() is not declared in d(), and only used
        myVar; 
        console.log('d', myVar);
    }
    d();
}

function a() {
    var myVar = 2;
    console.log('a', myVar);
    b();
}

var myVar = 1;
console.log('g_1', myVar);
a(); // this doesnt affect printing the myVar code line below
console.log('g_2', myVar); // global context/scope therefore value same

d(); // This gives error as d() sits inside the context/scope of b() and thus the declaration/definition of d() is not accessible to the global context/scope. When global scope context is created, it does not go inside the function b(), it only reads the declaration of b() and moves forward. Does global doesnt know that definition of d() exists. When d() is called here, global is not able to find any definition and there is also no outer environment for global, to look for any definitions, therefore it gives 'not defined' error.

/*
   In the global execution context or scope, myVar = 1. Therefore myVar = 1 everywhere in the global execution context. 
   Variable environment remains the same throughout a particular exection context
   When a() is invoked, execution context of a() is pushed and in this variable environment, myVar = 2 as myVar is declared and defined as 2 in this context. Even if instead of 'var myVar = 2', simply 'myVar = 2' is used, the result for this context would be the same.
   When b() is invoked, 'var myVar' declares a new variable environment for the myVar variable. And as myVar is declared but not defined in this new variable environment, it is 'undefined'. 
   Then c() is invoked which has simply 'myVar;'. Here myVar inherits the global variable environment for myVar. As myVar was not explicitly declared in this context, the engine looks for it's declaration in the outer environment of this context, and for this context, global is the outer environment (see definition of outer environment below). Therefore in that case, this myVar would have the same value as global myVar. It would not be undefined if global myVar is defined
   Then c() gets popped off, then b() gets popped off, then a(), and then the global.
   Here, each execution context has different memory space, therefore there's new memory space for myVar (and all other variables in this context) therefore myVar can have different values depending on the execution context. 
   Each execution context also has it's own 'this' variable, and each execution context (except the global) has an outer environment. For example, if a function or a function scope f() {...} sits lexically (physically) inside the global object, the outer environment is the global. If the function scope sits lexically (physically) inside a parent function scope which is inside the global, then the parent function scope is the outer environment for this inner function scope. And in this inner function scope, if a variable (which was not declared/defined in this inner function scope) is referenced/used then the engine looks in the outer environment i.e the outer function scope, for the varialbe declaration. If it is not there then the engine looks in the outer environment of the parent, which is the global. This forms a chain of function scopes which is called scope chaining, in which the innermost scope is linked to its outer env and this outer env is the second innermost scope which sits in its outer env, and this continues to form a set of links which form the scope chain. Note that it is not necessary that the outer environment is the context just below the present context in the stack. Outer env depends on where the scope is placed in the code lexically/physically. This is demonstrated by d().
   When an execution context finishes and gets popped off, all the new definitions pertaining to this context are removed.
   This could hint at javascript being pass-by-value.
   A point to note here is that javascript is neither purely pass-by-value or purely pass-by-reference. Rather it is call-by-sharing. Refer - https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
*/


// To demonstrate the difference between function scope f() {...} and simple scope {...} using 'let' keyword:
{
    var x;
    {
        var x = 10;
        {
            let x = 20;
            console.log(x);
        }
        console.log(x);
    }
    console.log(x);
}
console.log(x);

// The function scope f() {...} and simple scope {...} follow different rules. In simple scope, there is no scope chaining and the myVar would depend on the last declaration of myVar above this line of execution. To achieve the feature of different myVar in different scopes when using simple scopes {...}, we can use the 'let' keyword which makes a new memory space for myVar in the scope thus creating different myVar variables for different simple scopes.

