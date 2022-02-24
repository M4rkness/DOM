"use strict";

const box = document.getElementById("box"),
        btns = document.getElementsByTagName("button"),
        circles = document.getElementsByClassName("circle"),
        heart_block = document.querySelector(".heart_block"),
        hearts = heart_block.querySelectorAll(".heart"),
        oneHeart = heart_block.querySelector(".heart");


// box.style.backgroundColor = "blue";
// box.style.width = "500px";
box.style.cssText = "background-color: blue; width: 500px";


btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue"
// };

hearts.forEach(item => {
    item.style.backgroundColor = "blue"
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");
div.style.cssText = "background-color: black; width: 200px; height: 100px; color: white;";

heart_block.append(div);
// heart_block.appendChild(div); // todo устаревший 

// heart_block.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// heart_block.insertBefore(div, hearts[2]); // todo устаревший

// circles[0].remove();
// heart_block.removeChild(hearts[1]); // todo устаревший

hearts[0].replaceWith(circles[0]);
// heart_block.replaceChild(circles[0], hearts[2]); // todo устаревший

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = "Hello world!";

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
