let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(productName, price) {
    cart.push({ productName, price, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
}

// Display cart items
function displayCart() {
    const table = document.getElementById("cartTable");
    const totalEl = document.getElementById("totalAmount");

    if (!table) return;

    table.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        table.innerHTML += `
            <tr>
                <td>${item.productName}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price}</td>
            </tr>
        `;
    });

    if (totalEl) totalEl.innerText = "₹" + total;
}

displayCart();
