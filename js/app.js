console.log('connected');
// Variable declaration section

// Const Ticket price variable
const FIRST_CLASS_TICKET_PRICE = 150;
const ECONOMY_TICKET_PRICE = 100;
const TAX = 0.1; // 10%

// -----------------------------------

let subtotal = 0;
let totalPrice = 0;
let chargeOfVat = 0;

const totalPriceId = document.getElementById("total");
const taxId = document.getElementById("tax");
const subTotalId = document.getElementById("subtotal");
// ---------------------------------------

const firstClassIncrementBtn = document.getElementById("first-class-increment-btn");
const firstClassDecrementBtn = document.getElementById("first-class-decrement-btn");
const noOfTicketFirstClass = document.getElementById("no-of-ticket-first-class");

const economyIncrementBtn = document.getElementById("economy-increment-btn");
const economyDecrementBtn = document.getElementById("economy-decrement-btn");
const noOfTicketEconomy = document.getElementById("no-of-ticket-economy");

//----------------------------------------------


//----------------------------------------------

// utility function
function debug(value) {
    console.log(value);
}

function getIntegerValue(number) {
    return parseInt(number);
}


function getSubTotalPrice() {
    return (getIntegerValue(noOfTicketFirstClass.value) * FIRST_CLASS_TICKET_PRICE) + (getIntegerValue(noOfTicketEconomy.value) * ECONOMY_TICKET_PRICE);
}

function updateAllPrice() {
    // debug(eachPrice[indexPrice])

    // calculate subtotal,total price
    subtotal = getSubTotalPrice();
    chargeOfVat = (subtotal * TAX);
    totalPrice = (subtotal * TAX) + subtotal;

    // show the price
    subTotalId.innerText = subtotal;
    taxId.innerText = chargeOfVat;
    totalPriceId.innerText = totalPrice;
    // updateTotalPrice();
}

function incrementDecrementBtn(quantity, noQuantity) {
    let totalQuantity = getIntegerValue(quantity.value) + noQuantity;
    if (totalQuantity >= 0) {
        quantity.value = totalQuantity;
        updateAllPrice();
    }
    // debug(quantity.value);
}

// Increment and Decrement event handler.

firstClassIncrementBtn.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    incrementDecrementBtn(noOfTicketFirstClass, 1);
});
firstClassDecrementBtn.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    incrementDecrementBtn(noOfTicketFirstClass, -1);
});
economyIncrementBtn.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    incrementDecrementBtn(noOfTicketEconomy, 1);
});
economyDecrementBtn.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    incrementDecrementBtn(noOfTicketEconomy, -1);
});