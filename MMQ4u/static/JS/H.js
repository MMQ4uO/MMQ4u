window.onresize = () => {
    hdr_func();
};
window.onscroll = () => {
    hdr_func();
};
hdr_func();
function hdr_func() {
    if (window.innerWidth < 1220) {
        document.getElementsByClassName("hdr-btn")[0].style.display = "block";
        document.getElementsByClassName("hdr-btn")[0].parentElement.children[1].classList.add("offcanvas");
        document.getElementsByClassName("hdr-btn")[0].parentElement.children[1].classList.add("offcanvas-end");
    } else {
        document.getElementsByClassName("hdr-btn")[0].style.display = "none";
        document.getElementsByClassName("hdr-btn")[0].parentElement.children[1].classList.remove("offcanvas");
        document.getElementsByClassName("hdr-btn")[0].parentElement.children[1].classList.remove("offcanvas-end");
    };
    if (window.scrollY + document.getElementsByClassName("hdr-btn")[0].parentElement.clientHeight > document.getElementsByClassName("fotr")[0].offsetTop) {
        document.getElementsByClassName("hdr-btn")[0].parentElement.classList.remove("position-fixed");
        document.getElementsByClassName("hdr-btn")[0].parentElement.classList.add("position-absolute");
    } else {
        document.getElementsByClassName("hdr-btn")[0].parentElement.classList.remove("position-absolute");
        document.getElementsByClassName("hdr-btn")[0].parentElement.classList.add("position-fixed");
    };
};
setInterval(() => {
    document.getElementsByClassName("cntnt")[0].style.marginRight = document.getElementsByClassName("hdr-btn")[0].parentElement.clientWidth + "px";
}, 0);