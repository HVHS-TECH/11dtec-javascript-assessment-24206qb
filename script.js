let Wishlish = document.querySelector('.Wishlish')
let closecart = document.querySelector('.close')
let body = document.querySelector('body')

Wishlish.addEventListener('click', () => {
  body.classList.toggle('showcart')
})

closecart.addEventListener('click', () => {
  body.classList.toggle('showcart')
})

const cartItems = [];
const cartListElement = document.querySelector(".Listcart");
const addButtons = document.querySelectorAll(".add-to-cart");

function formatPrice(value) {
  return Number(value).toFixed(2);
}

function renderCart() {
  if (!cartListElement) return;

  if (cartItems.length === 0) {
    cartListElement.innerHTML = '<p class="emptycart">Your cart is empty.</p>';
    return;
  }




}
renderCart();
