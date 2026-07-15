console.log("Running shopping cart script");
const OUTPUT = document.getElementById("listcart");
const output = document.getElementById("CheckOutList");
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

  for (let i = 0; i < listitem.length; i++) { //i start at 0 until equan to the number of product, and i plus one every time//
    cartHTML += "<p>" + listitem[i].name + " - " + listitem[i].price + " - " + listitem[i].quantity + "</p>"; //write out the code//
  }

  OUTPUT.innerHTML = cartHTML;// print out the code to the pages //
  output.innerHTML = cartHTML;// same //
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




