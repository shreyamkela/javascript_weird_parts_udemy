function b() {
    console.log("Hello World!");
}

function a() {
        b();
}

a();

/*
    In the create phase, all the functions and variables are attached to the global object.
    Next, the execution phase takes place, which can be explained with the Execution stack.
    The global execution context is pushed into the stack. This is the first item to be executed.
    Then the engine goes line by line and pushes the code onto stack as required.
    Here in the above code, function declarations are already in memory, because of the create phase.
    Now when engine encounters a(); it invokes a() i.e it creates an execution context for a() and pushes this execution context onto the stack, above the global execution context.
    Now while a() is executing, a() invokes b() therefore the execution context of b() is pushed above a() onto the stack. b() executes and is popped off stack.
    Then a() is popped off the stack, and finally the global is popped off.
    Note that new execution context is created and pushed onto stack even if the same function has called itself. Therefore, in recursion, the recursive call is pushed onto the stack above the last call.
*/



