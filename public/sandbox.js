"use strict";
const character = "no one";
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
let greet;
greet = () => {
    console.log("Hi Mom!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2);
const addition = (a, b) => {
    return a + b;
};
let value = addition(10, 1);
console.log(value);
