console.log('hello world');
const OUTPUT = document.getElementById("listcart");

function addToCart(name, price) {
OUTPUT.innerHTML += "<p>"+ name + "" + price + "</p>";
}














































function openCart() {
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 0px 0 auto ";
 } 
}

function closeCart() {
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 -800px 0 auto ";
 }
  
}




