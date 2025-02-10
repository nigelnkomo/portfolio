const logo = document.querySelector(".header__logo");
const header = document.querySelector(".header");
const navToggle = document.querySelector("#main-navigation-toggle");
const navLinks = document.querySelectorAll(".header__nav-link");

function moveLogo() {
    if (window.innerWidth < 1024) {
        // Move logo to body, before the header
        if (logo.parentNode !== document.body) {
            document.body.insertBefore(logo, header);
        }
    } else {
        // Move logo back inside the header (at the top)
        if (logo.parentNode !== header) {
            header.insertBefore(logo, header.firstChild);
        }
    }
}

window.addEventListener("resize", moveLogo);
window.addEventListener("DOMContentLoaded", moveLogo);

document.addEventListener("DOMContentLoaded", function () {
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navToggle.checked = false; // Close the menu
            document.body.classList.remove("no-scroll"); // Enable scrolling
        });
    });

    navToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    });
});

