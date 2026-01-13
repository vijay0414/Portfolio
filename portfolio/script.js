// ================= SLIDER FUNCTIONALITY =================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const submit=document.getElementById("submit");
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.querySelector('.next')?.addEventListener('click', nextSlide);
document.querySelector('.prev')?.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

// ================= HOME & SKILLS ANIMATIONS =================
const homeBtn = document.getElementById("homeBtn");
const skillsBtn = document.getElementById("skillsBtn");
const skillsContainer = document.getElementById("skills-container");
const skillsSection = document.getElementById("skills-section");
const bio = document.getElementById("bioText");

// Home button shake
homeBtn?.addEventListener("click", () => {
  bio.classList.remove("animate__shakeX");
  void bio.offsetWidth;
  bio.classList.add("animate__shakeX");
});

// 🔥 Skills section shake (ONLY ONE LISTENER)


skillsSection.addEventListener("click", () => {
  skillsSection.classList.remove("animate__shakeX");
  void skillsSection.offsetWidth; // force reflow
  skillsSection.classList.add("animate__shakeX");
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent!');
});
// Email.js

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_im0jp9q",
    "template_ltojkuc",
    "#contact-form",
    "79PqNa6iUd3uuZEgd"
  )
  .then(() => {
    contactMessage.textContent = "Message sent successfully!";
    contactMessage.style.color = "#2fffdc";

    contactForm.reset(); 
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);
  })
  .catch(() => {
    contactMessage.textContent =
      "Failed to send the message, please try again.";
    contactMessage.style.color = "red";
  });
};

contactForm.addEventListener("submit", sendEmail);
