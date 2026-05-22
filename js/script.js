// =========================================================
// CIA ANN SONI PORTFOLIO SCRIPT
// =========================================================


// ==========================
// SMOOTH SCROLL
// ==========================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute('href')
    );

    if(target){

      window.scrollTo({

        top: target.offsetTop - 70,

        behavior: 'smooth'

      });

    }

  });

});


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(5,8,22,0.95)";

    navbar.style.boxShadow =
    "0 5px 25px rgba(0,0,0,0.35)";

  }

  else{

    navbar.style.background =
    "rgba(5,8,22,0.7)";

    navbar.style.boxShadow =
    "none";

  }

});


// ==========================
// SECTION FADE-IN ANIMATION
// ==========================

const sections =
document.querySelectorAll('.section');

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0px)";

    }

  });

},{
  threshold:0.15
});

sections.forEach(section => {

  section.style.opacity = "0";

  section.style.transform =
  "translateY(50px)";

  section.style.transition =
  "all 1s ease";

  observer.observe(section);

});


// ==========================
// PROJECT CARD HOVER EFFECT
// ==========================

const projectCards =
document.querySelectorAll('.project-card');

projectCards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.transform =
    "translateY(-12px) scale(1.02)";

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
    "translateY(0px) scale(1)";

  });

});


// ==========================
// SKILL HOVER EFFECT
// ==========================

const skillItems =
document.querySelectorAll('.skills span');

skillItems.forEach(skill => {

  skill.addEventListener('mouseenter', () => {

    skill.style.transform =
    "scale(1.08)";

  });

  skill.addEventListener('mouseleave', () => {

    skill.style.transform =
    "scale(1)";

  });

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topButton =
document.createElement('button');

topButton.innerHTML = "↑";

topButton.classList.add('top-btn');

document.body.appendChild(topButton);


// BUTTON STYLES

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#8b5cf6";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.opacity = "0";
topButton.style.visibility = "hidden";
topButton.style.transition = "0.4s";
topButton.style.zIndex = "999";


window.addEventListener('scroll', () => {

  if(window.scrollY > 400){

    topButton.style.opacity = "1";

    topButton.style.visibility =
    "visible";

  }

  else{

    topButton.style.opacity = "0";

    topButton.style.visibility =
    "hidden";

  }

});


topButton.addEventListener('click', () => {

  window.scrollTo({

    top:0,

    behavior:'smooth'

  });

});


// ==========================
// TYPING EFFECT
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


(function type(){

  if(count === typingText.length){

    count = 0;

  }

  currentText = typingText[count];

  letter =
  currentText.slice(0, ++index);

  const heroHeading =
  document.querySelector(".hero h2");

  if(heroHeading){

    heroHeading.textContent = letter;

  }

  if(letter.length === currentText.length){

    setTimeout(() => {

      count++;

      index = 0;

      type();

    },1800);

  }

  else{

    setTimeout(type,90);

  }

})();


// ==========================
// CERTIFICATE MODAL
// ==========================

function openCertificate(){

  const modal =
  document.getElementById(
    "certificateModal"
  );

  modal.style.display = "flex";

}


function closeCertificate(){

  const modal =
  document.getElementById(
    "certificateModal"
  );

  modal.style.display = "none";

}


// CLOSE WHEN CLICKING OUTSIDE

window.onclick = function(event){

  const modal =
  document.getElementById(
    "certificateModal"
  );

  if(event.target === modal){

    modal.style.display = "none";

  }

};
// ==========================
// PROFILE MODAL
// ==========================

function openProfile(){

  document.getElementById(
    "profileModal"
  ).style.display = "flex";

}

function closeProfile(){

  document.getElementById(
    "profileModal"
  ).style.display = "none";

}


// ==========================
// RESUME MODAL
// ==========================

function openResume(){

  document.getElementById(
    "resumeModal"
  ).style.display = "flex";

}

function closeResume(){

  document.getElementById(
    "resumeModal"
  ).style.display = "none";

}


// ==========================
// CLOSE OUTSIDE CLICK
// ==========================

window.addEventListener('click', function(event){

  const profileModal =
  document.getElementById(
    "profileModal"
  );

  const resumeModal =
  document.getElementById(
    "resumeModal"
  );

  const certificateModal =
  document.getElementById(
    "certificateModal"
  );

  if(event.target === profileModal){

    profileModal.style.display = "none";

  }

  if(event.target === resumeModal){

    resumeModal.style.display = "none";

  }

  if(event.target === certificateModal){

    certificateModal.style.display = "none";

  }

});

// ==========================
// FADE BODY ON LOAD
// ==========================

window.addEventListener('load', () => {

  document.body.style.opacity = "1";

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(

  "%cWelcome to CIA Portfolio 🚀",

  "color:#8b5cf6; font-size:22px; font-weight:bold;"

);

console.log(

  "%cBuilt with HTML, CSS & JavaScript",

  "color:#38bdf8; font-size:14px;"

);
