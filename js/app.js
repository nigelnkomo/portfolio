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
console.log(spans);
