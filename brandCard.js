// ==========================================brand card====================================================//
const brands = [
    { name: "Domino's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png?output-format=webp", time: "40 min" },
    { name: "McDonald's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png?output-format=webp", time: "35 min" },
    { name: "Burgur King", image: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png?output-format=webp", time: "30 min" },
    { name: "KFC", image: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png?output-format=webp", time: "20 min" },
    { name: "Pista House", image: "https://b.zmtcdn.com/data/brand_creatives/logos/d48b21eea54ece0505a506cce1fd30331726048934.png?output-format=webp", time: "25 min" },
    { name: "Domino's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png?output-format=webp", time: "40 min" },
    { name: "McDonald's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png?output-format=webp", time: "35 min" },
    { name: "Burgur King", image: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png?output-format=webp", time: "30 min" },
    { name: "KFC", image: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png?output-format=webp", time: "20 min" },
    { name: "Pista House", image: "https://b.zmtcdn.com/data/brand_creatives/logos/d48b21eea54ece0505a506cce1fd30331726048934.png?output-format=webp", time: "25 min" },
    { name: "Domino's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png?output-format=webp", time: "40 min" },
    { name: "McDonald's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png?output-format=webp", time: "35 min" },
    { name: "Burgur King", image: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png?output-format=webp", time: "30 min" },
    { name: "KFC", image: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png?output-format=webp", time: "20 min" },
    { name: "Pista House", image: "https://b.zmtcdn.com/data/brand_creatives/logos/d48b21eea54ece0505a506cce1fd30331726048934.png?output-format=webp", time: "25 min" },

];

const brandSlider = document.getElementById("brand-slider");

// Inject brand cards
brands.forEach(brand => {
    const div = document.createElement("div");
    div.className = "brand-card";
    div.innerHTML = `
      <img src="${brand.image}" alt="${brand.name}">
      <div class="brand-name">${brand.name}</div>
      <p class="brand-name">${brand.time}</p>
    `;
    brandSlider.appendChild(div);
});

// Scroll buttons
document.getElementById("brand-scroll-left").addEventListener("click", () => {
    brandSlider.scrollBy({ left: -150, behavior: "smooth" });
});

document.getElementById("brand-scroll-right").addEventListener("click", () => {
    brandSlider.scrollBy({ left: 150, behavior: "smooth" });
});