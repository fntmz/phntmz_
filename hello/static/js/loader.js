window.addEventListener("scroll", noScroll);

function noScroll() {
    window.scrollTo(0, 0);
}

const maxHeight = $(window).height() * 0.5;
$(window).on("scroll", function () {
    if (document.documentElement.scrollTop > maxHeight) {
        $("#menu-button").css("transform", "translateY(-10px)");
    } else {
        $("#menu-button").css("transform", "translateY(-100px)");
    }
});


$(window).on("load", function () {
    window.removeEventListener("scroll", noScroll);
    if (document.referrer.includes("phntmz.herokuapp.com")) {
        $(".loader-wrapper").css("display", "none");
        $(".hr-animate").css("width", "25%");
        $(".index-header-text").css("width", "100%");
        $("#gallery-notif > *:first-child").css("height", "100%");
        setTimeout(function () {
            $('#gallery-url, #gallery-notif-description').css("transform", "translateX(0)");
            $(".index-header-text > div").css("transform", "translateY(0)");
            $("#gallery-cover > div > div").css("transform", "translateY(0)");
        }, 1000);
        setTimeout(function () {
            $("#gallery-cover > div > span").fadeOut(300);
        }, 2000);
    } else {
        setTimeout(function () {
            $(".loader-wrapper").css("transform", "translateY(-100vh)");
            $(".hr-animate").css("width", "25%");
            $(".index-header-text").css("width", "100%");
            $("#gallery-notif > *:first-child").css("height", "100%");
        }, 2000);
        setTimeout(function () {
            $('#gallery-url, #gallery-notif-description').css("transform", "translateX(0)");
            $(".index-header-text > div").css("transform", "translateY(0)");
            $("#gallery-cover > div > div").css("transform", "translateY(0)");
        }, 3000);
        setTimeout(function () {
            $("#gallery-cover > div > span").fadeOut(300);
        }, 4000);
    }
})