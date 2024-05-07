function loadPage(page, link) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
      setActiveLink(link);
    })
    .catch((error) => {
      console.error("Error loading page:", error);
    });
}

// Function to set the active link
function setActiveLink(clickedLink) {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  clickedLink.classList.add("active");
}

// Load the default page when the page initially loads
window.onload = function () {
  const defaultLink = document.getElementById("homeLink");
  loadPage("home.html", defaultLink);
};

// Function to open the modal
function openModal(imageSrc, title) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  let captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = title;
}

// Function to close the modal
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}
