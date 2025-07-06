const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const popularSection = document.getElementById("popular-dishes");
const mobileSearchInput = document.getElementById("mobile-search-input");
const mobileSearchBtn = document.getElementById("mobile-search-btn");




async function dataFetchPopular() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await res.json();
    allPopularDishes = data.meals || [];
    visiblePopularCount = 6;
    renderPopularCards();
}
dataFetchPopular();

// ==========fatching data from dishes===//

function renderPopularCards() {
    popularContainer.innerHTML = "";
    const dishes = allPopularDishes.slice(0, visiblePopularCount);

    dishes.forEach(dish => {
        const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
        const time = Math.floor(Math.random() * 45) + 15;
        const price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // ₹100 - ₹1000

        const card = document.createElement("div");
        card.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

        card.innerHTML = `
      <div class="card h-100 shadow-sm p-2" style="min-height: 350px;">
        <img src="${dish.strMealThumb}" class="card-img-top" alt="${dish.strMeal}" style="height: 180px; object-fit: cover;">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${dish.strMeal}</h5>
          <div class="d-flex justify-content-between mb-2">
            <span class="text-warning fw-semibold">⭐ ${rating}</span>
            <span class="text-muted">⏱ ${time} min</span>
          </div>
          <div class="mb-2 deal-prize">₹${price}</div>

          <div class="text-center mt-auto">
            <button class="btn btn-sm btn-success px-4 order-btn"
              data-title="${dish.strMeal}"
              data-image="${dish.strMealThumb}"
              data-price="${price}"
            >Order Now</button>
          </div>
        </div>
      </div>`;

        popularContainer.appendChild(card);
    });

    showMorePopularBtn.style.display = visiblePopularCount >= allPopularDishes.length ? "none" : "inline-block";
}


// Search Logic
async function searchMeals(query) {
    // Check for keyword scroll
    if (scrollToMatchingSection(query)) return;

    // Otherwise perform API search
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();

        // if (!data.meals) {
        //     popularContainer.innerHTML = "";
        //     showMorePopularBtn.style.display = "none";
        //     alert(`No items found for '${query}'`);
        //     return;
        // }
        if (!data.meals) {
            popularContainer.innerHTML = `
        <div class="col-12 text-center text-danger fw-bold fs-5">
            No food items found for '${query}'
        </div>`;
            showMorePopularBtn.style.display = "none";

            // alert(`No items found for '${query}'`);
            // Scroll popular section into view jb upar jayega//

            popularSection.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        allPopularDishes = data.meals;
        visiblePopularCount = 6;
        renderPopularCards();
        popularSection.scrollIntoView({ behavior: "smooth" });

    } catch (err) {
        console.error("Search error:", err);
        alert("Something went wrong while searching.");
    }
}

// Handle Scroll Keywords
function scrollToMatchingSection(query) {
    const q = query.toLowerCase();

    if (q === "vege") {
        scrollToSection("veg-section");
        return true;
    } else if (q === "nonveg" || q === "non-veg") {
        scrollToSection("nonveg-section");
        return true;
    } else if (q === "pasta") {
        scrollToSection("pasta-section");
        return true;

    } else if (q === "popular") {
        scrollToSection("popular-dishes");
        return true;
    }
    else if (q === "ice" || q === "ice-cream") {
        scrollToSection("ice-cream-section");
        return true;
    }

    return false;
}

// Scroll Utility
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

//  Events (Desktop + Mobile)
function handleSearch(query) {
    if (!query || query.trim().length === 0) {
        alert("Please enter a food item to search.");
        return;
    }
    searchMeals(query.trim().toLowerCase());
}

searchBtn.addEventListener("click", () => handleSearch(searchInput.value));
searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") handleSearch(searchInput.value);
});

mobileSearchBtn.addEventListener("click", () => handleSearch(mobileSearchInput.value));
mobileSearchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") handleSearch(mobileSearchInput.value);
});

//  Show More Button
showMorePopularBtn.addEventListener("click", () => {
    visiblePopularCount += 6;
    renderPopularCards();
});

// Automatically reload dishes when search input is cleared
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        dataFetchPopular(); // Load all default popular dishes
    }
});

mobileSearchInput.addEventListener("input", () => {
    if (mobileSearchInput.value.trim() === "") {
        dataFetchPopular(); // Load all default popular dishes
    }
});
