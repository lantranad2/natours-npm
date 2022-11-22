const navIcons = document.querySelector(".nav__icons");
const nav = document.querySelector(".nav");
const toursItemBtns = document.querySelectorAll(".tours__item-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const navLinks = document.querySelectorAll(".nav__link");
const popupBooking = document.querySelector(".popup__btn");

navIcons.addEventListener("click", function () {
  nav.classList.toggle("nav--expanded");
});

toursItemBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    popup.classList.add("popup--open");
  });
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup--open");
});

popupBooking.addEventListener("click", function () {
  console.log("Hi there");
  popup.classList.remove("popup--open");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("nav--expanded");
  });
});
