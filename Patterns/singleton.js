/*
2. Singleton Pattern
The Singleton Pattern restricts the instantiation of a class to one single instance.
It's useful when only one instance of an object is needed throughout the lifecycle of 
the application.
*/


const Singleton = (function() {
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
