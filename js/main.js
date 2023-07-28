/* SCROLL TO TOP BUTTON */

const btnToTop = document.querySelector("#btnScrollToTop");

btnToTop.addEventListener("click", () =>{
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
    if (window.scrollY < 500) btnToTop.style.right = -100 + "px";
    else btnToTop.style.right = 5 + "px";
})