class Person {

    public address
    constructor(private name: string, public age: number, address: string) {
        this.address = address;
    }


    getName = function() {
        return this.name
    }
}


let me = new Person('andi', 20, 'fmi')

console.log(me.address)
console.log(me.age)

type Student = {
    name: string,
    age: number
}

function info(person: Student) {

    console.log(person.name)
    console.log(person)

}

// let person = {name: 'andi', age: 10, address: 'fmi'}

// info({name: 'andi', age: 10, address: 'fmi'})

console.log(...[1, 3, 4, 5, 5])

let person2 = {...person, job: "fmi"}

console.log(person2)


let fn = function() {

    console.log(this.name)
}

let person = {name: 'me'}

fn.bind(person)()

fn()


export default const PI = 3.13;

const name = 'ME'

export {name}