// Your code goes here

let funBusImg = document.querySelector(".intro img");

// fun bus image mouseover
funBusImg.addEventListener("mouseover", () => {
  funBusImg.style.transform = "scale(1.2)";
  funBusImg.style.transition = "all 0.3s";
});

// fun bus image mouseleave
funBusImg.addEventListener("mouseleave", () => {
  funBusImg.style.transform = "scale(1.0)";
  funBusImg.style.transition = "all 0.3s";
});

let logoHeading = document.querySelector(".logo-heading");

// logoHeading dblclick
logoHeading.addEventListener("dblclick", () => {
  logoHeading.classList.toggle("rotate");
});

let imgContents = [
  ...document.querySelectorAll(".content-section .img-content img")
];

imgContents[0].addEventListener("load", () => {
  alert("image loaded");
});

// image keydown (down key) fade out
document.addEventListener("keydown", e => {
  if (e.keyCode === 39) {
    imgContents.forEach(image => {
      image.style.opacity = 0;
      setTimeout(() => {
        image.style.opacity = 1;
      }, 1000);
    });
  }
});

// resize events change color of background

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 1000) {
    document.body.style.backgroundColor = "lightgray";
    return;
  }

  document.body.style.backgroundColor = "white";
});

// click events
let nav = document.querySelector(".nav");
let navLinks = [...document.querySelectorAll(".nav-link")];

nav.addEventListener("click", e => {
  e.target.style.backgroundColor = "red";
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.style.color === "lightblue") {
      e.target.style.color = "black";
      return;
    }
    e.target.style.color = "lightblue";
  });
});

// scroll event
window.addEventListener("scroll", () => {
  imgContents.forEach(image => {
    image.style.opacity = 0;
    setTimeout(() => {
      image.style.opacity = 1;
    }, 1000);
  });
});

// dragged event rotate;
imgContents.forEach(image => {
  image.addEventListener("drag", () => {
    image.classList.toggle("rotate");
  });
});

let pHeader = document.querySelector(".intro p");

pHeader.addEventListener("wheel", () => {
  pHeader.style.fontSize = "25px";
});

//GSAP slides button down effect

gsap.to(".btn", { duration: 2, y: 7 });
