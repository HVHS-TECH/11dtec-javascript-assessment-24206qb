const cartItems = [];
const cartListElement = document.querySelector(".Listcart");
const addButtons = document.querySelectorAll(".add-to-cart");

function formatPrice(value) {
  return Number(value).toFixed(2);
}

function renderCart() {
  if (!cartListElement) return;

  if (cartItems.length === 0) {
    cartListElement.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    return;
  }


}
renderCart();
