let btn = document.querySelector("button")
let p = document.querySelector("p")


btn.addEventListener('click', (e) => {
    e.preventDefault();
    let first = document.getElementById("firstname").value;
    let second = document.getElementById("lastname").value;

    document.querySelector("p").innerHTML = first + " " + second;

})