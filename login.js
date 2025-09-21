function loginUser() {
  // Get values from input fields
  const username = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

  // Basic check (not real authentication, just empty fields check)
  if (username === "" || password === "") {
    alert("Please enter both username and password!");
    return;
  }

  // ✅ Redirect to homepage
  window.location.href = "index.html";
}
