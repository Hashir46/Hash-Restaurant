
const cartItems = [];
let totalAmount = 0;

function addToCart(name, price, image) {
  const existingItem = cartItems.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name, price, image, quantity: 1 });
  }
  updateCart();

  showCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";
  totalAmount = 0;

  cartItems.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div>${item.name}</div>
    <div class="quantity-control">
      <button onclick="changeQuantity('${item.name}', -1)">-</button>
      <span>${item.quantity}</span>
      <button onclick="changeQuantity('${item.name}', 1)">+</button>
    </div>
    <div>Rs. ${itemTotal}</div>
    <button onclick="removeFromCart('${item.name}')">Remove</button>
  `;
    cartContainer.appendChild(itemDiv);
  });

  document.getElementById(
    "total-amount"
  ).innerText = `Total: Rs. ${totalAmount}`;
}

function changeQuantity(name, change) {
  const item = cartItems.find((item) => item.name === name);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      updateCart();
    }
  }
}

function removeFromCart(name) {
  const itemIndex = cartItems.findIndex((item) => item.name === name);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    updateCart();
  }
}

function showCart() {
  document.getElementById("cart-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function proceedToBuy() {
localStorage.setItem('cartItems', JSON.stringify(cartItems));
window.location.href = 'buyNow.html'; 
}
