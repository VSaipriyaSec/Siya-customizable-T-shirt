let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function checkout() {
    let message = "🧵 SIYA Customized T-Shirt Order\n\n";
    cart.forEach(item => {
        message += "👕 " + item.name + " - ₹" + item.price + "\n";
    });
    message += "\n💰 Total: ₹" + total;

    const url = "https://wa.me/917200563726?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
function placeOrder(event) {
    event.preventDefault();
    alert("Order submitted! We will contact you soon.");
}


