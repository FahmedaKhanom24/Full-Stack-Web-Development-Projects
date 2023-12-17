/**
 * Function Borrowing - Call, Apply AND Bind
 */

const user1 = {
    name: "Fahmeda",
    age: 300,
    //Implicit binding
    displayMessage() {
        console.log(this.age);
    }
};


const user2 = {
    name: "Touheda",
    age: 400,
}

const user3 = {
    name: "Tasnia",
    age: 500,
}

function sayHi(degree, year) {
    console.log(this.name, degree, year);
}

/**
 * Explicit binding using call, method, and apply
 */

user1.displayMessage()


sayHi.call(user1, "BTect", 2023)

sayHi.apply(user1,["BTech", 2023])

const result= sayHi.bind(user3, "B-Tech", 2023)
result()