const burgerMenu = document.querySelector(".burger");
const ul = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const button = document.getElementById("nav-btn");
const navSlide = (elType) => {
  // toggleNav

  ul.classList.toggle("nav-active");

  const allLinks = [...navLinks, button];
  allLinks.forEach((el, index) => {
    if (elType === "burger") {
      if (!el.style.animation) {
        el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      } else {
        el.style.animation = "";
      }
    } else {
      el.style.animation = "";
    }
  });

  burgerMenu.classList.toggle("toggle");
};

burgerMenu.addEventListener("click", (e) => navSlide("burger"));

navLinks.forEach((el) => {
  el.addEventListener("click", navSlide);
});

// animations on scroll
