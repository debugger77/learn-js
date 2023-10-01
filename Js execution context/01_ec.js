// 2 types of execution context are present
    // 1. Global execution context
    // 2. Function execution context

// 2 Phases -> 1. Memory Creation phase  2. Execution phase

// How any code works in javascript

            // 1st cycle
// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.

            // 2nd cycle
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   every time when the functions are called, it creates a memory phase and execution phase for the 
//   function just like the main one and after using it deletes the global execution context.


// +++++++++++++++++++ Call stack +++++++++++++++++

    // For live demo:
    // browser > inspect > Sources
    // create a snippet with few functions and visually experience the call stack.

// have done in sources of the browser as Call_stack.js...