/* =========================
   TABLE BOOKING
========================= */

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const date =
document.getElementById("date").value;

const people =
document.getElementById("people").value;

const message =
`🪄 Cafe Potterhead Table Reservation

Name: ${name}
Date: ${date}
Guests: ${people}

I would like to reserve a table.`;

window.open(
`https://wa.me/917039624494?text=${encodeURIComponent(message)}`,
"_blank"
);

});


/* =========================
   ORDER FROM TABLE
========================= */

const prices = {
butterbeer:169,
lemonade:149,
cappuccino:149,
fries:129,
combo:299,
peri:149
};

const names = {
butterbeer:"Butter Beer",
lemonade:"Colour Shift Lemonade",
cappuccino:"Frothy Owl Cappuccino",
fries:"Firebolt Fries",
combo:"Hogwarts Special Combo",
peri:"Wizard's Cheesy Peri Fries"
};

const quantities = {
butterbeer:0,
lemonade:0,
cappuccino:0,
fries:0,
combo:0,
peri:0
};

function changeQty(item, amount){

quantities[item] += amount;

if(quantities[item] < 0){
quantities[item] = 0;
}

document.getElementById(
item + "-qty"
).innerText = quantities[item];

updateOrder();
}

function updateOrder(){

let total = 0;

let summary = "";

for(let item in quantities){

if(quantities[item] > 0){

summary += `
<div>
${names[item]} × ${quantities[item]}
</div>
`;

total += quantities[item] * prices[item];
}

}

if(summary === ""){
summary = "No items selected";
}

document.getElementById(
"summaryItems"
).innerHTML = summary;

document.getElementById(
"total"
).innerText = total;

}

function placeOrder(){

const tableNo =
document.getElementById("tableNo").value;

if(tableNo === ""){

showAlert(
"⚡ Please enter your table number before placing your magical order."
);

return;
}

let hasItems = false;

let orderText =
`🪄 Cafe Potterhead Order

Table Number: ${tableNo}

Items:
`;

let total = 0;

for(let item in quantities){

if(quantities[item] > 0){

hasItems = true;

orderText +=
`${names[item]} × ${quantities[item]}\n`;

total +=
quantities[item] * prices[item];
}
}

if(!hasItems){
showAlert(
"⚡ Please select at least one magical item before sending your order."
);
return;
}

orderText += `\nTotal: ₹${total}`;

window.open(
`https://wa.me/917039624494?text=${encodeURIComponent(orderText)}`,
"_blank"
);

}

function showAlert(message){

document.getElementById(
"alertText"
).innerText = message;

document.getElementById(
"magicAlert"
).style.display = "flex";
}

function closeAlert(){

document.getElementById(
"magicAlert"
).style.display = "none";
}