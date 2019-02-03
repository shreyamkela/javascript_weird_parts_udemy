// Even with an empty .js file, when the file is run, an executon context (which is a wrapper code or javascript engine that runs and wraps around all of your code) is created  and a global object which refers to that particular 'window' object. At the global level, 'this' also referes to the global object. An outer environment referes to the global. For variables and functions, global object is the outer environment.
// type 'this' on console and hit enter
// type 'window' on console and hit enter

// All the variables and functions and everything declared inside the global object gets attached to the global object
var a = 10;
// type 'a' on console and hit enter
// type 'window.a' on console and hit enter. The result is the same as 'a'. 'a' was attached to 'window'/global obj

