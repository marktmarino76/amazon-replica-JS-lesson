export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [];
}

function saveToStorage() {
  //Note: local storage can only save strings
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, quantityNum) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    let totalQuantity =
      parseInt(matchingItem.quantity, 10) + parseInt(quantityNum, 10);
    matchingItem.quantity = totalQuantity.toString();
  } else {
    cart.push({
      productId: productId,
      quantity: quantityNum,
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
