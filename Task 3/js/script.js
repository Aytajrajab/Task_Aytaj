let a = document.getElementById("mySelect");
let btn = document.getElementById("button");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    a.remove(a.selectedIndex);
})