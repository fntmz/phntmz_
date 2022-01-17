var toggler = false

function toggleNavbar() {
    if (toggler == false) {
        $("main").css("transform", "scale(1)")
        $(".overlay").css("transform", "translateY(-100vh)");
        $("#navbar-brand > div").css("transform", "translateY(48px)");
        $(".overlay-content > .navbar-item").css("transform", "translateY(10px)");
        $(".overlay-content > .navbar-item").fadeOut(0);
        $("#navbar-socials").css("opacity", "0");
        toggler = true;
        $("main").css("transform", "scale(.5)")
        $(".overlay").css("transform", "translateY(0)");
        setTimeout(function () {
            $("#navbar-brand > div").css("transform", "translateY(0)");
        }, 800);
        for (let i = 0; i < $(".navbar-item").length + 1; i++) {
            setTimeout(function () {
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").fadeIn(300);
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").css(
                    "transform", "translateY(0)"
                );
            }, 200 * i + 1000);
        }
        if ($(".navbar-item").length == 4) {
            setTimeout(function () {
                $("#navbar-socials").css("opacity", "1");
            }, 2100);
        } else {
            setTimeout(function () {
                $("#navbar-socials").css("opacity", "1");
            }, 2100 + 200);
        }
    } else {
        $("main").css("transform", "scale(.5)")
        $(".overlay").css("transform", "translateY(0)");
        $("#navbar-brand > div").css("transform", "translateY(0)");
        $(".overlay-content > .navbar-item").css("transform", "translateY(0)");
        $(".overlay-content > .navbar-item").fadeIn(0);
        $("#navbar-socials").css("opacity", "1");
        toggler = false;
        $("#navbar-socials").css("opacity", "0");
        for (let i = 0; i < $(".navbar-item").length + 1; i++) {
            setTimeout(function () {
                $(".overlay-content > .navbar-item:nth-last-child(" + i + ")").fadeOut(300);
                $(".overlay-content > .navbar-item:nth-last-child(" + i + ")").css(
                    "transform", "translateY(10px)"
                );
            }, 200 * i);
        }

        if ($(".navbar-item").length == 4) {
            setTimeout(function () {
                $("#navbar-brand > div").css("transform", "translateY(48px)");
            }, 1000);
            setTimeout(function () {
                $(".overlay").css("transform", "translateY(-100vh)");
                $("main").css("transform", "scale(1)")
            }, 1200);
        } else {

            setTimeout(function () {
                $("#navbar-brand > div").css("transform", "translateY(48px)");
            }, 1000 + 200);
            setTimeout(function () {
                $(".overlay").css("transform", "translateY(-100vh)");
                $("main").css("transform", "scale(1)")
            }, 1200 + 200);
        }
    }
}
