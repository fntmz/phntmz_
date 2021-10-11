window.addEventListener('scroll', noScroll);
window.onscroll = function () { scrollFunction() };

function noScroll() {
    window.scrollTo(0, 0);
}

// loader js
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    window.removeEventListener('scroll', noScroll);
})

// carousel js
$('.carousel').carousel({
    interval: 10000
})

const maxHeight = $(window).height()

function scrollFunction() {
    if (document.body.scrollTop > maxHeight || document.documentElement.scrollTop > maxHeight) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10%";
    }
}