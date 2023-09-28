let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let dropdown = document.querySelectorAll(".dropdown-list");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})


dropdown.forEach((dropdown) => {
    dropdown.addEventListener("click", function () {
        mobileView.classList.toggle("show");
        body.classList.remove("overflow-hidden");
        span1.classList.toggle("rotate1");
        span2.classList.toggle("rotate2");
        span3.classList.toggle("rotate3");
    });
});
