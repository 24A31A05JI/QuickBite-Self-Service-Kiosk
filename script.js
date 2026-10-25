
"use strict";

/* QUICKBITE — COMPLETE SCRIPT.JS */

const photo = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;

const foodPhotos = {
  chickenBiryani:
    "https://biryanipanda.in/images/765fdab7-23e9-4355-b59d-04e4c7e4c7c8.png",
  muttonBiryani: 
    "https://antera.com.au/assets/images/dishes/mutton_biryani.jpg",
  andhraBiryani:
    "https://bpage.sgp1.digitaloceanspaces.com/61594112110.JPG",
  paneerBiryani:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85",
  vegBiryani:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2025/5/8/fa70ff7c-e8d6-4e28-a258-4c94cf397f8c_349e2414-51ab-4d17-9e6f-26e14068f47f.jpg",
  eggBiryani:
    "https://cdn.craftmymeals.com/recipes/hyderabadi-egg-biryani.webp",
  strawberrySmoothie:
    "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
  mangoShake:
    "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"
};

const menu = [
  {id:1,name:"Classic Cheese Burger",category:"Burgers",price:179,description:"Juicy patty with melted cheese and signature sauce.",image:photo("photo-1568901346375-23c9450c58cd")},
  {id:2,name:"Double Smash Burger",category:"Burgers",price:249,description:"Double patties with cheddar and caramelized onions.",image:photo("photo-1550547660-d9450f859349")},
  {id:3,name:"Crispy Chicken Burger",category:"Burgers",price:219,description:"Crispy chicken with lettuce and creamy mayo.",image:photo("photo-1606755962773-d324e0a13086")},
  {id:4,name:"Veggie Supreme Burger",category:"Burgers",price:169,description:"Vegetable patty with fresh greens and cheese.",image:photo("photo-1520072959219-c595dc870360")},
  {id:5,name:"BBQ Burger",category:"Burgers",price:259,description:"Smoky barbecue sauce, grilled patty and cheese.",image:photo("photo-1568901346375-23c9450c58cd")},
  {id:6,name:"Spicy Jalapeno Burger",category:"Burgers",price:229,description:"Spicy jalapenos, cheese and tangy sauce.",image:photo("photo-1561758033-d89a9ad46330")},

  {id:7,name:"Margherita Pizza",category:"Pizza",price:299,description:"Mozzarella, basil and classic tomato sauce.",image:photo("photo-1574071318508-1cdbab80d002")},
  {id:8,name:"Farmhouse Pizza",category:"Pizza",price:349,description:"Fresh vegetables, herbs and mozzarella.",image:photo("photo-1513104890138-7c749659a591")},
  {id:9,name:"Pepperoni Pizza",category:"Pizza",price:399,description:"Classic pepperoni with mozzarella cheese.",image:photo("photo-1628840042765-356cda07504e")},
  {id:10,name:"BBQ Chicken Pizza",category:"Pizza",price:429,description:"Grilled chicken, barbecue sauce and cheese.",image:photo("photo-1565299624946-b28f40a0ae38")},
  {id:11,name:"Four Cheese Pizza",category:"Pizza",price:449,description:"A rich blend of four delicious cheeses.",image:photo("photo-1593560708920-61dd98c46a4e")},
  {id:12,name:"Spicy Veg Pizza",category:"Pizza",price:329,description:"Spicy vegetables, chili flakes and cheese.",image:photo("photo-1571407970349-bc81e7e96d47")},

  
{id:13,name:"Creamy Alfredo Pasta",category:"Pasta",price:269,description:"Creamy garlic and parmesan sauce.",image:"https://static.spotapps.co/spots/91/4c676a14f9426a9788f7c28e5d6b8a/full"},
  {id:14,name:"Spicy Arrabbiata Pasta",category:"Pasta",price:249,description:"Penne pasta with spicy tomato sauce.",image:photo("photo-1551183053-bf91a1d81141")},
  {id:15,name:"Pesto Pasta",category:"Pasta",price:289,description:"Fresh basil pesto with parmesan.",image:photo("photo-1473093226795-af9932fe5856")},
  {id:16,name:"Mac and Cheese",category:"Pasta",price:279,description:"Macaroni in a rich and creamy cheese sauce.",image:photo("photo-1543339494-b4cd4f7ba686")},
  {id:17,name:"Tomato Basil Pasta",category:"Pasta",price:259,description:"Classic tomato sauce with fresh basil.",image:photo("photo-1556761223-4c4282c73f77")},
  {id:18,name:"Mushroom Cream Pasta",category:"Pasta",price:319,description:"Sauteed mushrooms in creamy white sauce.",image:photo("photo-1473093295043-cdd812d0e601")},

  {id:19,name:"Golden French Fries",category:"Sides",price:119,description:"Crispy golden fries with sea salt.",image:photo("photo-1573080496219-bb080dd4f877")},
  {id:20,name:"Crispy Nuggets",category:"Sides",price:159,description:"Crunchy nuggets with dipping sauce.",image:photo("photo-1562967914-608f82629710")},
  {id:21,name:"Garlic Bread",category:"Sides",price:129,description:"Toasted bread with garlic butter.",image:photo("photo-1619531040576-f9416740661b")},
  {id:22,name:"Mozzarella Sticks",category:"Sides",price:189,description:"Crispy cheese sticks with marinara sauce.",image:photo("photo-1531749668029-2db88e4276c7")},
  {id:23,name:"Onion Rings",category:"Sides",price:139,description:"Golden crispy onion rings.",image:photo("photo-1639024471283-03518883512d")},
  {id:24,name:"Loaded Fries",category:"Sides",price:199,description:"French fries topped with cheese and sauces.",image:photo("photo-1573080496219-bb080dd4f877")},

  {id:25,name:"Iced Coffee",category:"Beverages",price:149,description:"Smooth chilled coffee with ice.",image:photo("photo-1461023058943-07fcbe16d735")},
  {id:26,name:"Fresh Lemonade",category:"Beverages",price:99,description:"Freshly squeezed lemon with a refreshing twist.",image:photo("photo-1544145945-f90425340c7e")},
  {id:27,name:"Chocolate Milkshake",category:"Beverages",price:179,description:"Rich chocolate blended with creamy milk.",image:photo("photo-1572490122747-3968b75cc699")},
  {id:28,name:"Strawberry Smoothie",category:"Beverages",price:169,description:"Fresh strawberries blended into a creamy smoothie.",image:foodPhotos.strawberrySmoothie},
  {id:29,name:"Mango Shake",category:"Beverages",price:159,description:"Sweet mango blended with chilled milk.",image:foodPhotos.mangoShake},
  {id:30,name:"Cold Brew Coffee",category:"Beverages",price:169,description:"Slow brewed coffee served over ice.",image:photo("photo-1517701604599-bb29b565090c")},

  {id:31,name:"Chocolate Brownie",category:"Desserts",price:169,description:"Rich chocolate brownie with a soft center.",image:photo("photo-1606313564200-e75d5e30476c")},
  {id:32,name:"Classic Cheesecake",category:"Desserts",price:199,description:"Creamy cheesecake with a biscuit base.",image:photo("photo-1533134242443-d4fd215305ad")},
  {id:33,name:"Chocolate Cake",category:"Desserts",price:189,description:"Soft chocolate cake with rich frosting.",image:photo("photo-1578985545062-69928b1d9587")},
  {id:34,name:"Vanilla Ice Cream",category:"Desserts",price:99,description:"Classic creamy vanilla ice cream.",image:photo("photo-1563805042-7684c019e1cb")},
  {id:35,name:"Strawberry Cake",category:"Desserts",price:219,description:"Soft cake layered with strawberry cream.",image:photo("photo-1464305795204-6f5bbfc7fb81")},
  {id:36,name:"Chocolate Donut",category:"Desserts",price:129,description:"Soft donut covered in chocolate glaze.",image:photo("photo-1551024506-0bccd828d307")},

  {id:37,name:"Chicken Dum Biryani",category:"Biryani",price:249,description:"Aromatic basmati rice with tender spiced chicken.",image:foodPhotos.chickenBiryani},
  {id:38,name:"Mutton Dum Biryani",category:"Biryani",price:349,description:"Slow-cooked mutton with flavorful biryani rice.",image:foodPhotos.muttonBiryani},
  {id:39,name:"Andhra Fry Piece Biryani",category:"Biryani",price:279,description:"Spicy Andhra-style chicken fry pieces with fragrant rice.",image:foodPhotos.andhraBiryani},
  {id:40,name:"Paneer Biryani",category:"Biryani",price:229,description:"Paneer cubes with aromatic spices and basmati rice.",image:foodPhotos.paneerBiryani},
  {id:41,name:"Veg Dum Biryani",category:"Biryani",price:199,description:"Mixed vegetables with fragrant dum-cooked rice.",image:foodPhotos.vegBiryani},
  {id:42,name:"Egg Biryani",category:"Biryani",price:219,description:"Flavorful biryani rice with spiced boiled eggs.",image:foodPhotos.eggBiryani}
];

const categories = [
  "All","Burgers","Pizza","Pasta",
  "Biryani","Sides","Beverages","Desserts"
];

const sizes = [
  {name:"Regular",extra:0},
  {name:"Large",extra:60}
];

const addonsByCategory = {
  Burgers:[
    {name:"Extra Cheese",price:30},
    {name:"Extra Sauce",price:20}
  ],
  Pizza:[
    {name:"Extra Cheese",price:40},
    {name:"Extra Toppings",price:50}
  ],
  Pasta:[
    {name:"Extra Cheese",price:30},
    {name:"Extra Sauce",price:20}
  ],
  Biryani:[
    {name:"Extra Raita",price:20},
    {name:"Extra Salan",price:20},
    {name:"Extra Egg",price:25}
  ],
  Sides:[{name:"Extra Dip",price:20}],
  Beverages:[
    {name:"Less Ice",price:0},
    {name:"Extra Ice",price:0}
  ],
  Desserts:[
    {name:"Chocolate Syrup",price:20},
    {name:"Whipped Cream",price:30}
  ]
};

const $ = id => document.getElementById(id);
const GST_RATE = 0.05;

const money = amount =>
  "₹" + amount.toLocaleString("en-IN",{
    minimumFractionDigits:2,
    maximumFractionDigits:2
  });

let cart = [];
let activeCategory = "All";
let orderType = "Dine In";
let paymentMethod = "UPI";
let selectedItem = null;
let selectedSize = "Regular";
let selectedAddons = [];
let modalQuantity = 1;
let toastTimer;

/* Image fallback */

const fallbackImage = "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="520">
      <rect width="800" height="520" fill="#25262b"/>
      <text x="400" y="245" text-anchor="middle"
        fill="#d5ad60" font-size="54" font-family="Arial">QuickBite</text>
      <text x="400" y="300" text-anchor="middle"
        fill="#f8f5ef" font-size="24" font-family="Arial">Food image unavailable</text>
    </svg>`
  );

function setImage(img,source,name) {
  img.alt = name;
  img.onerror = () => {
    console.warn("Could not load:",name,source);
    img.onerror = null;
    img.src = fallbackImage;
  };
  img.src = source;
}

function makeImage(item) {
  const img = document.createElement("img");
  img.loading = "lazy";
  setImage(img,item.image,item.name);
  return img;
}

/* Screens and messages */

function showScreen(id) {
  ["welcomeScreen","orderScreen","successScreen"]
    .forEach(screen => {
      $(screen).classList.toggle("hidden",screen !== id);
    });
  window.scrollTo(0,0);
}

function openModal(id) {
  $(id).classList.remove("hidden");
}

function closeModal(id) {
  $(id).classList.add("hidden");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(
    () => toast.classList.remove("show"),2300
  );
}

/* Categories */

function renderCategories() {
  const container = $("categoryTabs");
  container.replaceChildren();

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-btn" +
      (activeCategory === category ? " active" : "");
    button.textContent = category;

    button.addEventListener("click",() => {
      activeCategory = category;
      renderCategories();
      renderMenu();
    });

    container.appendChild(button);
  });
}

/* Food cards */

function renderMenu() {
  const query = $("searchInput").value.trim().toLowerCase();

  const filtered = menu.filter(item => {
    const categoryMatches =
      activeCategory === "All" ||
      item.category === activeCategory;

    const searchMatches =
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return categoryMatches && searchMatches;
  });

  $("categoryTitle").textContent =
    activeCategory === "All" ? "Our Menu" : activeCategory;

  $("itemCount").textContent = `${filtered.length} dishes`;

  const grid = $("menuGrid");
  grid.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-message";
    empty.textContent = "No dishes found. Try another search.";
    grid.appendChild(empty);
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "food-card";

    const img = makeImage(item);
    img.className = "food-image";

    const content = document.createElement("div");
    content.className = "food-content";

    const category = document.createElement("span");
    category.className = "food-category";
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const footer = document.createElement("div");
    footer.className = "food-footer";

    const price = document.createElement("span");
    price.className = "food-price";
    price.textContent = money(item.price);

    const add = document.createElement("button");
    add.className = "add-btn";
    add.textContent = "+";
    add.setAttribute("aria-label",`Customize ${item.name}`);
    add.addEventListener("click",() => openItem(item.id));

    footer.append(price,add);
    content.append(category,title,description,footer);
    card.append(img,content);
    grid.appendChild(card);
  });
}

/* Customization */

function availableAddons() {
  return selectedItem
    ? addonsByCategory[selectedItem.category] || []
    : [];
}

function openItem(id) {
  selectedItem = menu.find(item => item.id === id);
  if (!selectedItem) return;

  selectedSize = "Regular";
  selectedAddons = [];
  modalQuantity = 1;

  setImage(
    $("modalItemImage"),
    selectedItem.image,
    selectedItem.name
  );

  $("modalItemCategory").textContent = selectedItem.category;
  $("modalItemName").textContent = selectedItem.name;
  $("modalItemDescription").textContent = selectedItem.description;

  renderCustomization();
  openModal("itemModal");
}

function unitPrice() {
  if (!selectedItem) return 0;

  const sizeExtra =
    sizes.find(s => s.name === selectedSize)?.extra || 0;

  const addonExtra = availableAddons()
    .filter(a => selectedAddons.includes(a.name))
    .reduce((sum,a) => sum + a.price,0);

  return selectedItem.price + sizeExtra + addonExtra;
}

function renderCustomization() {
  const sizeContainer = $("sizeOptions");
  sizeContainer.replaceChildren();

  sizes.forEach(size => {
    const button = document.createElement("button");
    button.className = "option-btn" +
      (selectedSize === size.name ? " active" : "");

    button.textContent = size.extra
      ? `${size.name} + ${money(size.extra)}`
      : `${size.name} — Included`;

    button.addEventListener("click",() => {
      selectedSize = size.name;
      renderCustomization();
    });

    sizeContainer.appendChild(button);
  });

  const addonContainer = $("addonOptions");
  addonContainer.replaceChildren();

  availableAddons().forEach(addon => {
    const active = selectedAddons.includes(addon.name);
    const button = document.createElement("button");

    button.className = "addon-btn" +
      (active ? " active" : "");

    button.textContent =
      `${active ? "✓ " : "+ "}${addon.name} · ${money(addon.price)}`;

    button.addEventListener("click",() => {
      if (active) {
        selectedAddons = selectedAddons.filter(
          name => name !== addon.name
        );
      } else {
        selectedAddons.push(addon.name);
      }
      renderCustomization();
    });

    addonContainer.appendChild(button);
  });

  $("modalQuantity").textContent = modalQuantity;
  $("addToCartBtn").textContent =
    `Add to Order · ${money(unitPrice() * modalQuantity)}`;
}

/* Cart */

function addToCart() {
  if (!selectedItem) return;

  const addons = [...selectedAddons].sort();
  const key =
    `${selectedItem.id}|${selectedSize}|${addons.join(",")}`;

  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.quantity += modalQuantity;
  } else {
    cart.push({
      key,
      id:selectedItem.id,
      name:selectedItem.name,
      image:selectedItem.image,
      size:selectedSize,
      addons,
      price:unitPrice(),
      quantity:modalQuantity
    });
  }

  closeModal("itemModal");
  renderCart();
  showToast("Added to your order");
}

function totals() {
  const subtotal = cart.reduce(
    (sum,item) => sum + item.price * item.quantity,0
  );
  const tax = Math.round(subtotal * GST_RATE * 100) / 100;

  return {
    subtotal,
    tax,
    total:subtotal + tax
  };
}

function changeCartQuantity(key,change) {
  const item = cart.find(entry => entry.key === key);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.key !== key);
  }

  renderCart();
}

function renderCart() {
  const container = $("cartItems");
  container.replaceChildren();

  const count = cart.reduce(
    (sum,item) => sum + item.quantity,0
  );

  $("cartCount").textContent = count;
  $("mobileCartBtn").textContent =
    $("cartPanel").classList.contains("mobile-open")
      ? `Close Order (${count})`
      : `View Order (${count})`;

  if (!cart.length) {
    const empty = document.createElement("div");
    empty.className = "empty-cart";

    const icon = document.createElement("div");
    icon.className = "empty-cart-icon";
    icon.textContent = "♧";

    const heading = document.createElement("h3");
    heading.textContent = "Your cart is empty";

    const message = document.createElement("p");
    message.textContent =
      "Explore our menu and add something delicious.";

    empty.append(icon,heading,message);
    container.appendChild(empty);
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const img = makeImage(item);

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const title = document.createElement("h4");
    title.textContent = item.name;

    const details = document.createElement("p");
    details.textContent =
      [item.size,...item.addons].join(" · ");

    const bottom = document.createElement("div");
    bottom.className = "cart-item-bottom";

    const price = document.createElement("span");
    price.className = "cart-item-price";
    price.textContent = money(item.price * item.quantity);

    const controls = document.createElement("div");
    controls.className = "mini-qty";

    const minus = document.createElement("button");
    minus.textContent = "−";
    minus.setAttribute("aria-label",`Remove one ${item.name}`);
    minus.addEventListener("click",() => {
      changeCartQuantity(item.key,-1);
    });

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.setAttribute("aria-label",`Add one ${item.name}`);
    plus.addEventListener("click",() => {
      changeCartQuantity(item.key,1);
    });

    controls.append(minus,quantity,plus);
    bottom.append(price,controls);
    info.append(title,details,bottom);
    row.append(img,info);
    container.appendChild(row);
  });

  const bill = totals();

  $("subtotal").textContent = money(bill.subtotal);
  $("tax").textContent = money(bill.tax);
  $("total").textContent = money(bill.total);
  $("checkoutBtn").disabled = cart.length === 0;
}

/* Checkout */

function openCheckout() {
  if (!cart.length) return;

  $("checkoutTotal").textContent = money(totals().total);

  $("cartPanel").classList.remove("mobile-open");
  $("mobileCartBtn").textContent =
    `View Order (${$("cartCount").textContent})`;

  openModal("checkoutModal");
}

function placeOrder() {
  if (!cart.length) return;

  const orderNumber =
    "QB-" + String(Math.floor(Math.random() * 900000) + 100000);

  $("orderNumber").textContent = orderNumber;
  $("successOrderType").textContent = orderType;
  $("successPayment").textContent = paymentMethod + " (Demo)";
  $("successTotal").textContent = money(totals().total);

  closeModal("checkoutModal");
  showScreen("successScreen");
}

/* Reset */

function resetOrder() {
  cart = [];
  activeCategory = "All";
  orderType = "Dine In";
  paymentMethod = "UPI";
  selectedItem = null;
  selectedSize = "Regular";
  selectedAddons = [];
  modalQuantity = 1;

  $("searchInput").value = "";
  $("customerName").value = "";

  document.querySelectorAll(".type-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.type === orderType
    );
  });

  document.querySelectorAll(".payment-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.payment === paymentMethod
    );
  });

  $("cartPanel").classList.remove("mobile-open");

  renderCategories();
  renderMenu();
  renderCart();
  showScreen("welcomeScreen");
}

/* Events */

$("startBtn").addEventListener("click",() => {
  showScreen("orderScreen");
});

$("restartBtn").addEventListener("click",() => {
  if (
    cart.length &&
    !confirm("Start a new order? Your cart will be cleared.")
  ) return;

  resetOrder();
});

$("orderAgainBtn").addEventListener("click",resetOrder);
$("searchInput").addEventListener("input",renderMenu);

document.querySelectorAll(".type-btn").forEach(button => {
  button.addEventListener("click",() => {
    orderType = button.dataset.type;

    document.querySelectorAll(".type-btn").forEach(btn => {
      btn.classList.toggle("active",btn === button);
    });
  });
});

$("modalMinus").addEventListener("click",() => {
  modalQuantity = Math.max(1,modalQuantity - 1);
  renderCustomization();
});

$("modalPlus").addEventListener("click",() => {
  modalQuantity = Math.min(20,modalQuantity + 1);
  renderCustomization();
});

$("addToCartBtn").addEventListener("click",addToCart);

$("clearCartBtn").addEventListener("click",() => {
  if (!cart.length) return;

  if (confirm("Remove all items from your order?")) {
    cart = [];
    renderCart();
  }
});

$("checkoutBtn").addEventListener("click",openCheckout);

document.querySelectorAll(".payment-btn").forEach(button => {
  button.addEventListener("click",() => {
    paymentMethod = button.dataset.payment;

    document.querySelectorAll(".payment-btn").forEach(btn => {
      btn.classList.toggle("active",btn === button);
    });
  });
});

$("placeOrderBtn").addEventListener("click",placeOrder);

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click",() => {
    closeModal(button.dataset.close);
  });
});

$("mobileCartBtn").addEventListener("click",() => {
  $("cartPanel").classList.toggle("mobile-open");

  const count = $("cartCount").textContent;
  $("mobileCartBtn").textContent =
    $("cartPanel").classList.contains("mobile-open")
      ? `Close Order (${count})`
      : `View Order (${count})`;
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click",event => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});

document.addEventListener("keydown",event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal:not(.hidden)")
      .forEach(modal => closeModal(modal.id));
  }
});

/* Start */

renderCategories();
renderMenu();
renderCart();
