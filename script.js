"use scrict";

const links = document.querySelectorAll(".nav__link");
const section1 = document.querySelector("#section--1");
const arrowDown = document.querySelector(".hero__img");

links.forEach((e) => {
  e.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

arrowDown.addEventListener("click", function (e) {
  const s1cord = section1.getBoundingClientRect();
  console.log(s1cord);
  window.scrollTo({
    left: s1cord.left + pageXOffset,
    top: s1cord.top + pageYOffset,
    behavior: "smooth",
  });
  //   section2.scrollIntoView({ behavior: "smooth" });
});
