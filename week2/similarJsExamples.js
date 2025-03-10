// изтриха ми се примерите от час за js :)


function Person(name, age) {
     this.name = name;
     this.age = age;
 
     this.greeting = () => console.log(`Hello, ${this.name}`);
    // this.greeting = function () {
    //     console.log(`Hello, ${this.name}`);
    // }
 }
 
 const ivan = new Person('Ivan', 22);

 ivan.greeting();
 
 const pesho = new Person('Pesho', 23);
 ivan.greeting.call(pesho)
 
 Person.prototype.info = function () {
     console.log(`${this.name}: ${this.age}`);
 }

//  ivan.info();
//  pesho.info();
 
 function Student(name, age, fn) {
     Person.call(this, name, age);
 
     this.fn = fn;
 
     let _mark;
 
     this.getMark = () => _mark;
     this.setMark = mark => _mark = mark;
 }
 
 Student.prototype = Object.create(Person.prototype);
 
 Student.prototype.studentInfo = function () {
     this.info();
     console.log(this.fn);
 };
 
 const maria = new Student('Maria', 22, 666666);
//  console.log(maria.name)
//  console.log(maria.age)
//  maria.greeting();
 maria.info();
 maria.studentInfo();
 
 console.log(maria._mark)
 
 maria.setMark(6)
 console.log(maria.getMark())
 
context

const ivan = {
    name: 'Ivan',
    age: 22
};

const pesho = {
    name: 'Pesho',
    age: 21
};

const gosho = {
    name: 'Gosho',
    age: 23,
    sayHi: () => console.log(`Hi, ${this.name}`)
};

name = 'Super global';

function greeting(a, b) {
    console.log(a + b)
    console.log(`Hello, ${this.name}!`);
}

greeting();

ivan.greet = greeting;
ivan.greet();

greeting.call(pesho, 8, 9);
greeting.apply(gosho, [1, 5]);

ivan.greet.call(gosho)

const hi = ivan.greet;
hi();

const sayHi = function () {
    console.log("Hi");
}

const hello = a => a + 5

function sum(a) {
    return a + 5;
}

const hiGosho = gosho.sayHi;
hiGosho();

asdf = () => console.log(`Hi, ${this.name}`);

asdf()

1 constructor
2 novi functii 
3 exporti i inport
4 nasledqvane chrez extend
5 # - private

classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, ${this.name}`);
    }

    info() {
        console.log(`${this.name}: ${this.age}`);
    }
}

const ivan = new Person('Ivan', 22);
ivan.greeting();

// module.exports = { Person };

const { Person } = require('./person.js');
 
 
 class Student extends Person {
     mark$;
 
     constructor(name, age, fn) {
         super(name, age);
 
         this.fn = fn;
     }
 
     getMark() {
         return this.mark$;
     }
 
     setMark(mark) {
         this.mark$ = mark;
     }
 
     studentInfo() {
         super.info();
         console.log(this.fn)
     }
 }
 
 const maria = new Student('MAria', 23, 666666);
 maria.info();
 maria.setMark(6);
 maria.getMark();
 maria.studentInfo();
 
 console.log(maria.mark$);
    