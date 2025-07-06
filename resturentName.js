const restaurantNames = [
    "Barbeque Nation", "Biryani Blues", "Domino’s", "KFC",
    "Pizza Hut", "Subway", "Haldiram's", "Burger King",
    "Cafe Coffee Day", "Taco Bell", "Behrouz Biryani", "McDonald's",
    "Faasos", "FreshMenu", "Theobroma", "Giani’s Ice Cream",
    "Oven Story Pizza", "Momo Nation", "Punjab Grill", "Zaffran"
    , "Biryani Blues", "Domino’s", "KFC",
    "Pizza Hut", "Subway", "Haldiram's", "Burger King",
    "Cafe Coffee Day", "Taco Bell", "Behrouz Biryani", "McDonald's",
    "Faasos", "FreshMenu", "Theobroma", "Giani’s Ice Cream",
    "Oven Story Pizza", "Momo Nation", "Punjab Grill", "Zaffran"
    , "Biryani Blues", "Domino’s", "KFC",
    "Pizza Hut", "Subway", "Haldiram's", "Burger King",
    "Cafe Coffee Day", "Taco Bell", "Behrouz Biryani", "McDonald's",
    "Faasos", "FreshMenu", "Theobroma", "Giani’s Ice Cream",
    "Oven Story Pizza", "Momo Nation", "Punjab Grill", "Zaffran"
    , "Biryani Blues", "Domino’s", "KFC",
    "Pizza Hut", "Subway", "Haldiram's", "Burger King",
    "Cafe Coffee Day", "Taco Bell", "Behrouz Biryani", "McDonald's",
    "Faasos", "FreshMenu", "Theobroma", "Giani’s Ice Cream",
    "Oven Story Pizza", "Momo Nation", "Punjab Grill", "Zaffran", "Biryani Blues", "Domino’s",
];

const grid = document.getElementById("restaurantGrid");
let showingCount;

// Detect device width and set initial count
function getInitialCount() {
    const width = window.innerWidth;
    if (width >= 992) return 12;       // Desktop (4x3)
    else if (width >= 768) return 9;   // Tablet (3x3)
    else if (width >= 576) return 6;   // Mobile (2x3)
    else return 3;                     // Mini (1x3)
}

function renderRestaurants(count) {
    grid.innerHTML = ""; // clear previous

    // Show restaurants up to count - 1, and keep last spot for Show More
    restaurantNames.slice(0, count - 1).forEach(name => {
        const col = document.createElement("div");
        col.className = "col-custom";
        col.innerHTML = `<a href="#" class="restaurant-btn">${name}</a>`;
        grid.appendChild(col);
    });

    // Add Show More button
    const btnCol = document.createElement("div");
    btnCol.className = "col-custom";
    btnCol.innerHTML = `<button id="showMoreBtn" class="restaurant-btn">Show More</button>`;
    grid.appendChild(btnCol);

    // Button click handler
    document.getElementById("showMoreBtn").addEventListener("click", () => {
        renderAllRestaurants(); // show all
    });
}

function renderAllRestaurants() {
    grid.innerHTML = "";
    restaurantNames.forEach(name => {
        const col = document.createElement("div");
        col.className = "col-custom";
        col.innerHTML = `<a href="#" class="restaurant-btn">${name}</a>`;
        grid.appendChild(col);
    });
}

// Initial load
showingCount = getInitialCount();
renderRestaurants(showingCount);

// Optional: Re-render on resize
window.addEventListener("resize", () => {
    const newCount = getInitialCount();
    if (newCount !== showingCount) {
        showingCount = newCount;
        renderRestaurants(showingCount);
    }
});

