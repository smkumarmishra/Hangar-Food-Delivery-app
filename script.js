// ===============================variable naem================================================//

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeBtn = document.getElementById("closeBtn");
const bgContainer = document.getElementById("bgContainer");
const slider = document.getElementById("dish-slider");

const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

const dealSlider = document.getElementById("deal-slider");
const scrollLeftBtn1 = document.getElementById("scroll-left-btn");
const scrollRightBtn2 = document.getElementById("scroll-right-btn");

// -------------------------------------[ Nav Toggle Logic ]-------------------------------------
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.remove("active");
});

bgContainer.addEventListener("click", (e) => {
    if (e.target !== navMenu) {
        navMenu.classList.remove("active");
    }
});


// ===============================this is for dises first section js================================================//



//Fetch from Dessert (or Vegetarian) for demo
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then(res => res.json())
    .then(data => {
        const meals = data.meals;
        meals.forEach(meal => {
            const card = document.createElement("div");
            card.className = "dish-card";
            card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h6>${meal.strMeal}</h6>
        `;
            slider.appendChild(card);
         
        });
       
    });
   

// Scroll button controls
scrollLeftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -150, behavior: "smooth" });
});
scrollRightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 150, behavior: "smooth" });
});



// --------------------------this is scrolling automatic left to right js----------------------------------------------------//










// --------------------------------------------end of this js--------------------------------------------------------------//




// ==============================================create dynamic card ---"Best Food Outlets Near Me"===============================================================//
const dealData = [
    {
        name: "Chinese noodles",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/sauteed-mushrooms-with-pumpkin-sweet-pepper_2829-10315.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Cheese Pizza",
        time: "20 mins",
        img: "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Biryani",
        time: "40 mins",
        img: "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Burger",
        time: "15 mins",
        img: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Ice Cream",
        time: "10 mins",
        img: "https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    }
    ,
    {
        name: "Chocklet",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/choco-drops-with-chocoballs-choco-bars-caramel-clay-bowl_176474-6126.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Chinese noodles",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/sauteed-mushrooms-with-pumpkin-sweet-pepper_2829-10315.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Cheese Pizza",
        time: "20 mins",
        img: "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Biryani",
        time: "40 mins",
        img: "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Burger",
        time: "15 mins",
        img: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Ice Cream",
        time: "10 mins",
        img: "https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    }
    ,
    {
        name: "Chocklet",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/choco-drops-with-chocoballs-choco-bars-caramel-clay-bowl_176474-6126.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Chinese noodles",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/sauteed-mushrooms-with-pumpkin-sweet-pepper_2829-10315.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Cheese Pizza",
        time: "20 mins",
        img: "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Biryani",
        time: "40 mins",
        img: "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Burger",
        time: "15 mins",
        img: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },
    {
        name: "Ice Cream",
        time: "10 mins",
        img: "https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    }
    ,
    {
        name: "Chocklet",
        time: "30 mins",
        img: "https://img.freepik.com/free-photo/choco-drops-with-chocoballs-choco-bars-caramel-clay-bowl_176474-6126.jpg?ga=GA1.1.1896916944.1733770797&semt=ais_hybrid&w=740",

    },



];
function getRandomRating() {
    return (Math.random() * (5 - 3) + 3).toFixed(1); // 3.0 to 5.0
}
function getRandomOffer() {
    const offers = ["10% OFF", "15% OFF", "20% OFF", "25% OFF", "30% OFF", "40% OFF", "50% OFF"];
    const index = Math.floor(Math.random() * offers.length);
    return offers[index];
}

dealData.forEach(item => {
    const card = document.createElement("div");
    const rating = getRandomRating(); // random for each card
    const offer = getRandomOffer();

    card.className = "deal-card";

    card.innerHTML = `
      <div style="position: relative;">
        <img src="${item.img}" alt="${item.name}">
        <div class="deal-offer">${offer} </div>
      </div>
      <div class="deal-card-body">
        <h6 class="mb-1">${item.name}</h6>
        <div class="d-flex justify-content-between align-items-center py-2 px-3">
        <div class="deal-rating"><i class="fa-solid fa-star" style="color: #1ee510;"></i> ${rating}</div>
        <div class="deal-time"><b>${item.time}</b> <i class="fa-solid fa-clock fa-spin fa-2x" style="color: #FFD43B;"></i></div>
        </div>
      </div>
    `;
    dealSlider.appendChild(card);
});
// Arrow scrolling
scrollLeftBtn1.addEventListener("click", () => {
    console.log("helo");

    dealSlider.scrollBy({ left: -150, behavior: "smooth" });
});
scrollRightBtn2.addEventListener("click", () => {
    dealSlider.scrollBy({ left: 150, behavior: "smooth" });
});






// Selectors-------------------------------===//

const popularContainer = document.getElementById("popular-dishes-container");
const showMorePopularBtn = document.getElementById("show-more-popular-btn");

let allPopularDishes = [];
let popularWithExtras = [];
let visiblePopularCount = 6;

// Get random price
function getPopRandomPrice() {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
}

function getRandomRating() {
    return (Math.random() * 1.5 + 3.5).toFixed(1);
}

function getRandomTime() {
    const times = ["15 min", "20 min", "25 min", "30 min", "35 min", "40 min"];
    return times[Math.floor(Math.random() * times.length)];
}

async function dataFetchPopular() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await res.json();
        allPopularDishes = data.meals || [];

        // Add random rating, time, price to each dish
        popularWithExtras = allPopularDishes.map(dish => ({
            ...dish,
            rating: getRandomRating(),
            time: getRandomTime(),
            price: getPopRandomPrice()
        }));

        renderPopularCards();
    } catch (error) {
        console.error("Error fetching popular dishes:", error);
        popularContainer.innerHTML = `<p>Failed to load dishes. Try again later.</p>`;
    }
}

function renderPopularCards() {
    popularContainer.innerHTML = "";

    const displayDishes = popularWithExtras.slice(0, visiblePopularCount);

    displayDishes.forEach(dish => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

        col.innerHTML = `
      <div class="card h-100 shadow-sm p-2" style="min-height: 350px;">
        <img src="${dish.strMealThumb}" class="card-img-top rounded" style="height: 180px; object-fit: cover;" alt="${dish.strMeal}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${dish.strMeal}</h5>

          <div class="d-flex justify-content-between mb-2">
            <span class="text-warning fw-semibold">⭐ ${dish.rating}</span>
            <span class="text-muted">⏱ ${dish.time}</span>
          </div>

          <div class="mb-2 deal-prize">₹${dish.price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${dish.strMeal}"
              data-image="${dish.strMealThumb}"
              data-price="${dish.price}"
            >Order Now</button>
          </div>
        </div>
      </div>
    `;

        popularContainer.appendChild(col);
    });

    showMorePopularBtn.style.display = visiblePopularCount >= popularWithExtras.length ? "none" : "block";
}

showMorePopularBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form-like reload
    visiblePopularCount += 6;
    renderPopularCards();
});

// Initial Load
dataFetchPopular();

// =======================================================================Veg======================================================//

const VEG_API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
const vegContainer = document.getElementById("veg-container");
const showMoreBtn = document.getElementById("show-more-btn");

let allVegDishes = []; // Store all dishes here
let vegDataWithExtras = [];  // to store random rating/time/price
let showingAll = false;

// Fetch all veg dishes once


//==============start veg fatch=====//

fetch(VEG_API)
    .then(res => res.json())
    .then(data => {
        allVegDishes = data.meals;

        //  Store random values only once
        vegDataWithExtras = allVegDishes.map(meal => ({
            ...meal,
            rating: getRandomRating(),
            time: getRandomTime(),
            price: getVegRandomPrice()
        }));

        showVegDishes(3);  // Initial render
    })
    .catch(err => {
        vegContainer.innerHTML = `<p class="text-danger">Failed to load Veg dishes.</p>`;
        console.error("Veg fetch error:", err);
    });
function showVegDishes(count) {
    vegContainer.innerHTML = "";

    const dishesToShow = vegDataWithExtras.slice(0, count);

    dishesToShow.forEach(meal => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
      <div class="card h-100 shadow d-flex flex-column justify-content-between">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body text-center d-flex flex-column justify-content-between">
          <h5 class="card-title mb-3">${meal.strMeal}</h5>

          <div class="d-flex justify-content-between align-items-center mb-2 px-2">
            <div class="deal-rating"><i class="fa-solid fa-star" style="color: #1ee510;"></i> ${meal.rating}</div>
            <div class="deal-time"><b>${meal.time}</b> <i class="fa-solid fa-clock fa-spin fa-1x" style="color: #FFD43B;"></i></div>
          </div>

          <div class="mb-2  deal-prize">₹${meal.price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${meal.strMeal}" 
              data-image="${meal.strMealThumb}"
              data-price="${meal.price}"
            >Order Now</button>
          </div>
        </div>
      </div>
    `;

        vegContainer.appendChild(col);
    });
}

function getVegRandomPrice() {
    return Math.floor(Math.random() * (550 - 130 + 1)) + 130;  // 80 to 400
}



showMoreBtn.addEventListener("click", (e) => {
    e.preventDefault(); //  prevent reload

    if (showingAll) {
        showVegDishes(3);
        showMoreBtn.textContent = "Show More";
        showingAll = false;
    } else {
        showVegDishes(vegDataWithExtras.length);
        showMoreBtn.textContent = "Show Less";
        showingAll = true;
    }
});



// ==========================================================non veg=================================================//

const NON_VEG_API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";
const nonvegContainer = document.getElementById("nonveg-container");
const showMoreNonVegBtn = document.getElementById("show-more-nonveg");

let allNonVegDishes = [];
let nonVegDataWithExtras = []; // store random values one time
let showingAllNonVeg = false;

// -------------------//

fetch(NON_VEG_API)
    .then(res => res.json())
    .then(data => {
        allNonVegDishes = data.meals;

        //  Add random values and store them
        nonVegDataWithExtras = allNonVegDishes.map(meal => ({
            ...meal,
            rating: getRandomRating(),
            time: getRandomTime(),
            price: getNonvegRandomPrice()
        }));

        showNonVegDishes(3); // initial render
    })
    .catch(err => {
        nonvegContainer.innerHTML = `<p class="text-danger">Failed to load Non-Veg dishes.</p>`;
        console.error("Non-Veg fetch error:", err);
    });

// ------------------//

function showNonVegDishes(count) {
    nonvegContainer.innerHTML = "";
    const dishesToShow = nonVegDataWithExtras.slice(0, count);

    dishesToShow.forEach(meal => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
      <div class="card h-100 shadow d-flex flex-column justify-content-between">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body text-center d-flex flex-column justify-content-between">
          <h5 class="card-title mb-2">${meal.strMeal}</h5>

          <div class="d-flex justify-content-between align-items-center mb-2 px-2">
            <div class="deal-rating"><i class="fa-solid fa-star" style="color:red;"></i> ${meal.rating}</div>
            <div class="deal-time"><b>${meal.time}</b> <i class="fa-solid fa-clock fa-spin" style="color:rgb(252, 102, 102);"></i></div>
          </div>

          <div class="mb-2 deal-prize">₹${meal.price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${meal.strMeal}" 
              data-image="${meal.strMealThumb}"
              data-price="${meal.price}"
            >Order Now</button>
          </div>
        </div>
      </div>
    `;

        nonvegContainer.appendChild(col);
    });


}
showMoreNonVegBtn.addEventListener("click", (e) => {
    e.preventDefault(); //  Stop page reload

    if (showingAllNonVeg) {
        showNonVegDishes(3);
        showMoreNonVegBtn.textContent = "Show More";
        showingAllNonVeg = false;
    } else {
        showNonVegDishes(nonVegDataWithExtras.length);
        showMoreNonVegBtn.textContent = "Show Less";
        showingAllNonVeg = true;
    }
});

function getNonvegRandomPrice() {
    return Math.floor(Math.random() * (800 - 150 + 1)) + 150;
}





// ----------end of nonveg-------//




// ==========================================================================ice-cream=====================================================//

// const ICECREAM_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=ice";
const ICECREAM_API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
const iceCreamContainer = document.getElementById("icecream-container");
const showMoreIceBtn = document.getElementById("show-more-icecream");

let allIceCreams = [];
let iceCreamWithExtras = [];
let showingAllIceCream = false;

// Fetch data from API====================//

fetch(ICECREAM_API)
    .then(res => res.json())
    .then(data => {
        allIceCreams = data.meals || [];

        // add random details once
        iceCreamWithExtras = allIceCreams.map(meal => ({
            ...meal,
            rating: getRandomRating(),
            time: getRandomTime(),
            price: getIceRandomPrice()
        }));

        showIceCreamDishes(3); // show 3 by default
    })
    .catch(err => {
        iceCreamContainer.innerHTML = `<p class="text-danger">Failed to load Ice-Cream dishes.</p>`;
        console.error("Ice fetch error:", err);
    });


function showIceCreamDishes(count) {
    iceCreamContainer.innerHTML = "";

    const items = iceCreamWithExtras.slice(0, count);

    items.forEach(meal => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
      <div class="card h-100 shadow d-flex flex-column justify-content-between">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body text-center d-flex flex-column justify-content-between">
          <h5 class="card-title mb-3">${meal.strMeal}</h5>
          <div class="d-flex justify-content-between align-items-center mb-2 px-2">
            <div class="deal-rating"><i class="fa-solid fa-star" style="color: #ffc107;"></i> ${meal.rating}</div>
            <div class="deal-time"><b>${meal.time}</b> <i class="fa-solid fa-clock fa-spin" style="color: #5bc0de;"></i></div>
          </div>
          <div class="mb-2 deal-prize">₹${meal.price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${meal.strMeal}"
              data-image="${meal.strMealThumb}"
              data-price="${meal.price}"
            >Order Now</button>
          </div>
        </div>
      </div>
    `;

        iceCreamContainer.appendChild(col);
    });
}


function getIceRandomPrice() {
    return Math.floor(Math.random() * (400 - 50 + 1)) + 50;
}

showMoreIceBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload

    if (showingAllIceCream) {
        showIceCreamDishes(3);
        showMoreIceBtn.textContent = "Show More";
        showingAllIceCream = false;
    } else {
        showIceCreamDishes(iceCreamWithExtras.length);
        showMoreIceBtn.textContent = "Show Less";
        showingAllIceCream = true;
    }
});







// =======================================================================pasta======================================================.//

const PASTA_API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
const pastaContainer = document.getElementById("pasta-container");
const showMorePastaBtn = document.getElementById("show-more-pasta");

let allPastas = [];
let pastaDataWithExtras = []; // yeh random values store karega

let showingAllPasta = false;




// ==========trr========//
fetch(PASTA_API)
    .then(res => res.json())
    .then(data => {
        allPastas = data.meals;

        // Add random data (only once!)
        pastaDataWithExtras = allPastas.map(meal => ({
            ...meal,
            rating: getRandomRating(),
            time: getRandomTime(),
            price: getPastaRandomPrice()
        }));

        showPastaDishes(3); // first 3 show
    });
function showPastaDishes(count) {
    pastaContainer.innerHTML = "";
    const items = pastaDataWithExtras.slice(0, count);

    items.forEach(meal => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
      <div class="card h-100 shadow d-flex flex-column justify-content-between">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body text-center d-flex flex-column justify-content-between">
          <h5 class="card-title mb-2">${meal.strMeal}</h5>

          <div class="d-flex justify-content-between align-items-center mb-2 px-2">
            <div class="deal-rating"><i class="fa-solid fa-star" style="color: #ffc107;"></i> ${meal.rating}</div>
            <div class="deal-time"><b>${meal.time}</b> <i class="fa-solid fa-clock fa-spin" style="color: #FFD43B;"></i></div>
          </div>
          <div class="deal-prize mb-2">₹${meal.price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${meal.strMeal}" 
              data-image="${meal.strMealThumb}"
              data-price="${meal.price}"
            >Order Now</button>
          </div>
        </div>
      </div>
    `;
        pastaContainer.appendChild(col);
    });

}

function getPastaRandomPrice() {
    return Math.floor(Math.random() * (450 - 80 + 1)) + 80;  // 80 to 400
}


showMorePastaBtn.addEventListener("click", (e) => {
    e.preventDefault();  // just to be sure // not need

    if (showingAllPasta) {
        // showPastaDishes(3);
        showMorePastaBtn.textContent = "Show More";
        showingAllPasta = false;
    } else {
        showPastaDishes(allPastas.length);
        showMorePastaBtn.textContent = "Show Less";
        showingAllPasta = true;
    }
});






// =======================Globle random rating and time function======================
function getRandomRating() {
    return (Math.random() * (5 - 3) + 3).toFixed(1);
}
function getRandomTime() {
    const times = ["15 mins", "20 mins", "25 mins", "30 mins", "35 mins"];
    return times[Math.floor(Math.random() * times.length)];
}




