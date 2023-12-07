
let moveinable = false;

function openZoom(imageSrc, title, description) {
  let zoomImage = document.getElementById("zoomImage");
  let zoomTitle = document.querySelector(".title-zoom");
  let zoomDescrip = document.querySelector(".descrip");
  let zoomContainer = document.getElementById("zoomContainer");
  let blurBackground = document.getElementById("RblurBackground");

  moveinable=true
  

  zoomContainer.style.backgroundColor = '--clr-black';

  
  zoomImage.classList.add("flip-animation");

  
  blurBackground.style.display = "block";

  zoomImage.src = imageSrc;
  zoomTitle.innerText = title;
  zoomDescrip.innerText = description;

  
  zoomTitle.style.opacity = "1";
  zoomDescrip.style.opacity = "1";

  zoomContainer.style.display = "flex";
  zoomContainer.style.flexDirection = "inline-block";

  setTimeout(() => {
    zoomImage.classList.add("flip");
  }, 50);

  
  zoomImage.addEventListener("transitionend", () => {
    zoomImage.classList.remove("flip-animation", "flip");
  }, { once: true });
}

function closeZoom() {
  let zoomContainer = document.getElementById("zoomContainer");
  let zoomTitle = document.querySelector(".title");
  let zoomDescrip = document.querySelector(".descrip");
  let mvBody = document.querySelector('main');
  let blurBackground = document.getElementById("RblurBackground");

  moveinable = false

  mvBody.style.position ="relative";
  blurBackground.style.display = "none";


  zoomImage.src = "";
  zoomTitle.innerText = "";
  zoomDescrip.innerText = "";
  zoomContainer.style.display = "none";
 
  zoomTitle.style.opacity = "0";
  zoomDescrip.style.opacity = "0";
}



let targetX = 0;
let targetY = 0;
let isMoving = false;
let lastMoveTime = 0;

function move(e) {
  if (!moveinable) {
    targetX = 2 * e.clientX - window.innerWidth / 2;
    targetY = 3 * e.clientY - window.innerHeight / 2;

    const currentTime = Date.now();
    if (!isMoving && currentTime - lastMoveTime > 200) {
      isMoving = true;
      movePageSmoothly(currentTime);
    }
  }
}

function movePageSmoothly(startTime) {
  const currentX = window.scrollX;
  const currentY = window.scrollY;

  const deltaX = (targetX - currentX) / 10; // You can adjust the speed by changing the divisor
  const deltaY = (targetY - currentY) / 10;

  window.scrollTo(currentX + deltaX, currentY + deltaY);

  if (Math.abs(currentX + deltaX - targetX) > 1 || Math.abs(currentY + deltaY - targetY) > 1) {
    requestAnimationFrame(() => movePageSmoothly(startTime));
  } else {
    isMoving = false;
  }
}
