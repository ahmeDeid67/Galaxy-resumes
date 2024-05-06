function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading page:", error);
    });
}

// Load the default page when the page initially loads
window.onload = function () {
  loadPage("home.html"); // Set 'index.html' as the default page
};
