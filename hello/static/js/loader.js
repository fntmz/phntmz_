window.addEventListener("scroll", noScroll);

function noScroll() {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $(this).scrollTop(0);
});

const maxHeight = $(window).height() * 0.5;
$(window).on("scroll", function () {
    if (document.documentElement.scrollTop > maxHeight) {
        $("#menu-button").css("transform", "translateY(-10px)");
    } else {
        $("#menu-button").css("transform", "translateY(-100px)");
    }
});

$(window).on("load", function () {
    setTimeout(function () {
        $(".loader-wrapper").fadeOut("slow");
        $(".hr-animate").css("width", "25%");
        $(".index-header-text").css("width", "100%");
        window.removeEventListener("scroll", noScroll);
    }, 2000);
});
