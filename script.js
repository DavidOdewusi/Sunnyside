"use scrict";

const about = document.querySelectorAll(".about-link");
const service = document.querySelectorAll(".service-link");
const project = document.querySelectorAll(".project-link");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const arrowDown = document.querySelector(".hero__img");

about.forEach((e) => {
  e.addEventListener("click", function (e) {
    const s1cord = section1.getBoundingClientRect();
    console.log(s1cord);
    window.scrollTo({
      left: s1cord.left + pageXOffset,
      top: s1cord.top + pageYOffset,
      behavior: "smooth",
    });
    //   section2.scrollIntoView({ behavior: "smooth" });
  });
});

service.forEach((e) => {
  e.addEventListener("click", function (e) {
    const s2cord = section2.getBoundingClientRect();
    console.log(s2cord);
    window.scrollTo({
      left: s2cord.left + pageXOffset,
      top: s2cord.top + pageYOffset,
      behavior: "smooth",
    });
    //   section2.scrollIntoView({ behavior: "smooth" });
  });
});
project.forEach((e) => {
  e.addEventListener("click", function (e) {
    const s3cord = section3.getBoundingClientRect();
    console.log(s3cord);
    window.scrollTo({
      left: s3cord.left + pageXOffset,
      top: s3cord.top + pageYOffset,
      behavior: "smooth",
    });
    //   section2.scrollIntoView({ behavior: "smooth" });
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
