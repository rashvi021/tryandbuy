// JavaScript code in app.js (or within your HTML file using <script>)
function fetchCategories() {
    fetch('http://localhost:3000/api/v1/categories') // Replace with your actual API URL
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns a list of categories
            const categoriesList = document.getElementById('categoriesList');
            data.categories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category.name; // Assuming category has a 'name' property
                categoriesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

// Call fetchCategories on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});
document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    const authLink = document.getElementById("auth-link");

    if (authLink) {
        if (token) {
            authLink.textContent = "My Account";
            authLink.href = "account.html"; // Redirect to profile page
        } else {
            authLink.textContent = "Sign In";
            authLink.href = "login.html";
        }
    }
});