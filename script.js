const shopItems = [
    { name: "Slim Fit Jeans", category: "Men", type: "jeans", price: 1200 },
    { name: "Casual T-shirt", category: "Men", type: "tshirt", price: 600 },
    { name: "Formal Shirt", category: "Men", type: "shirt", price: 1100 },
    { name: "Track Pant", category: "Men", type: "pant", price: 900 },
    { name: "Printed T-shirt", category: "Women", type: "tshirt", price: 750 },
    { name: "Denim Jeans", category: "Women", type: "jeans", price: 1500 },
    { name: "Combo Pack", category: "Men", type: "mix", price: 2000 },
    { name: "Kids Shorts", category: "Kids", type: "pant", price: 500 },
    { name: "Girls Frock", category: "Kids", type: "mix", price: 800 },
    { name: "Oversized Hoodie", category: "Women", type: "tshirt", price: 1300 },
    { name: "Cargo Pants", category: "Men", type: "pant", price: 1400 },
    { name: "Polka Dot Shirt", category: "Women", type: "shirt", price: 1000 },
    { name: "Running Shorts", category: "Men", type: "pant", price: 800 },
    { name: "Ankle Jeans", category: "Women", type: "jeans", price: 1600 },
    { name: "Winter Combo", category: "Women", type: "mix", price: 2200 },
    { name: "Boys T-shirt", category: "Kids", type: "tshirt", price: 450 },
    { name: "School Uniform", category: "Kids", type: "shirt", price: 950 },
    { name: "Ethnic Set", category: "Women", type: "mix", price: 1800 },
    { name: "Linen Shirt", category: "Men", type: "shirt", price: 1250 },
    { name: "Gym Wear Pack", category: "Men", type: "mix", price: 2400 },
];


const categorySelect = document.getElementById("categorySelect");
const typeSelect = document.getElementById("typeSelect");
const itemsContainer = document.getElementById("itemsContainer");

function populateFilters() {
    const categories = new Set(shopItems.map(item => item.category));
    const types = new Set(shopItems.map(item => item.type));

    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        categorySelect.appendChild(opt);
    });

    types.forEach(type => {
        const opt = document.createElement("option");
        opt.value = type;
        opt.textContent = type;
        typeSelect.appendChild(opt);
    });
}

function renderItems(filteredItems) {
    itemsContainer.innerHTML = "";
    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "item-card";

        const name = document.createElement("div");
        name.className = "item-name";
        name.textContent = item.name;

        const details = document.createElement("div");
        details.className = "item-details";
        details.textContent = `${item.category} • ${item.type} • ₹${item.price}`;

        card.appendChild(name);
        card.appendChild(details);
        itemsContainer.appendChild(card);
    });
}

function filterItems() {
    const selectedCategory = categorySelect.value;
    const selectedType = typeSelect.value;

    const filtered = shopItems.filter(item => {
        const matchCategory = selectedCategory === "" || item.category === selectedCategory;
        const matchType = selectedType === "" || item.type === selectedType;
        return matchCategory && matchType;
    });

    renderItems(filtered);
}

categorySelect.addEventListener("change", filterItems);
typeSelect.addEventListener("change", filterItems);

populateFilters();
renderItems(shopItems); // Initial render


// Disable certain key combinations
document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    // Ctrl+S (Prevent Save Page)
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }
});

// Disable right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
