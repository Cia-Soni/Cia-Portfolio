// ==========================
// PORTFOLIO SCRIPT - CIA
// ==========================

// Smooth Scroll
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================
// Navbar Background on Scroll
// ==========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    navbar.classList.add('active-navbar');
  } else {
    navbar.classList.remove('active-navbar');
  }

});

// ==========================
// Scroll Animation
// ==========================
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
    }

  });

}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// ==========================
// Project Hover Animation
// ==========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-12px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });

});

// ==========================
// Skill Animation
// ==========================
const skillItems = document.querySelectorAll('.skills span');

skillItems.forEach(skill => {

  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.08)';
  });

  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
  });

});

// ==========================
// Scroll To Top Button
// ==========================
const topButton = document.createElement('button');

topButton.innerHTML = "↑";

topButton.classList.add('top-btn');

document.body.appendChild(topButton);

window.addEventListener('scroll', () => {

  if (window.scrollY > 400) {
    topButton.style.opacity = "1";
    topButton.style.visibility = "visible";
  } else {
    topButton.style.opacity = "0";
    topButton.style.visibility = "hidden";
  }

});

topButton.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});

// ==========================
// Typing Effect
// ==========================
const typingText = [
  "AI Developer",
  "Full Stack Developer",
  "Creative Designer",
  "Tech Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === typingText.length) {
    count = 0;
  }

  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  const heroHeading = document.querySelector(".hero h2");

  if (heroHeading) {
    heroHeading.textContent = letter;
  }

  if (letter.length === currentText.length) {

    setTimeout(() => {

      count++;
      index = 0;

      type();

    }, 1800);

  } else {

    setTimeout(type, 90);

  }

})();

// ==========================
// Fade Animation on Load
// ==========================
window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});

// ==========================
// Console Message
// ==========================
console.log(
  "%cWelcome to CIA Portfolio 🚀",
  "color:#8b5cf6; font-size:22px; font-weight:bold;"
);

console.log(
  "%cBuilt with HTML, CSS & JavaScript",
  "color:#38bdf8; font-size:14px;"
);