/*
3. Observer Pattern
The Observer Pattern is a behavioral design pattern where an object (known as the subject) maintains a list of its dependents (observers) and notifies them of any state changes, usually by calling one of their methods.
*/

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(`Observer received data: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello, Observers!'); // Both observers will log the message
