    
      let cart = [];

      //  GLOBAL variables for consistency
      let deliveryCharge = 0;
      let gstAmount = 0;
      let finalAmount = 0;
      let totalItemPrice = 0;
      let alertEl = document.getElementById("delete-alert");

      // Load from localStorage
      if (localStorage.getItem("hungarCart")) {
        cart = JSON.parse(localStorage.getItem("hungarCart"));
      }

      function saveCartToLocalStorage() {
        localStorage.setItem("hungarCart", JSON.stringify(cart));
      }

      function updateCartUI() {
        const cartCountSpans = document.querySelectorAll("#cart-count");
        const cartItemsContainer = document.getElementById("cart-items");
        const cartSummary = document.getElementById("cart-summary");

        cartItemsContainer.innerHTML = "";
        totalItemPrice = 0;
        let totalCount = 0;

        cart.forEach((item, index) => {
          totalItemPrice += item.price * item.qty;
          totalCount += item.qty;

          const div = document.createElement("div");
          div.className =
            "d-flex justify-content-between align-items-center mb-3";

          div.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <img src="${item.image}" alt="${item.name}" width="50" height="50" style="object-fit:cover;">
          <div>
            <div><strong>${item.name}</strong></div>
            <div>₹${item.price}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-danger minus" data-index="${index}">-</button>
          <span>${item.qty}</span>
          <button class="btn btn-sm btn-outline-success plus" data-index="${index}">+</button>
          <button class="btn btn-sm btn-outline-dark delete-item" data-index="${index}">
            <i class="fa fa-trash text-danger"></i>
          </button>
        </div>
      `;
          cartItemsContainer.appendChild(div);
        });

        // Update count
        cartCountSpans.forEach((span) => (span.textContent = totalCount));

        if (cart.length === 0) {
          cartSummary.innerHTML = "";
          saveCartToLocalStorage();
          return;
        }

        //  Fixed charges (only when items exist)
        deliveryCharge = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
        gstAmount = Math.floor(totalItemPrice * 0.18);
        finalAmount = totalItemPrice + deliveryCharge + gstAmount;

        cartSummary.innerHTML = `
      <h3 class="cart-sum-heading">Payment Details:</h3>
      <hr>
      <div class="d-flex justify-content-between"><strong>Total Items:</strong><span>${totalCount}</span></div>
      <div class="d-flex justify-content-between"><strong>Items Total:</strong><span>₹${totalItemPrice}</span></div>
      <div class="d-flex justify-content-between"><strong>Delivery Charge:</strong><span>₹${deliveryCharge}</span></div>
      <div class="d-flex justify-content-between"><strong>GST (18%):</strong><span>₹${gstAmount}</span></div>
      <div class="d-flex justify-content-between border-top mt-2 pt-2"><strong>Final Total:</strong><strong>₹${finalAmount}</strong></div>
      <div class="text-center mt-3">
        <button class="btn btn-success w-100">Proceed to Payment</button>
      </div>
      <div class="text-center mt-3">
        <button id="empty-cart-btn" class="btn btn-outline-danger w-100 mt-2">🗑️ Empty Cart</button>
      </div>
    `;

        // PLUS button
        document.querySelectorAll(".plus").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const i = e.target.dataset.index;
            cart[i].qty++;
            saveCartToLocalStorage();
            updateCartUI();
          });
        });

        // MINUS button
        document.querySelectorAll(".minus").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const i = e.target.dataset.index;
            if (cart[i].qty > 1) {
              cart[i].qty--;
            } else {
              cart.splice(i, 1);
            }
            saveCartToLocalStorage();
            updateCartUI();
          });
        });

        // DELETE button
        document.querySelectorAll(".delete-item").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const i = e.target.closest("button").dataset.index;
            cart.splice(i, 1);
            saveCartToLocalStorage();
            updateCartUI();
          });
        });

        saveCartToLocalStorage();
      }

      // Order Now Button
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("order-btn")) {
          const name = e.target.dataset.title;
          const image = e.target.dataset.image;
          const price = parseInt(e.target.dataset.price);

          const existing = cart.find((item) => item.name === name);
          if (existing) {
            existing.qty++;
          } else {
            cart.push({ name, image, price, qty: 1 });
          }

          alertEl.textContent = `🛒 ${name},| ₹${price} added to cart!`;

          Object.assign(alertEl.style, {
            color: "black",
            fontWeight: "900",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            padding: "1rem",
            fontSize: "16px",
            textShadow: ".2px .1px .1px white",
            background: " linear-gradient(to right, #ff7e5f, #feb47b);",
          });
          alertEl.style.display = "block";
          setTimeout(() => {
            alertEl.style.display = "none";
          }, 1500);

          updateCartUI();
        }
      });

      // Proceed to Payment-------------------------------------------//
      document.addEventListener("click", (e) => {
       if (
    e.target.matches("button.btn-success") &&
    e.target.textContent.trim() === "Proceed to Payment"
  ){
          document.getElementById(
            "paid-amount"
          ).textContent = `₹${finalAmount}`;

          const paymentModal = new bootstrap.Modal(
            document.getElementById("paymentSuccessModal")
          );
          paymentModal.show();

          cart = [];
          localStorage.removeItem("hungarCart");
          updateCartUI();

          setTimeout(() => {
            paymentModal.hide();
          }, 5000);
        }
      });

      // Empty Cart (via modal)
      document.addEventListener("click", (e) => {
        if (e.target.id === "empty-cart-btn") {
          const modal = new bootstrap.Modal(
            document.getElementById("confirmEmptyModal")
          );
          modal.show();
        }
      });

      // Confirm Delete
      document
        .getElementById("confirm-delete-btn")
        .addEventListener("click", () => {
          cart = [];
          localStorage.removeItem("hungarCart");
          updateCartUI();

          const modalEl = document.getElementById("confirmEmptyModal");
          const modalInstance = bootstrap.Modal.getInstance(modalEl);
          modalInstance.hide();

          // const alertEl = document.getElementById("delete-alert");
          alertEl.innerText = " 🗑️ Cart Emptied Successfully!.";
          alertEl.style.display = "block";
          setTimeout(() => {
            alertEl.style.display = "none";
          }, 2000);
        });

      // Initialize on page load
      updateCartUI();
  