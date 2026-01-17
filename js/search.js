const searchInput = document.querySelector("input[type='text']");
const resultDiv = document.querySelector(".grid");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const keyword = searchInput.value.toLowerCase();
        resultDiv.innerHTML = "";

        products
            .filter(p => p.name.toLowerCase().includes(keyword))
            .forEach(p => {
                resultDiv.innerHTML += `<div>${p.name} - ₹${p.price}</div>`;
            });
    });
}
