/* 
 Even with an empty .js file, when the file is run, a global executon context (which is a wrapper code or javascript engine that runs and wraps around all of your code) is created and a global object which refers to that particular 'window' object. 
 At the global level, 'this' also referes to the global object. 'this' can change context and it depends on the scope.
 An outer environment referes to the global. For variables and functions, global object is the outer environment. 
 Note that the global object is the parent of all the functions and variables and everything in the code, and it has a large set of fundamental name-value pairs which forms the wrapper around our code. 
 Our functions and variables are attached to this set of fundamental name-value pairs, i.e the global object
*/

// When there is no code, but there is js file, run the file, type 'this' on console and hit enter
// Also, type 'window' on console and hit enter
// The output is the global object and it shows the fundamental name-value pairs.

// All the variables and functions and everything declared inside the global object gets attached to the global object
var a = 10;
// type 'a' on console and hit enter
// type 'window.a' on console and hit enter. The result is the same as 'a'. 'a' was attached to 'window'/global obj

