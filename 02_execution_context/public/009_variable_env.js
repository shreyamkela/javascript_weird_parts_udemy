function b() {
    var myVar; // myVar declared again therefore myVar is undefined for this context
    // myVar; // var is not used therefore myVar will inherit global value in this case
    console.log('world', myVar);
}

function a() {
    var myVar = 2;
    console.log('Hello', myVar);
    b();
}

var myVar = 1;
console.log('!', myVar);
a();

/*
   In the global execution context, myVar = 1. Therefore myVar = 1 everywhere in the global execution context. 
   Variable environment remains the same throughout a particular exection context
   When a() is invoked, execution context of a() is pushed and in this variable environment, myVar = 2 as myVar is declared and defined as 2 in this context. Even if instead of 'var myVar = 2', simply 'myVar = 2' is used, the result for this context would be the same.
   When b() is invoked, 'var myVar' declares a new variable environment for the myVar variable. And as myVar is declared but not defined in this new variable environment, it is 'undefined'. Note that if instead of 'var myVar;', simply 'myVar;' is ued then myVar inherits the global variable environment for myVar, as myVar was not explicitly declared in this context. Therefore in that case, this myVar would have the same value as global myVar. It would not e undefined if global myVar is defined.
   Then b() gets popped off, and then a(), and then the global.
   Here, each execution context has different memory space for myVar (and all other variables) therefore myVar can have different values depending on the execution context. This could hint at javascript being pass-by-value.
   A point to note here is that javascript is neither purely pass-by-value or purely pass-by-reference. Rather it is call-by-sharing. Refer - https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
*/



