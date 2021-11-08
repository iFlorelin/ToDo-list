"use strict";

let main = document.querySelector(".main");
let midl = document.querySelector(".midl");
let block = document.querySelectorAll(".main__block");

function move() {
  main = document.querySelector(".main");
  midl = document.querySelector(".midl");
  block = document.querySelectorAll(".main__block");

  block.forEach((element) => {
    element.onclick = () => {
      if (element.offsetParent.className == "main") {
        element.classList.add("clear", "com");
        setTimeout(() => {
          setTimeout(() => {
            element.classList.remove("clear");
          }, 100);
          midl.appendChild(element);
        }, 500);
      } else {
        element.classList.add("clear");
        element.classList.remove("com");
        setTimeout(() => {
          setTimeout(() => {
            element.classList.remove("clear");
          }, 100);
          main.appendChild(element);
        }, 500);
      }
    };
  });
}

let txt = document.querySelector(".txt");
txt.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && txt.value !== "") {
    main.innerHTML += `<div class="main__block"><p class="item"> ${txt.value}</p></div>`;
    txt.value = "";
    move();
  }
});

move();
