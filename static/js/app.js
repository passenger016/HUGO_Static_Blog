const mode = localStorage.getItem("mode") || ""; // check for mode's value in the local storage if it doesn't exist then set it to an empty string
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");


document.body.className = mode; // the mode's value is applied to the body

toggle.addEventListener('click',()=>{
    console.log('click');
    localStorage.setItem("mode", mode === "light" ? "" : "light");
    body.classList.toggle("light");
})