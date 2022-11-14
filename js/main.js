// Burger Functionality

const navToggle = document.querySelector(".hamburger-none");
const primaryNav = document.querySelector(".nav-item");
const aboutToggle = document.querySelector(".about-toggle");
const skillsToggle = document.querySelector(".skills-toggle");
const portfolioToggle = document.querySelector(".portfolio-toggle");
const contactToggle = document.querySelector(".contact-toggle");
const logoOpenToggle = document.querySelector(".logo-opened-toggle");
const logoClosedToggle = document.querySelector(".logo-closed-toggle");


navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  logoOpenToggle.style.display = "block";
  logoClosedToggle.style.display = "none";
});

aboutToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

skillsToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

portfolioToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

contactToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

logoOpenToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});


// Burger Button Animation

var btn = document.getElementById("btn");

btn.addEventListener('click', function () {
  if (this.classList.contains("active")) {
    logoOpenToggle.style.display = "none";
    logoClosedToggle.style.display = "block";
    this.classList.remove("active")
    this.classList.add('not-active')
  }
  else {
    logoOpenToggle.style.display = "block";
    logoClosedToggle.style.display = "none";
    this.classList.add("active")
    this.classList.remove('not-active')
  }
});

// Scroll Effect

const animationSpeed = 900;

$('#aboutme-btn').on('click', function () {
  const aboutme = $('#aboutme').position().top;

  $('html, body').animate({
    scrollTop: aboutme
  }, animationSpeed);
});

$('#aboutme-btn-desktop').on('click', function () {
  const aboutme = $('#aboutme').position().top;

  $('html, body').animate({
    scrollTop: aboutme
  }, animationSpeed);
});

$('#skills-btn').on('click', function () {
  const skills = $('#skills').position().top;

  $('html, body').animate({
    scrollTop: skills
  }, animationSpeed);
});

$('#skills-btn-desktop').on('click', function () {
  const skills = $('#skills').position().top;

  $('html, body').animate({
    scrollTop: skills
  }, animationSpeed);
});

$('#portfolio-btn').on('click', function () {
  const portfolio = $('#portfolio').position().top;

  $('html, body').animate({
    scrollTop: portfolio
  }, animationSpeed);
});

$('#portfolio-btn-desktop').on('click', function () {
  const portfolio = $('#portfolio').position().top;

  $('html, body').animate({
    scrollTop: portfolio
  }, animationSpeed);
});

$('#contact-me-btn').on('click', function () {
  const contactme = $('#contactme').position().top;

  $('html, body').animate({
    scrollTop: contactme
  }, animationSpeed);
});

$('#contact-me-btn-desktop').on('click', function () {
  const contactme = $('#contactme').position().top;

  $('html, body').animate({
    scrollTop: contactme
  }, animationSpeed);
});


$('#logo-open-btn').on('click', function () {
  const top = $('#top').position().top;

  $('html, body').animate({
    scrollTop: top
  }, animationSpeed);
});

$('#top-arrow').on('click', function () {
  const top = $('#top').position().top;

  $('html, body').animate({
    scrollTop: top
  }, animationSpeed);
});

$('#logo-closed-btn').on('click', function () {
  const top = $('#top').position().top;

  $('html, body').animate({
    scrollTop: top
  }, animationSpeed);
});


// Top Arrow Viever

let topArrow = document.getElementById("top-arrow");

window.onscroll = function () { scrollFunction() };

const viewPoint = 700;

function scrollFunction() {
  if (document.body.scrollTop > viewPoint || document.documentElement.scrollTop > viewPoint) {
    topArrow.style.visibility = "visible";
    topArrow.style.animation = "fade ease 0.7s";
    topArrow.style.pointerEvents = "auto";
  } else {
    topArrow.style.animation = "fade-out ease 0.7s";
    topArrow.style.animationFillMode = "forwards";
    topArrow.style.pointerEvents = "none";
  }
}