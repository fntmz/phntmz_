window.addEventListener('scroll', noScroll);

function noScroll() {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $(this).scrollTop(0);
});

const maxHeight = $(window).height() * 0.5;
window.onscroll = function () {
    if (document.documentElement.scrollTop > maxHeight) {
        $("#menu-button").css("top", "-10px");
    } else {
        $("#menu-button").css("top", "-10vh");
    }
};

$(window).on("load", function () {
    setTimeout(
        function () {
            $(".loader-wrapper").fadeOut("slow");
            $(".hr-animate").css("width", "25%");
            $(".index-header-text").css("width", "100%");
            window.removeEventListener('scroll', noScroll);
        }, 2000)
    console.log("%cthanks for visiting, amazing human. 104 103 32 60 51", "color: rgb(252, 87, 96); font-size: 16px")
})