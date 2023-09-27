let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelectorAll(".navlink");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
// navlinks.addEventListener("click", function () {
//     mobileView.classList.toggle("show");
//     body.classList.remove("overflow-hidden");
//     span1.classList.toggle("rotate1");
//     span2.classList.toggle("rotate2");
//     span3.classList.toggle("rotate3");
// })
navlinks.forEach((navlinks))(
    navlinks.addEventListener("click", function (){
    mobileView.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
    }
))