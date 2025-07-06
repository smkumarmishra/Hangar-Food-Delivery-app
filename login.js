// // // Switch to Sign-up modal from login modal
// // document.getElementById("go-to-signup").addEventListener("click", () => {
// //   const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
// //   loginModal.hide();

// //   const signupModal = new bootstrap.Modal(document.getElementById("signupModal"));
// //   signupModal.show();
// // });

// // // Login Form Logic
// // document.getElementById("loginForm").addEventListener("submit", function (e) {
// //   e.preventDefault();

// //   const username = document.getElementById("login-username").value.trim();
// //   const password = document.getElementById("login-password").value.trim();
// //   const storedData = JSON.parse(localStorage.getItem("hungarUsers")) || [];

// //   const matched = storedData.find((user) =>
// //     (user.email === username || user.phone === username) && user.password === password
// //   );

// //   const errorBox = document.getElementById("login-error");

// //   if (matched) {
// //     errorBox.classList.add("d-none");
// //     alert(" Login Successful!");
// //     bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
// //   } else {
// //     errorBox.classList.remove("d-none");
// //   }
// // });

// // // -------------------------------------//

// // document.getElementById("go-to-signup").addEventListener("click", function () {
// //   const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
// //   loginModal.hide();

// //   const signupModal = new bootstrap.Modal(document.getElementById("signupModal"));
// //   signupModal.show();
// // });

// // updateCartUI();



// // Login Form Submit
// document.getElementById("login-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const identifier = document.getElementById("login-identifier").value.trim();
//   const password = document.getElementById("login-password").value;
//   const errorDiv = document.getElementById("login-error");

//   const storedUser = JSON.parse(localStorage.getItem("hungarUser"));

//   if (
//     storedUser &&
//     (storedUser.email === identifier || storedUser.phone === identifier) &&
//     storedUser.password === password
//   ) {
//     // Success
//     errorDiv.classList.add("d-none");

//     const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
//     loginModal.hide();

//     alert("✅ Login successful!");
//     // Aap chahe to yahan UI update kar sakte hain (e.g., show user name etc.)

//   } else {
//     // Error
//     errorDiv.classList.remove("d-none");
//   }
// });



// Go to signup from login
document.getElementById("go-to-signup").addEventListener("click", () => {
  bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  new bootstrap.Modal(document.getElementById("signupModal")).show();
});

// LOGIN SUBMIT
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  const errorBox = document.getElementById("login-error");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const storedUsers = JSON.parse(localStorage.getItem("hungarUsers")) || [];

  // Match from localStorage
  const matchedUser = storedUsers.find(
    (user) =>
      (user.email === username || user.phone === username) &&
      user.password === password
  );

  if (matchedUser) {
    // ✅ Success: hide modal, clear form, alert
    errorBox.classList.add("d-none");

    // Optional: Save current user info in localStorage if needed later
    localStorage.setItem("hungarCurrentUser", JSON.stringify(matchedUser));

    // Show success alert
    alert("✅ Login Successful!");

    // Clear form
    usernameInput.value = "";
    passwordInput.value = "";

    // Hide modal
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();

    // Optionally: show UI, like welcome message or dashboard
  } else {
    // ❌ Show error
    errorBox.classList.remove("d-none");
  }
});
