"use scrict";

const links = document.querySelectorAll(".nav__link");
const section1 = document.querySelector("#section--1");
const arrowDown = document.querySelector(".hero__img");

const scroll = function (el) {
  document.querySelector(el).addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
};
scroll(".nav__list");
scroll(".menu");

arrowDown.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});
