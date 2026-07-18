console.log("Blade & Beyond Shop");
const OUTPUT = document.getElementById("listcart");
const output = document.getElementById("CheckOutList");
const cartTotal = document.getElementById("cartTotal");//element to show the total in the cart//
const cartTotalCheckOut = document.getElementById("cartTotalCheckOut");//element to show the total in checkout//
let listitem = [];//array//

function addToCart(name, price) { //push the price and name producet to the array//

  let itemIndex = -1;   // -1 means not found yet//

  for (let i = 0; i < listitem.length; i++) {  // check if the item is there or not//

    if (listitem[i].name === name) {
      // remember the position//
      itemIndex = i;
    }
  }

  if (itemIndex === -1) {
    listitem.push({ name: name, price: price, quantity: 1 }); //if itemIndex is still -1 not added in the cart//
  } else {
    listitem[itemIndex].quantity = listitem[itemIndex].quantity + 1; // add 1 to the quantity of the item//
  }

  showCart();
}

function showCart() {

  let cartHTML = "";// start with an empty string//
  let total = 0;// this will add up the total price//

  for (let i = 0; i < listitem.length; i++) { //i start at 0 until equan to the number of product, and i plus one every time//
    cartHTML += "<p>" + listitem[i].name + " - $" + listitem[i].price + " - " + listitem[i].quantity + "</p>"; //write out the code//

    total = total + (listitem[i].price * listitem[i].quantity);//add this item's total to the overall total//
  }

  OUTPUT.innerHTML = cartHTML;// print out the code to the pages //
  output.innerHTML = cartHTML;// same //
  cartTotal.innerHTML = "Total: $" + total.toFixed(2);// show the total in the cart//
  cartTotalCheckOut.innerHTML = "Total: $" + total.toFixed(2);// show the total in checkout too//
}


function done() { // runs when the done button is clicked //

  const nameField = document.getElementById("nameField");//get the name input//
  const moneyField = document.getElementById("moneyField");//get the pocket money input//
  const checkoutWarning = document.getElementById("checkoutWarning");//element for the warning message//
  const receiptList = document.getElementById("ReceiptList");//element to put the receipt items in//
  const receiptTotal = document.getElementById("receiptTotal");//element to put the receipt total in//
  const pocketMoneyTotal = document.getElementById("PocketMoneyTotal");//element to show pocket money//
  const changeTotal = document.getElementById("ChangeTotal");//element to show the change//

  let total = 0;// this will add up the total price//

  for (let i = 0; i < listitem.length; i++) { //go through every item bought//
    total = total + (listitem[i].price * listitem[i].quantity);//add this item's total to the overall total//
  }

  let money = Number(moneyField.value);// turn the pocket money input into a number//

  // check if there is enough money before doing anything else//
  if (money < total) {
    checkoutWarning.innerHTML = "Sorry, you don't have enough pocket money!";
    return;// stop the function here, do not open the receipt//
  }

  // if we get here, there was enough money, so clear any old warning//
  checkoutWarning.innerHTML = "";

  let change = money - total;// work out how much change is left over//

  let receiptHTML = "<p>Name: " + nameField.value + "</p>";// start the receipt with the name//

  for (let i = 0; i < listitem.length; i++) { //go through every item bought//
    receiptHTML += "<p>" + listitem[i].name + " - $" + listitem[i].price + " - " + listitem[i].quantity + "</p>"; //write out the code//
  }

  receiptList.innerHTML = receiptHTML;// print the receipt items//
  receiptTotal.innerHTML = "Total: $" + total.toFixed(2);// print the receipt total//
  pocketMoneyTotal.innerHTML = "Pocket money: $" + money.toFixed(2);// print the pocket money used//
  changeTotal.innerHTML = "Change: $" + change.toFixed(2);// print the change//

  openReceipt();// open the new receipt tab//
}

function openCart() { // open //
const cartTab = document.querySelector(".showcart .cartTab") //find the item you want to change//

 if (cartTab) { //if statement//
   cartTab.style.inset =" 0 0px 0 auto "; //change the width position from -600px to 0px//
 } 
}

function closeCart() { // close //
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }
  
}

function openCheckOut() { // open //
const CheckOutTab = document.querySelector(".showcart .CheckOutTab") //find the item you want to change//
const cartTab = document.querySelector(".showcart .cartTab") //find the item you want to change//

 if (CheckOutTab) { //if statement//
   CheckOutTab.style.inset =" 0 0px 0 auto "; //change the width position from -600px to 0px//
 } 

  if (cartTab) {
   cartTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }
}

function closeCheckOut() { // close //
const CheckOutTab = document.querySelector(".showcart .CheckOutTab")
const cartTab = document.querySelector(".showcart .cartTab")

 if (CheckOutTab) {
   CheckOutTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }

  if (cartTab) { //if statement//
   cartTab.style.inset =" 0 0px 0 auto "; //change the width position from -600px to 0px//
 } 
}

function openReceipt() { // open //
const ReceiptTab = document.querySelector(".showcart .ReceiptTab") //find the item you want to change//
const CheckOutTab = document.querySelector(".showcart .CheckOutTab") //find the item you want to change//

 if (ReceiptTab) { //if statement//
   ReceiptTab.style.inset =" 0 0px 0 auto "; //change the width position from -600px to 0px//
 } 

  if (CheckOutTab) {
   CheckOutTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }
}

function closeReceipt() { // close //
const ReceiptTab = document.querySelector(".showcart .ReceiptTab")

 if (ReceiptTab) {
   ReceiptTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }
}