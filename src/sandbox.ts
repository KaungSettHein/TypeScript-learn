const character = "no one";
console.log(character);

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
})

let greet: Function;

greet = () =>{
    console.log("Hi Mom!");
}
type SorN = string | number;
type obj = { name: string, uid: SorN};

const add = (a:number , b:number, c: SorN = 10):void =>{
    console.log(a+b);
    console.log(c);
}
add(1,2);
const addition = (a:number , b:number):number => {
    return a+b;
}

let value = addition(10,1);
console.log(value);

