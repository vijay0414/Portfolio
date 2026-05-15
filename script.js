document.addEventListener("DOMContentLoaded", () => {
  // ================= THEME TOGGLE (BEN 10 OMNITRIX) =================
  const themeToggle = document.getElementById("theme-toggle");
  const omnitrixOverlay = document.querySelector(".omnitrix-overlay");
  const body = document.body;
  const themeIcon = themeToggle?.querySelector("i");
  const navItems = document.querySelectorAll(".nav-links a");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }

  themeToggle?.addEventListener("click", () => {
    // IT'S HERO TIME! ⌚
    omnitrixOverlay.classList.remove("transformation-active");
    void omnitrixOverlay.offsetWidth; // Trigger reflow
    omnitrixOverlay.classList.add("transformation-active");

    // Toggle Mode during the peak of the green flash
    setTimeout(() => {
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      
      if (themeIcon) {
        themeIcon.className = isLight ? "fas fa-sun" : "fas fa-moon";
      }
      
      localStorage.setItem("theme", isLight ? "light" : "dark");
    }, 800); // peak of alienFlash animation

    // Auto-remove overlay after animation ends
    setTimeout(() => {
        omnitrixOverlay.classList.remove("transformation-active");
    }, 1600);
  });

  // Home button effect
  const homeBtn = document.getElementById("homeBtn");
  const bio = document.getElementById("bioText");

  homeBtn?.addEventListener("click", () => {
    if (bio) {
      bio.style.transition = "transform 0.5s ease";
      bio.style.transform = "scale(1.02)";
      setTimeout(() => {
        bio.style.transform = "scale(1)";
      }, 500);
    }
  });

  // Skills section effect
  const skillsSection = document.getElementById("skills-section");

  skillsSection?.addEventListener("click", () => {
    if (skillsSection) {
      skillsSection.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      skillsSection.style.transform = "scale(1.02)";
      setTimeout(() => {
        skillsSection.style.transform = "scale(1)";
      }, 400);
    }
  });

  // ================= SMOOTH SCROLLING =================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ================= SCROLL SPY (ACTIVE NAV LINKS) =================
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // ================= INTERSECTION OBSERVER (ANIMATIONS) =================
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger skill progress animations
        if (entry.target.classList.contains("progress")) {
          const width = entry.target.getAttribute("style").split(":")[1];
          entry.target.style.width = width;
        }
        
        // Add fade-in classes
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements for animations
  document.querySelectorAll(".skill-card").forEach((el) => observer.observe(el));
  document.querySelectorAll(".skill-project-item").forEach((el) => observer.observe(el));
  document.querySelectorAll(".resume-block").forEach((el) => observer.observe(el));

  // ================= EMAILJS CONTACT FORM =================
  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simple button loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      emailjs
        .sendForm(
          "service_im0jp9q",
          "template_ltojkuc",
          "#contact-form",
          "79PqNa6iUd3uuZEgd"
        )
        .then(
          () => {
            contactMessage.textContent = "Message sent successfully! ✨";
            contactMessage.style.color = "#00f2ff";
            contactForm.reset();
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;

            setTimeout(() => {
              contactMessage.textContent = "";
            }, 5000);
          },
          (error) => {
            contactMessage.textContent = "Oops! Something went wrong. ❌";
            contactMessage.style.color = "#ff4d4d";
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            console.error("EmailJS Error:", error);
          }
        );
    });
  }
});



