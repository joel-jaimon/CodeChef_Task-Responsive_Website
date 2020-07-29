var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  keyboard: {
  enabled: true,
},
});


let mouseCursor = document.querySelector(".cursor");
let text_x = document.querySelectorAll("p");
let sinfo = document.querySelectorAll(".scroll-info");
var theDiv = document.querySelector(".scroll-txt");
var content = document.createTextNode("Scroll\nDown");

window.addEventListener("mousemove", cursor);

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}


text_x.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("text_x-mouseover");
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("text_x-mouseover");
    });
});

sinfo.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("scroll-txt");
        theDiv.removeChild(content);
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("scroll-txt");
        theDiv.appendChild(content);
    });
});

