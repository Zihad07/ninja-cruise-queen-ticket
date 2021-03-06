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

const bookNowBtn = document.getElementById('book-now-btn');

//----------------------------------------------

// Flying information
const flyingFrom = document.getElementById("flying-from");
const flyingTo = document.getElementById("flying-to");
const departureTime = document.getElementById("departure-time");
const returnTime = document.getElementById("return-time");
const ticketInfoModal = document.getElementById("ticket-info");
const checkOutBtn = document.getElementById("check-out");

//----------------------------------------------

// utility function
function debug(value) {
    console.log(value);
}

function getIntegerValue(number) {
    return parseInt(number);
}

function resetAllField() {
    flyingFrom.value = null;
    flyingTo.value = null;
    departureTime.value = null;
    returnTime.value = null;
    noOfTicketEconomy.value = 0;
    noOfTicketFirstClass.value = 0;
    subTotalId.innerText = 0;
    taxId.innerText = 0;
    totalPriceId.innerText = 0;
}

function getTicketPrice(quantityOfTicket, priceOfTicket) {
    return (quantityOfTicket * priceOfTicket).toString();
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

// Book now button event handler

bookNowBtn.addEventListener('click', function(e) {
    // alert(e.target.innerText);

    // error handling
    if (!(flyingFrom.value && flyingTo.value && departureTime.value && departureTime.value)) {
        alert('Please Fill-up Flying information & date-time');
    } else if (getIntegerValue(totalPriceId.innerText) <= 0) {
        alert('please select no of any ticket class.');
    } else {
        //----------------------------------------------------------------------

        let text = `
        <p><strong>Flying From : </strong> ${flyingFrom.value}</p>
        <p><strong>Flying To : </strong> ${flyingTo.value}</p>
        <p><strong>Departure Time : </strong> ${departureTime.value} <strong>Return Time : </strong> ${departureTime.value}</p>
        <p><strong>No of First Class ticker : </strong> ${noOfTicketFirstClass.value} <strong>Price : </strong>$ ${ getTicketPrice(FIRST_CLASS_TICKET_PRICE , getIntegerValue(noOfTicketFirstClass.value))}</p>
        <p><strong>No of Economy Class ticker : </strong> ${noOfTicketEconomy.value} <strong>Price : </strong>$ ${ getTicketPrice(ECONOMY_TICKET_PRICE , getIntegerValue(noOfTicketEconomy.value))}</p>

        <hr>
        <p><strong>Total Price with 10% VAT : </strong>$ ${totalPriceId.innerText}</p>

    `
        ticketInfoModal.innerHTML = text;
        $("#exampleModal").modal('show');
    }
});

// Checkout Button Event  Handler

checkOutBtn.addEventListener('click', function() {
    alert('Congratulation, your tickets have been booked successfully. We will response to you by email.Thanks...:)');
    resetAllField();
    $("#exampleModal").modal('hide')
});