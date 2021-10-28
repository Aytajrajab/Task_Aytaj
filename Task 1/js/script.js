const p = document.querySelector("div");
let button = document.querySelector("input");

button.addEventListener('click', () => {
    let randomColor = `rgb(${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)})`;
    p.style.backgroundColor = randomColor;
})