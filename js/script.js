// js code start:
// ---------------------------------------------------------->

// Theme Switcher
const themeOptions = document.querySelectorAll(".theme-option");

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const theme = option.getAttribute("data-theme");
    document.body.setAttribute("data-theme", theme);

    // Update active class
    themeOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Header scroll effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    // Filter projects
    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

const testimonialText = document.querySelector(".testimonial-text");
const testimonialAuthor = document.querySelector(".testimonial-author h4");
const testimonialRole = document.querySelector(".testimonial-author p");

const testimonials = [
  {
    text: "Working with G3 Architects was an exceptional experience from start to finish. Their innovative design for our corporate headquarters perfectly captured our brand identity while creating a functional and inspiring workspace for our team.",
    author: "Robert Thompson",
    role: "CEO, TechVision Inc.",
  },
  {
    text: "The residential design created by G3 Architects exceeded our expectations. They listened to our needs and delivered a home that is both beautiful and highly functional for our family.",
    author: "Jennifer Martinez",
    role: "Homeowner",
  },
  {
    text: "G3 Architects transformed our outdated office space into a modern, collaborative environment that has significantly improved employee satisfaction and productivity.",
    author: "James Wilson",
    role: "Operations Director, Innovate Co.",
  },
];

let currentTestimonial = 0;

function updateTestimonial() {
  testimonialText.textContent = testimonials[currentTestimonial].text;
  testimonialAuthor.textContent = testimonials[currentTestimonial].author;
  testimonialRole.textContent = testimonials[currentTestimonial].role;
}

document.querySelector(".slider-btn.next").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
});

document.querySelector(".slider-btn.prev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

// js end
