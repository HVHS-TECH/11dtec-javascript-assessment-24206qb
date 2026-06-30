console.log('hello world');
const OUTPUT = document.getElementById("listcart");
const listitem = []; //array//

function addToCart(name, price) {

    listitem.push({name: name, price: price}); //add the price and name producet to the array//
    showCart();
}

function showCart(){

   OUTPUT.innerHTML = ""; //It remove item from the array//
   for (let i = 0; i < listitem.length; i++) {//i start at 0 until equan to the number of product, and i plus one every time//
   OUTPUT.innerHTML += "<p>" + listitem[i].name + "-" + listitem[i].price + "</p>";
 } 
}



function openCart() { // open //
const cartTab = document.querySelector(".showcart .cartTab") //find the item you want to change//

 if (cartTab) { //if statement//
   cartTab.style.inset =" 0 0px 0 auto "; //change the from -600px to 0px//
 } 
}

function closeCart() { // close //
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 -600px 0 auto "; // revese the change//
 }
  
}




