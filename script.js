console.log("Hello world!")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function addShoppingItem() {
  const shoppingInput = document.getElementById("shoppingItemField");
  const item = shoppingInput.value.trim();
  SHOPPING_LIST.forEach((item) => {
    message += `<p>${item}</p>`;
  });

  SHOPPING_OUTPUT.innerHTML = message;
}
