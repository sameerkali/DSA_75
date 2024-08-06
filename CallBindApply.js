function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
    name: 'Alice'
};

//call
greet.call(person, 'Call, Hello', '!');
//apply
greet.apply(person, ['Apply, Hi', '!!']); 
//bind
const greetCharlie = greet.bind(person);
greetCharlie('bind, Hey', '!!!'); 