let images = [...document.querySelectorAll(".imagescards")];
let container = document.querySelector(".bigcontainer");
let containerWidth;
let imagesWidth;
let current = 0;
let target = 0;
let ease = 0.03;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  containerWidth = container.getBoundingClientRect().width;
  imagesWidth = containerWidth / images.length;
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(container, `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imagesWidth;
  let intersectionRatioValue;

  /* Parallax */

  images.forEach((images, idx) => {
    intersectionRatioValue = ratio - (idx - 0.4);
    setTransform(images, `translateX(${intersectionRatioValue * 35}px)`);
  });
}

init();
animate();

/* Script Popup */

document.querySelectorAll(".imagescards").forEach((image) => {
  image.onclick = () => {
    document.getElementById("menu-hidden").classList.add("hidden");
    document.querySelector("nav").classList.add("hidden");
    document.querySelector(".bigcontainer").classList.add("background-blur");
    document.body.classList.add("no-scroll");
    document.querySelector(".popup-image").style.display = "flex";
    document.querySelector(".popup-image .popup-pic").src =
      image.getAttribute("src");
    const textCardContent =
      image.parentElement.querySelector(".textcards").textContent;
    document.querySelector(".popup-image .textcards-popup").textContent =
      textCardContent;
    const titleContent =
      image.parentElement.querySelector(".titlecards").textContent;
    document.querySelector(".popup-image .popup-title").textContent =
      titleContent;
    setTimeout(() => {
      document.querySelector(".popup-image").classList.add("visible");
    }, 70);
  };
});

/* Désactivation propriétés popup */

document.querySelector(".popup-image .popup-button").onclick = () => {
  document.getElementById("menu-hidden").classList.remove("hidden");
  document.querySelector("nav").classList.remove("hidden");
  document.querySelector(".bigcontainer").classList.remove("background-blur");
  document.body.classList.remove("no-scroll");
  document.querySelector(".popup-image").classList.remove("visible");
  document.querySelector(".popup-image").style.display = "none";
};

// Hover des titres d'images
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const images = card.querySelector(".imagescards");
  const title = card.querySelector(".titlecards");

  images.addEventListener("mouseover", () => {
    title.classList.add("titlehover");
  });

  images.addEventListener("mouseout", () => {
    title.classList.remove("titlehover");
  });
});
