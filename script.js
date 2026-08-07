// ================= FOOD MENU =================

const foods = [

    {
        id: 1,
        name: "Veg Meals",
        category: "meals",
        price: 120,
        emoji: "🍚"
    },

    {
        id: 2,
        name: "Chicken Biryani",
        category: "meals",
        price: 180,
        emoji: "🍗"
    },

    {
        id: 3,
        name: "French Fries",
        category: "snacks",
        price: 80,
        emoji: "🍟"
    },

    {
        id: 4,
        name: "Veg Burger",
        category: "burgers",
        price: 100,
        emoji: "🍔"
    },

    {
        id: 5,
        name: "Chicken Burger",
        category: "burgers",
        price: 150,
        emoji: "🍔"
    },

    {
        id: 6,
        name: "Pizza",
        category: "snacks",
        price: 160,
        emoji: "🍕"
    },

    {
        id: 7,
        name: "Coke",
        category: "drinks",
        price: 50,
        emoji: "🥤"
    },

    {
        id: 8,
        name: "Fresh Juice",
        category: "drinks",
        price: 70,
        emoji: "🧃"
    }

];


// ================= CART =================

let cart = [];


// ================= DISPLAY MENU =================

function displayMenu(items) {

    const container =
        document.getElementById("food-container");

    container.innerHTML = "";


    items.forEach(food => {

        const card = document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <div class="food-image">
                ${food.emoji}
            </div>

            <h3>${food.name}</h3>

            <p>Fresh and delicious</p>

            <span class="price">
                ₹${food.price}
            </span>

            <button
                class="add-btn"
                onclick="addToCart(${food.id})"
            >
                Add to Order
            </button>

        `;


        container.appendChild(card);

    });

}


// ================= FILTER MENU =================

function filterMenu(category) {

    if (category === "all") {

        displayMenu(foods);

        return;
    }


    const filteredFoods =
        foods.filter(food =>
            food.category === category
        );


    displayMenu(filteredFoods);
}


// ================= ADD TO CART =================

function addToCart(id) {

    const food =
        foods.find(item => item.id === id);


    const existingItem =
        cart.find(item => item.id === id);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    updateCart();
}


// ================= UPDATE CART =================

function updateCart() {

    const cartContainer =
        document.getElementById("cart-items");


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                Your cart is empty
            </p>
        `;

        updateTotal();

        return;
    }


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>
                    ₹${item.price}
                </p>

            </div>


            <div class="quantity">

                <button
                    onclick="changeQuantity(
                        ${item.id},
                        -1
                    )"
                >
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="changeQuantity(
                        ${item.id},
                        1
                    )"
                >
                    +
                </button>

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });


    updateTotal();
}


// ================= CHANGE QUANTITY =================

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);
    }


    updateCart();
}


// ================= CALCULATE TOTAL =================

function updateTotal() {

    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;

    });


    const tax = subtotal * 0.05;

    const total = subtotal + tax;


    document.getElementById("subtotal")
        .textContent =
        `₹${subtotal.toFixed(2)}`;


    document.getElementById("tax")
        .textContent =
        `₹${tax.toFixed(2)}`;


    document.getElementById("total")
        .textContent =
        `₹${total.toFixed(2)}`;
}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Please add something to your order."
        );

        return;
    }


    const token =
        "A" +
        Math.floor(
            100 +
            Math.random() * 900
        );


    document.getElementById(
        "token-number"
    ).textContent = token;


    document.getElementById(
        "order-modal"
    ).style.display = "flex";


    cart = [];

    updateCart();
}


// ================= CLOSE MODAL =================

function closeModal() {

    document.getElementById(
        "order-modal"
    ).style.display = "none";
}


// ================= INITIAL LOAD =================

displayMenu(foods);