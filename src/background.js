const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG", "4.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background");


document.body.appendChild(bgImage);
