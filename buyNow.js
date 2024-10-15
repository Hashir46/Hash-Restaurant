const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartContainer = document.getElementById("cart-items");
let totalAmount = 0;

cartItems.forEach((item) => {
  const itemTotal = item.price * item.quantity;
  totalAmount += itemTotal;

  const itemDiv = document.createElement("div");
  itemDiv.className = "cart-item";
  itemDiv.innerHTML = `
  <img src="${item.image}" alt="${item.name}">
  <div class="item-details">
    <div class="it">${item.name}</div>
    <div class="qty">Quantity: ${item.quantity}</div>
    <div class="tot">Rs. ${itemTotal}</div>
  </div>
`;
  cartContainer.appendChild(itemDiv);
});

document.getElementById(
  "total-amount"
).innerText = `Total: Rs. ${totalAmount}`;


document
  .getElementById("payNow")
  .addEventListener("click", function (event) {
    const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("num").value.trim();
const address = document.getElementById("add").value.trim();


if (!name || !email || !phone || !address) {
alert("Please fill in all required fields.");
return; 
}
    const cartItems =
      JSON.parse(localStorage.getItem("cart-items")) || []; 
    const paymentMethodSelected = document.querySelector(
      'input[name="payment-method"]:checked'
    );
    
    console.log("Cart Items:", cartItems);
    console.log("Payment Method Selected:", paymentMethodSelected);

       
if (cartItems.length === '') {
alert("Your cart is empty. Please add items to your cart before proceeding to payment.");
return;
}

else if (!paymentMethodSelected ) {
alert("Please select a payment method.");
return;
}
else if (paymentMethodSelected && cartItems.length === '') {
alert("Please add items to the cart");
return;
}
  else{
    alert("Payment Processed Successfully");
  }

   
    localStorage.removeItem("cart-items");
    window.location.href = "thankYou.html"; 
  });


const paymentOptions = document.querySelectorAll(
  'input[name="payment-method"]'
);

paymentOptions.forEach((option) => {
  option.addEventListener("change", function () {
    document.querySelectorAll(".payment-fields").forEach((field) => {
      field.style.display = "none"; 
    });
    const selectedField = document.getElementById(
      option.value === "credit"
        ? "credit-fields"
        : option.value === "debit"
        ? "debit-fields"
        : option.value === "upi"
        ? "upi-fields"
        : ""
    );
    if (selectedField) {
      selectedField.style.display = "block"; 
    }
  });
});



const upiApps = document.querySelectorAll('input[name="upi-app"]');
upiApps.forEach((app) => {
  app.addEventListener("change", function () {
    const otherUpiInput = document.getElementById("other-upi");
    otherUpiInput.style.display =
      app.value === "other" ? "block" : "none";
  });
});


paymentOptions.forEach((option) => {
  if (option.checked) {
    option.dispatchEvent(new Event("change"));
  }
});
