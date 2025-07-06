// Sign Up Form Submit
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signup-email").value.trim();
  const phone = document.getElementById("signup-phone").value.trim();
  const password = document.getElementById("signup-password").value;
  const repassword = document.getElementById("signup-repassword").value;

  // Validate phone number
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Check passwords match
  if (password !== repassword) {
    alert("Passwords do not match!");
    return;
  }

  const userData = {
    email,
    phone,
    password,
  };

  // Save to localStorage
  localStorage.setItem("hungarUser", JSON.stringify(userData));

  // Clear all input fields
  document.getElementById("signup-form").reset();

  // Close modal using Bootstrap Modal instance
  const modal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
  modal.hide();

  // Show confirmation
  alert("✅ Signup successful!");
});
// ===============================switch logic of=======================================//

document.getElementById("go-to-login").addEventListener("click", function () {
  const signupModal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
  signupModal.hide(); // Signup Modal ko close karo

  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  loginModal.show(); // Login Modal khol do
});

// updateCartUI();