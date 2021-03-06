console.log('connected');
// Variable declaration section

// Const Ticket price variable
const FIRST_CLASS_TICKET_PRICE = 150;
const ECONOMY_TICKET_PRICE = 100;
const TAX = 0.1; // 10%

// -----------------------------------

let subtotal = 0;
let totalPrice = 0;
// ---------------------------------------

const firstClassIncrementBtn = document.getElementById("first-class-increment-btn");
const firstClassDecrementBtn = document.getElementById("first-class-decrement-btn");
const noOfTicketFirstClass = document.getElementById("no-of-ticket-first-class");

const economyIncrementBtn = document.getElementById("economy-increment-btn");
const economyDecrementBtn = document.getElementById("economy-decrement-btn");
const noOfTicketEconomy = document.getElementById("no-of-ticket-economy");

//----------------------------------------------

// utility function
function debug(value) {
    console.log(value);
}

function getIntegerValue(number) {
    return parseInt(number);
}


// Increment and Decrement event handler.

firstClassIncrementBtn.addEventListener('click', function(e) {
    console.log(e.target.innerText);
});
firstClassDecrementBtn.addEventListener('click', function(e) {
    console.log(e.target.innerText);
});
economyIncrementBtn.addEventListener('click', function(e) {
    console.log(e.target.innerText);
});
economyDecrementBtn.addEventListener('click', function(e) {
    console.log(e.target.innerText);
});