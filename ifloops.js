// if... else
let age = 20;

if (age <= 12) {
    console.log("Hello kid");

}

else if (age <= 18) {
    console.log("Hello teen");
}

else {
    console.log("Hello adult");
}

// for loop
let fruits = ["apple ", "mango", "pineapple", "banana", "coconut"];

for (let i = 0; i < fruits.length; i ++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);   
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
console.log("Happy new year!");

// Arrays (similar to pyton lists)
let numbers = [123, 456, 789]
let schools = ["c"]
let mixed = [1.23, "Happy", [4, 5, 6]];

console.log(numbers[0]);
console.log(schools.length);

schools.push("s")
schools.push("ii");
console.log(schools);
schools.pop(); // remove from end
console.log(schools);

for (let i = 0; i < schools.length; i++){
    console.assert.log(schools[i])
}

// Objects (like dictionaries in python)
let person = {
    firstName: "Shawn",
    lastName: "Adams",
    age: 17,
    isStudent: true
};
