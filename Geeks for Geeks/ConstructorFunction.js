/**
 * new keyword and constructor functions
 * 
 * Constructor functions technically are regular functions. They have 2 conventions though they named with capital letter first.
 * They should be executed only with "new" operator
 */

function User(name, age){
    this.name = name,
    this.age= age

}

const user1= new User("Fahmeda", 29032)
const user2= new User("Touheda", 869)

console.log(user1.name);
console.log(user2);