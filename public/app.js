import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
let docOne; // variable declaration
let docTwo;
docOne = new Invoice("name", "web work", 200);
docTwo = new Payment("another name", "pluming work", 100);
console.log(docOne);
console.log(docTwo);
let docs = [];
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
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
