// footer.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
      // Add event listeners or any other dynamic functionality here
      addFooterFunctionality();
    });
});

function addFooterFunctionality() {
  const termsSection = document.getElementById("terms_content");
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
}
