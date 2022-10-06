/* ------------------------- TOGGLER STYLE SWITCHER START ------------------------- */

//open Style Switcher Toggler
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

//hide Style Switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ------------------------- TOGGLER STYLE SWITCHER END ------------------------- */

/* ----------------------------- THEME COLORS START ----------------------------- */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* ------------------------------ THEME COLORS END ------------------------------ */

/* ---------------------------- DAY-NIGHT MODE START ---------------------------- */
const dayNight = document.querySelector(".day-night");

//on click, changes from night to day, and other way round
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

//if when the window loads,
window.addEventListener("load", () => {
  //the body contains the "dark" class (style.css-->"body.dark" rule),
  if (document.body.classList.contains("dark")) {
    //the sun icon appears;
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    //else, the moon icon appears.
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
/* ---------------------------- DAY-NIGHT MODE END ---------------------------- */
