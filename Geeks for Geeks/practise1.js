
let person1= {
    name: "Fahmeda",
    age: 101
}

let person2= Object.assign({}, person1)

person1.age = 111
person2.name = 'Touheda'

console.log(person1);
console.log(person2);
