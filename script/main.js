document.addEventListener("DOMContentLoaded", function () {
  // Add active class to the nav links
  let links = document.querySelectorAll(".nav-link");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(function (link) {
    let linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active1");
    }
  });

  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-link");
  const navMenu = document.getElementById("nav-menu");
  const menuOpen = document.getElementById("menu-icon-open");
  const menuClose = document.getElementById("menu-icon-close");

  // Add event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      this.classList.add("active");

      // Close the menu
      toggleMenu();
    });

    // Check if the link is the active link
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Add event listener for menu icon clicks
  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);

  // Toggle menu function
  function toggleMenu() {
    const displayStyle = navMenu.style.display === "block" ? "none" : "block";
    navMenu.style.display = displayStyle;
    menuOpen.style.display = displayStyle === "none" ? "inline-block" : "none";
    menuClose.style.display =
      displayStyle === "block" ? "inline-block" : "none";
  }

  // Terms and conditions
  const termsSection = document.getElementById("terms");
  const closeTerms = document.getElementById("close-terms");
  const backdrop = document.querySelector(".terms .backdrop");
  const termsLink = document.querySelector(".terms-link");

  termsLink.addEventListener("click", function (event) {
    event.preventDefault();
    showTerms();
  });

  closeTerms.addEventListener("click", hideTerms);
  backdrop.addEventListener("click", hideTerms);

  function showTerms() {
    termsSection.style.display = "block";
  }

  function hideTerms() {
    termsSection.style.display = "none";
  }
});
