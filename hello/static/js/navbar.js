var toggler = false

function toggleNavbar() {
    if (toggler == false) {
        toggler = true;
        $("main > *").css("transform", "scale(.7)")
        $(".overlay").css("transform", "translateY(0)");

        setTimeout(function () {
            $("#navbar-brand > div").css("transform", "translateY(0)");
        }, 800);

        for (let i = 0; i < 6; i++) {
            setTimeout(function () {
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").fadeIn(300);
                $(".overlay-content > .navbar-item:nth-child(" + i + ")").css(
                    "transform", "translateY(0)"
                );
            }, 200 * i + 800);
        }

        setTimeout(function () {
            $("#navbar-socials").css("opacity", "1");
        }, 2000);
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
            $(".overlay").css("transform", "translateY(-100vh)");
            $("main > *").css("transform", "scale(1)")
        }, 1500);
    }
}
