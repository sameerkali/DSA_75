/*
1. Module Pattern
The Module Pattern is one of the most common design patterns used in JavaScript. It allows you to encapsulate private and public methods and variables, helping to organize code and avoid polluting the global scope.
*/


const myModule = (function() {
    // Private variable
    let privateVar = 'I am private';

    // Private method
    function privateMethod() {
        console.log(privateVar);
    }

    return {
        // Public method
        publicMethod: function() {
            privateMethod();
        }
    };
})();

myModule.publicMethod(); // I am private
