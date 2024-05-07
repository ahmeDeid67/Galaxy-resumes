// Add active class to the nav links
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(function (link) {
    let linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active1");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var menuIconOpen = document.getElementById("menu-icon-open");
  var menuIconClose = document.getElementById("menu-icon-close");
  var menuContent = document.querySelector(".menu-content");
  var menuItems = document.querySelector(".menu-items");

  menuContent.addEventListener("click", function () {
    menu.classList.toggle("open");
    toggleMenu();
  });

  function toggleMenu() {
    if (menu.classList.contains("open")) {
      menuItems.style.display = "block";
    } else {
      menuItems.style.display = "none";
    }
    toggleIcon();
  }

  function toggleIcon() {
    menuIconOpen.style.display = menu.classList.contains("open")
      ? "none"
      : "block";
    menuIconClose.style.display = menu.classList.contains("open")
      ? "block"
      : "none";
  }
});
