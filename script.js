// ===============================
// Sufees Lounge - Complete script.js
// ===============================

// Complete Menu Data
const menuData = {
    muske_ka_chaska: [
        { item: "Bread Slice", price: 10, img: "tea-coffee.jpg" },
        { item: "Bread Toast", price: 15, img: "tea-coffee.jpg" },
        { item: "Bread Butter Toast", price: 20, img: "tea-coffee.jpg" },
        { item: "Pav", price: 15, img: "tea-coffee.jpg" },
        { item: "Butter Pav", price: 20, img: "tea-coffee.jpg" },
        { item: "Grilled Pav", price: 25, img: "tea-coffee.jpg" },
        { item: "Jam Bread", price: 40, img: "tea-coffee.jpg" },
        { item: "Mawa Cake", price: 30, img: "tea-coffee.jpg" }
    ],

    pizza: [
        { item: "Plain Cheese Pizza", regular: 90, medium: 110, large: 130 },
        { item: "Classic Veggie Pizza", regular: 110, medium: 130, large: 150 },
        { item: "Veg Dhamaka Pizza", regular: 130, medium: 150, large: 170 },
        { item: "Paneer Tikka Pizza", regular: 140, medium: 160, large: 180 },
        { item: "Chicken Cheese Pizza", regular: 110, medium: 130, large: 150 },
        { item: "Chicken Kebab Pizza", regular: 130, medium: 150, large: 170 },
        { item: "Chicken Tikka Pizza", regular: 140, medium: 160, large: 180 },
        { item: "Sufees Special Burst", regular: 220, medium: 260, large: null },
        { item: "Chicken Peri Peri", regular: 160, medium: 180, large: 200 }
    ],

    ande_ka_funda: [
        { item: "Boil Egg", price: 20, img: "egg-items.jpg" },
        { item: "Omelette", price: 40, img: "egg-items.jpg" },
        { item: "Cheese Omelette", price: 50, img: "egg-items.jpg" },
        { item: "Bun Cheese Omelette", price: 70, img: "egg-items.jpg" },
        { item: "Bhurji", price: 60, img: "egg-items.jpg" },
        { item: "Cheese Bhurji", price: 70, img: "egg-items.jpg" },
        { item: "Masala Omelette", price: 50, img: "egg-items.jpg" },
        { item: "Half Fry Egg", price: 25, img: "egg-items.jpg" }
    ],

    sandwich: [
        { item: "Mix Veg", cheese: 80, grilled: 90 },
        { item: "Aloo Tikki", cheese: 90, grilled: 100 },
        { item: "Mix Veg Sweet Corn", cheese: 90, grilled: 100 },
        { item: "Chicken Classic", cheese: 90, grilled: 100 },
        { item: "Chicken Burst", cheese: 150, grilled: 160 },
        { item: "Chocolate Sandwich", cheese: 90, grilled: 100 }
    ],

    maggie: [
        { item: "Masala Maggie", price: 30, img: "pasta.jpg" },
        { item: "Plain Cheese Maggie", price: 40, img: "pasta.jpg" },
        { item: "Spicy Cheese Maggie", price: 50, img: "pasta.jpg" },
        { item: "Sweet Corn Maggie", price: 40, img: "pasta.jpg" },
        { item: "Chicken Maggie", price: 70, img: "pasta.jpg" }
    ],

    kuk_du_ku: [
        { item: "Chicken Bhurji", price: 100, img: "chicken-burger.jpg" },
        { item: "Cheese Chicken Bhurji", price: 120, img: "chicken-burger.jpg" }
    ],

    burger: [
        { item: "Veg Burger", price: 80, img: "burger.jpg" },
        { item: "Aloo Tikki Burger", price: 90, img: "burger.jpg" },
        { item: "Chicken Burger", price: 110, img: "burger.jpg" },
        { item: "Chicken Zinger Burger", price: 130, img: "burger.jpg" },
        { item: "Longer", price: 100, img: "burger.jpg" }
    ],

    shakes_mocktails: [
        { item: "Cold Coffee", price: 70, img: "cold-coffee.jpg" },
        { item: "Cold Coffee Crush", price: 80, img: "cold-coffee.jpg" },
        { item: "Choco Cold Coffee", price: 90, img: "cold-coffee.jpg" },
        { item: "Chocolate Shake", price: 80, img: "mocktail.jpg" },
        { item: "Oreo Shake", price: 80, img: "mocktail.jpg" },
        { item: "Kit Kat Shake", price: 80, img: "mocktail.jpg" },
        { item: "Blue Lagoon", price: 70, img: "mocktail.jpg" },
        { item: "Mojito", price: 80, img: "mocktail.jpg" },
        { item: "Anjeer Date Shake", price: 90, img: "mocktail.jpg" },
        { item: "Nutella Shake", price: 90, img: "mocktail.jpg" }
    ],

    pasta: [
        { item: "Veg Italian", price: 90, img: "pasta.jpg" },
        { item: "Veg Tandoori Pasta", price: 100, img: "pasta.jpg" },
        { item: "White Sauce Pasta", price: 120, img: "pasta.jpg" },
        { item: "Chicken Tandoori Pasta", price: 140, img: "pasta.jpg" }
    ],

    beverages: [
        { item: "Tea", price: 15, img: "tea-coffee.jpg" },
        { item: "Coffee", price: 30, img: "tea-coffee.jpg" },
        { item: "Black Coffee", price: 30, img: "tea-coffee.jpg" },
        { item: "Cold Drink", price: 20, img: "cold-coffee.jpg" },
        { item: "Water Bottle", price: 15, img: "tea-coffee.jpg" },
        { item: "Bourn Vita", price: 50, img: "tea-coffee.jpg" }
    ],

    dessert: [
        { item: "Mulberry Cream", price: null, img: "mocktail.jpg" },
        { item: "Sitafal Cream", price: null, img: "mocktail.jpg" }
    ]
};

// Category Names
const categoryNames = {
    muske_ka_chaska: "Muske Ka Chaska",
    pizza: "Pizza",
    ande_ka_funda: "Ande Ka Funda",
    sandwich: "Sandwich",
    maggie: "Maggie",
    kuk_du_ku: "Kuk Du Ku",
    burger: "Burger",
    shakes_mocktails: "Shakes & Mocktails",
    pasta: "Pasta",
    beverages: "Beverages",
    dessert: "Dessert"
};

// Safe SVG fallback image
const fallbackImage =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="260">
            <rect width="100%" height="100%" fill="#D4AF37"/>
            <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle"
                fill="#0B0B0B" font-size="24" font-family="Arial" font-weight="bold">
                SUFEES LOUNGE
            </text>
            <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle"
                fill="#0B0B0B" font-size="15" font-family="Arial">
                Muske Ka Chaska
            </text>
        </svg>
    `);

// DOM Elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");
const orderForm = document.getElementById("orderForm");
const footerYear = document.getElementById("footerYear");

// Mobile Menu Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// Navbar Background on Scroll
if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.style.background =
            window.scrollY > 100
                ? "rgba(11, 11, 11, 0.98)"
                : "rgba(11, 11, 11, 0.95)";
    });
}

// Back to Top Button
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Smooth Scroll
document.querySelectorAll("a[data-scroll]").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("data-scroll");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Dynamic Footer Year
if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} Sufees Lounge. All rights reserved.`;
}

// ===============================
// Menu System
// ===============================

const menuContainer = document.getElementById("menuCategories");
const filterBtns = document.querySelectorAll(".filter-btn");

if (menuContainer) {
    generateMenu();

    // Show all categories on page load
    showMenuCategory("all");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            showMenuCategory(filter);
        });
    });
}

function generateMenu() {
    let html = "";

    html += generateSimpleCategory("muske_ka_chaska");
    html += generatePizzaTable();
    html += generateSimpleCategory("ande_ka_funda");
    html += generateSandwichTable();
    html += generateSimpleCategory("maggie");
    html += generateSimpleCategory("kuk_du_ku");
    html += generateSimpleCategory("burger");
    html += generateSimpleCategory("shakes_mocktails");
    html += generateSimpleCategory("pasta");
    html += generateSimpleCategory("beverages");
    html += generateSimpleCategory("dessert");

    menuContainer.innerHTML = html;
}

function generateSimpleCategory(categoryKey) {
    const items = menuData[categoryKey];
    const categoryTitle = categoryNames[categoryKey];

    if (!items) return "";

    let itemsHtml = "";

    items.forEach((item) => {
        const price = item.price !== null ? `₹${item.price}` : "Ask Price";
        const imagePath = item.img ? `images/${item.img}` : fallbackImage;

        itemsHtml += `
            <div class="menu-item">
                <img 
                    src="${imagePath}" 
                    alt="${item.item}" 
                    onerror="this.onerror=null; this.src='${fallbackImage}'"
                >
                <h3>${item.item}</h3>
                <span class="price">${price}</span>
            </div>
        `;
    });

    return `
        <div class="menu-category" data-category="${categoryKey}">
            <h2>${categoryTitle}</h2>
            <div class="menu-grid">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function generatePizzaTable() {
    let rows = "";

    menuData.pizza.forEach((item) => {
        rows += `
            <tr>
                <td>${item.item}</td>
                <td>${item.regular ? `₹${item.regular}` : "-"}</td>
                <td>${item.medium ? `₹${item.medium}` : "-"}</td>
                <td>${item.large ? `₹${item.large}` : "-"}</td>
            </tr>
        `;
    });

    return `
        <div class="menu-category" data-category="pizza">
            <h2>Pizza <span class="pizza-note">(Regular / Medium / Large)</span></h2>
            <div class="pizza-table">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Regular</th>
                            <th>Medium</th>
                            <th>Large</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function generateSandwichTable() {
    let rows = "";

    menuData.sandwich.forEach((item) => {
        rows += `
            <tr>
                <td>${item.item}</td>
                <td>${item.cheese ? `₹${item.cheese}` : "-"}</td>
                <td>${item.grilled ? `₹${item.grilled}` : "-"}</td>
            </tr>
        `;
    });

    return `
        <div class="menu-category" data-category="sandwich">
            <h2>Sandwich <span class="sandwich-note">(Cheese / Grilled)</span></h2>
            <div class="sandwich-table">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Cheese</th>
                            <th>Grilled</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showMenuCategory(filter) {
    const categories = document.querySelectorAll(".menu-category");

    categories.forEach((category) => {
        if (filter === "all" || category.dataset.category === filter) {
            category.classList.add("active");
        }