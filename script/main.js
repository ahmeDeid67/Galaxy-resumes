// // Add active class to the nav links
// document.addEventListener("DOMContentLoaded", function () {
//   let links = document.querySelectorAll(".nav-link");
//   let currentPage = window.location.pathname.split("/").pop();

//   links.forEach(function (link) {
//     let linkPage = link.getAttribute("href").split("/").pop();

//     if (linkPage === currentPage) {
//       link.classList.add("active1");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuOpen = document.getElementById("menu-icon-open");
//   const menuClose = document.getElementById("menu-icon-close");
//   const navMenu = document.getElementById("nav-menu");

//   // Open the menu
//   menuOpen.addEventListener("click", function () {
//     navMenu.style.display = "block";
//     menuOpen.style.display = "none";
//     menuClose.style.display = "inline-block";
//   });

//   // Close the menu
//   menuClose.addEventListener("click", function () {
//     navMenu.style.display = "none";
//     menuClose.style.display = "none";
//     menuOpen.style.display = "inline-block";
//   });
// });

// // Terms and conditions
// document.addEventListener("DOMContentLoaded", function () {
//   const termsSection = document.getElementById("terms");
//   const closeTerms = document.getElementById("close-terms");
//   const backdrop = document.querySelector(".terms .backdrop");
//   const termsLink = document.querySelector(".terms-link");

//   // Function to show terms
//   function showTerms() {
//     termsSection.style.display = "block";
//   }

//   // Function to hide terms
//   function hideTerms() {
//     termsSection.style.display = "none";
//   }

//   // Event listener for clicking on terms link
//   termsLink.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     showTerms();
//   });

//   // Event listener for clicking on close icon
//   closeTerms.addEventListener("click", function () {
//     hideTerms();
//   });

//   // Event listener for clicking on backdrop
//   backdrop.addEventListener("click", function () {
//     hideTerms();
//   });

//   hideTerms();
// });
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

  // Toggle menu
  const menuOpen = document.getElementById("menu-icon-open");
  const menuClose = document.getElementById("menu-icon-close");
  const navMenu = document.getElementById("nav-menu");

  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navMenu.style.display =
      navMenu.style.display === "block" ? "none" : "block";
    menuOpen.style.display =
      menuOpen.style.display === "inline-block" ? "none" : "inline-block";
    menuClose.style.display =
      menuClose.style.display === "none" ? "inline-block" : "none";
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
