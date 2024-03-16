// for display typing effect
let cv = document.getElementById("cv");
let title = document.getElementById("title");
let title1 = document.getElementById("title1");
const word = "MUKUL";
title.innerText = "<title>";
title1.innerText = "</title>";
changeColorCV = () => {
  setTimeout(() => (cv.innerText = "S"), 500);
  setTimeout(() => (cv.innerText = "Sk"), 1000);
  setTimeout(() => (cv.innerText = "Ski"), 1500);
  setTimeout(() => (cv.innerText = "Skil"), 2000);
  setTimeout(() => (cv.innerText = "Skill"), 2500);

  setTimeout(() => (cv.innerText = "Skills"), 3000);
};

changeColorCV();
setInterval(changeColorCV, 3500);

// for hamburgur
document.querySelector(".hamburgur").addEventListener("click", () => {
  document.getElementById("box1").classList.toggle("box1change");
  document.getElementById("box2").classList.toggle("box2change");
  document.getElementById("box3").classList.toggle("box3change");
  document.getElementById("menuBar").classList.toggle("menuBarChange");
  if (document.getElementById("menuBar").classList.contains("menuBarChange")) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("CVdownload").style.display = "none";
  } else {
    setTimeout(() => {
      document.getElementById("menu").style.display = "flex";
    }, 400);
    setTimeout(() => {
      document.getElementById("CVdownload").style.display = "flex";
    }, 450);
  }
});

//progress bar logic

setTimeout(() => {
  document.getElementById("actualproboot").classList.add("actuaproChangeboot");
  document.getElementById("actualprohtml").classList.add("actuaproChangehtml");
  document.getElementById("actualprocss").classList.add("actuaproChangecss");
  document.getElementById("actualprojs").classList.add("actuaproChangejs");
  document
    .getElementById("actualproReact")
    .classList.add("actuaproChangeReact");
}, 500);
