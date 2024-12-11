let textAnimation = document.querySelector(".text__animation");
let spans = textAnimation.innerText
  .split("")
  .map((letter, i) => {
    return `<span style="transition-delay: ${i * 40}ms; filter:hue-rotate(${
      i * 30
    }deg)">${letter}</span>`;
  })
  .join("");
console.log(spans);

textAnimation.innerHTML = spans;

// ABOUT
const aboutSection = document.querySelector("#about");
const aboutText = document.querySelector(".about__text");

function animateText() {
  let { top, bottom } = aboutSection.getBoundingClientRect();

  const viewportHeight = window.innerHeight;
  const halfwayThreshold = viewportHeight / 2;
  let opacity = 0;

  if (Math.abs(top) < halfwayThreshold && Math.abs(bottom) > halfwayThreshold) {
    let distance = halfwayThreshold - Math.abs(top);
    opacity = Math.min(Math.max(distance / halfwayThreshold, 0), 1);
  }
  aboutSection.style.opacity = opacity;
}

// VIDEO

const main = document.querySelector("main");
const video = document.querySelector("video");
const videoSection = document.querySelector("#video");
main.addEventListener("scroll", () => {
  animateVideo();
  animateText();
});

const headerLeft = document.querySelector(".video__header__left");
const headerRight = document.querySelector(".video__header__right");

function animateVideo() {
  let { bottom } = videoSection.getBoundingClientRect();
  let scale = 1 - (bottom - window.innerHeight) * 0.0005;
  scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
  video.style.transform = `scale(${scale})`;

  // Text transformation
  let textTrans = bottom - window.innerHeight;
  textTrans = textTrans < 0 ? 0 : textTrans;
  headerLeft.style.transform = `translateX(${-textTrans}px)`;
  headerRight.style.transform = `translateX(${textTrans}px)`;
}
