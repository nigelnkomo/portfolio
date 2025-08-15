import { createProjectCards } from "./utils.js";

const splashScreen = document.querySelector(".splash__screen");
const splashLeft = document.querySelector(".left");
const splashRight = document.querySelector(".right");
const progressBar = document.querySelector(".progress__bar");
const percentage = document.querySelector(".percentage");

createProjectCards();

// U6pdate the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Splash screen animation
let loading = true;

async function setup() {
  setTimeout(() => {
    progressBar.style.height = "40%";
  }, 500);

  setTimeout(() => {
    progressBar.style.height = "80%";
  }, 800);

  setTimeout(() => {
    progressBar.style.height = "100%";
  }, 900);

  setTimeout(() => {
    splashLeft.classList.add("active");
    splashRight.classList.add("active");
    progressBar.classList.add("complete");
    splashScreen.classList.add("complete");
    loading = false;
  }, 2000);
}

function percentageTracker() {
  if (loading) {
    let { height, top } = progressBar.getBoundingClientRect();
    let p = Math.ceil((height / window.innerHeight) * 100);
    percentage.textContent = `${p}%`;
    percentage.style.transform = `translateY(calc(${
      top - window.innerHeight
    }px)`;
    requestAnimationFrame(percentageTracker);
  }
}

setup();
percentageTracker();

// Project animation
const projectsSection = document.getElementById("projects");
const projects = [...document.querySelectorAll(".project")];

function scrollProjects() {
  let projectsSectionTop = projectsSection.getBoundingClientRect().top;

  for (let i = 0; i < projects.length; i++) {
    // the parentElement is the blog__post div which contains each post div
    if (
      projects[i].parentElement.getBoundingClientRect().top <=
      window.innerHeight
    ) {
      let offset = (projectsSectionTop + window.innerHeight * (i + 1)) * 0.0005;
      offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
      if (i == 1)
        console.log(projectsSectionTop + window.innerHeight * (i + 1), offset);
      projects[i].style.transform = `scale(${1 + offset})`;
    }
  }
}

document.addEventListener("scroll", () => {
  scrollProjects();
});

// Progress bar scroll effect
const scrollProgressBar = document.getElementById("progress");

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;

  scrollProgressBar.style.transform = `scaleX(${scrollFraction})`;
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
document.addEventListener("DOMContentLoaded", updateProgressBar);

// Text reveal animation
// const textReveals = [...document.querySelectorAll(".text__reveal")];

// function revealText(spans) {
//     spans.forEach((span, idx) => {
//         requestAnimationFrame(() => {
//             setTimeout(() => {
//                 span.style.transform = `translateY(0)`;
//                 span.style.opacity = "1";
//             }, (idx + 1) * 40);
//         });
//     });
// }

// function resetText(spans) {
//     requestIdleCallback(() => {
//         spans.forEach((span) => {
//             span.style.transform = `translateY(1em)`;
//             span.style.opacity = "0";
//         });
//     });
// }

// const callback = (entries) => {
//     entries.forEach((entry) => {
//         const spans = [...entry.target.querySelectorAll("span")];
//         if (entry.isIntersecting) {
//             revealText(spans);
//         } else {
//             resetText(spans);
//         }
//     });
// };

// const observer = new IntersectionObserver(callback, {
//     threshold: 0.8,
//     rootMargin: "0px",
// });

// textReveals.forEach((text) => {
//     const string = text.innerText;
//     let html = "";
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i] === " " ? "&nbsp;" : string[i];
//         html += `<span>${char}</span>`;
//     }
//     text.innerHTML = html;

//     const spans = [...text.querySelectorAll("span")];
//     spans.forEach((span) => {
//         span.style.display = "inline-block";
//         span.style.transform = "translateY(1em)";
//         span.style.opacity = "0";
//         span.style.transition = "transform 0.3s ease, opacity 0.3s ease";
//     });

//     observer.observe(text);
// });

// Navigation checkbox toggle
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".navigation__checkbox");
  const elementsToHide = document.querySelectorAll(
    ".stacked-content a, .stacked-content h3, .stacked-content .branding-logo, .stacked-content .pulse"
  );

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Show instantly when checked
      elementsToHide.forEach((el) => {
        el.style.display = "block";
      });
    } else {
      // Hide after 0.5s when unchecked
      setTimeout(() => {
        elementsToHide.forEach((el) => {
          el.style.display = "none";
        });
      }, 800);
    }
  });
});
