// target for tomorrow 






// 1. What is the output of the following code?
     
//    const person = {
//      name: 'Alice',
//      greet: function() {
//        console.log(`Hello, ${this.name}`);
//      }
//    };
//    const greet = person.greet;
//    greet();
//    //Hello, undefined

// 2. What is the output of the following code?
     
  //  const person = {
  //    name: 'Bob',
  //    greet() {
  //      console.log(`Hello, ${this.name}`);
  //    }
  //  };
  //  const anotherPerson = {
  //    name: 'Charlie',
  //    greet: person.greet
  //  };
  //  anotherPerson.greet();
 

// 3. What is the output of the following code?
     
//    function Person(name) {
//      this.name = name;
//      this.greet = function() {
//        console.log(`Hello, ${this.name}`);
//      };
//    }
//    const alice = new Person('Alice');
//    const greet = alice.greet;
//    greet();


// 4. What is the output of the following code?
     
//    const person = {
//      name: 'David',
//      greet: function() {
//        const innerGreet = () => {
//          console.log(`Hello, ${this.name}`);
//        };
//        innerGreet();
//      }
//    };
//    person.greet();


// 5. What is the output of the following code?
     
//    const person = {
//      name: 'Eve',
//      greet: function() {
//        setTimeout(function() {
//          console.log(`Hello, ${this.name}`);
//        }, 1000);
//      }
//    };
//    person.greet();
   

// 6. What is the output of the following code?
     
//    function greet() {
//      console.log(`Hello, ${this.name}`);
//    }
//    const person1 = { name: 'Frank', greet };
//    const person2 = { name: 'Grace', greet };
//    person1.greet();
//    person2.greet();
   

// 7. What is the output of the following code?
     
//    const person = {
//      name: 'Hank',
//      greet() {
//        console.log(`Hello, ${this.name}`);
//      },
//      farewell: () => {
//        console.log(`Goodbye, ${this.name}`);
//      }
//    };
//    person.greet();
//    person.farewell();
   

// 8. What is the output of the following code?
     
//    const person = {
//      name: 'Ivy',
//      greet: function() {
//        const innerGreet = function() {
//          console.log(`Hello, ${this.name}`);
//        };
//        innerGreet.call(this);
//      }
//    };
//    person.greet();
   

// 9. What is the output of the following code?
     
//    const person = {
//      name: 'Jack',
//      greet: function() {
//        const innerGreet = function() {
//          console.log(`Hello, ${this.name}`);
//        };
//        innerGreet.apply(this);
//      }
//    };
//    person.greet();
   

// 10. What is the output of the following code?
      
    // class Person {
    //   constructor(name) {
    //     this.name = name;
    //   }
    //   greet() {
    //     console.log(`Hello, ${this.name}`);
    //   }
    //   static introduce() {
    //     console.log(`Hi, I'm a person`);
    //   }
    // }
    // const jane = new Person('Jane');
    // jane.greet();
    // Person.introduce();
    
