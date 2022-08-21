window.addEventListener("scroll", noScroll);

function noScroll() {
    window.scrollTo(0, 0);
}

if (localStorage.getItem("loader") == "true") {
    var timing = 0;
    $(".loader-wrapper").css("display", "none");
} else {
    var timing = 2000;
}

$(window).on("load", function () {
    window.removeEventListener("scroll", noScroll);
    setTimeout(function () {
        $(".loader-wrapper").css("transform", "translateY(-100vh)");
        $(".hr-animate").css("width", "25%");
        $(".index-header-text").css("width", "100%");
        $("#gallery-notif > *:first-child").css("height", "100%");
    }, timing);
    setTimeout(function () {
        $("#gallery-url, #gallery-notif-description").css(
            "transform",
            "translateX(0)",
        );
        $(".index-header-text > div").css("transform", "translateY(0)");
        $("#gallery-cover > div > div").css("transform", "translateY(0)");
    }, timing + 1000);
    setTimeout(function () {
        $("#gallery-cover > div > span").fadeOut(300);
    }, timing + 2000);
});
