import {Invoice} from "./classes/invoice.js";
import {Payment} from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne : HasFormatter; // variable declaration
let docTwo : HasFormatter;

docOne = new Invoice("name", "web work", 200);
docTwo = new Payment("another name", "pluming work", 100);
console.log(docOne);
console.log(docTwo);
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

// const invOne = new Invoice('someone', "website development work", 20);
// const invTwo = new Invoice('everyone', "website development work", 80);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(invoice => {
//     console.log(invoice.details,invoice.amount,invoice.format());
// })

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
})