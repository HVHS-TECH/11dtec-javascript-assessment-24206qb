console.log('hello world');

function openCart() {
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 0px 0 auto ";
 } 
}

function closeCart() {
const cartTab = document.querySelector(".showcart .cartTab")

 if (cartTab) {
   cartTab.style.inset =" 0 -400px 0 auto ";
 }
  
}



