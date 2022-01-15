var toggler = false

function toggleNavbar() {
    if (toggler == false) {
        toggler = true;
        $(".overlay").css("transform", "translateX(0)");

        setTimeout(function () {
            $("#navbar-brand > div").css("transform", "translateY(0)");
        }, 400);

        for (let i = 0; i < 6; i++) {
            setTimeout(function () {
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").fadeIn(300);
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").css(
                    "transform", "translateY(0)"
                );
            }, 200 * i + 400);
        }

        setTimeout(function () {
            $("#navbar-socials").css("opacity", "1");
        }, 1500);
    } else {
        toggler = false;
        $("#navbar-socials").css("opacity", "0");
        for (let i = 0; i < 6; i++) {
            setTimeout(function () {
                $(".overlay-content > .navbar-item:nth-last-child(" + i + ")").fadeOut(300);
                $(".overlay-content > .navbar-item:nth-last-child(" + i + ")").css(
                    "transform", "translateY(10px)"
                );
            }, 200 * i);
        }
        setTimeout(function () {
            $("#navbar-brand > div").css("transform", "translateY(48px)");
        }, 1100);
        setTimeout(function () {
            $(".overlay").css("transform", "translateX(100vw)");
        }, 1500);
    }
}
