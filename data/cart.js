export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [];
}

function saveToStorage() {
  //Note: local storage can only save strings
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  //Step 1: Create a new array
  const newCart = [];
  //Step 2: Loop through the cart
  //Step 3: add each product to new array, except for this productId
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  //Step 4: Re-assigned original cart array to newCart array
  cart = newCart;
  saveToStorage();
}
