window.addEventListener('scroll', noScroll);
window.onscroll = function () { scrollFunction() };

function noScroll() {
    window.scrollTo(0, 0);
}

const maxHeight = $(window).height() * 0.5;

function scrollFunction() {
    if (document.body.scrollTop > maxHeight || document.documentElement.scrollTop > maxHeight) {
        document.getElementById("menu-button").style.top = "20px";
    } else {
        document.getElementById("menu-button").style.top = "-10vh";
    }
}

// loader js
$(window).on("load", function () {
    setTimeout(
        function () {
            $(".loader-wrapper").fadeOut("slow");
            var hrAnimate = document.getElementsByClassName("hr-animate");
            var indexHeaderText = document.getElementsByClassName("index-header-text");
            for (var i = 0; i < hrAnimate.length; i++) {
                hrAnimate[i].style.width = "25%";
            };
            for (var i = 0; i < indexHeaderText.length; i++) {
                indexHeaderText[i].style.width = "100%";
            };
            window.removeEventListener('scroll', noScroll);
        }, 2000)
})


function scrollUp() {
    $(document).ready(function () {
        $(this).scrollTop(0);
    });
}

// auto scroll to top on reload
$(document).ready(function () {
    $(this).scrollTop(0);
});