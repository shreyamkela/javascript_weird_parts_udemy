var a;
console.log(a);

if(a === undefined) {
    console.log('a is undefined!');
}
else {
    console.log('a is defined!');
}

/*
 'a is undefined!' is the output as a is actually 'undefined' here. 
 Note that in js, there is a difference between a variable not being defined and a varialbe being 'undefined'. 
 Variable not being defined is an error and it happens when variable is being used without being declared anywhere in the code (even below the current line of execution).
 While variable being 'undefined' simply means that variable has been declared in the code somewhere. It also means that any definitaion of the value of the variable takes place below the current line of execution.
 In js, 'undefined' is a special value/keyword predefined in the language, and it does not mean 'not defined' or 'empty' or 'non-existant'. 'undefined' value actually takes up memory space. It just means 'declared but not set'. That is, the variable declared somewhere but not defined anywhere above the current line of execution.
 As a good practice, we never set any variables as 'undefined'. That is, never do 'var a = undefined;'
*/