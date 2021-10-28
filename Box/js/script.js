let b = document.getElementById("box");
let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
b.addEventListener('click', () => {
    b.classList.toggle("box1");
})
b1.addEventListener('click', () => {
    b1.classList.toggle("box2");
})
b2.addEventListener('click', () => {
    b2.classList.toggle("box1");
})
b3.addEventListener('click', () => {
    b3.classList.toggle("box3");
})