function openNav() {
    $(".overlay").css("right", "0");

    setTimeout(function () {
        $("#navbar-brand").css("opacity", "1");
    }, 500);

    for (let i = 0; i < 6; i++) {
        setTimeout(function () {
            $(".overlay-content > .navbar-item:nth-child(" + i + ")").css({
                opacity: "1",
                top: "0",
            });
        }, 200 * i + 500);
    }

    setTimeout(function () {
        $("#navbar-socials").css("opacity", "1");
    }, 1800);
    setTimeout(function () {
        $(".closebtn").css({ opacity: "1", visibility: "visible" });
    }, 2000);
}

function closeNav() {
    $(".closebtn").css("opacity", "0");
    setTimeout(function () {
        $(".closebtn").css("visibility", "hidden");
    }, 300);
    setTimeout(function () {
        $("#navbar-socials").css("opacity", "0");
    }, 500);
    for (let i = 0; i < 6; i++) {
        setTimeout(function () {
            $(".overlay-content > .navbar-item:nth-last-child(" + i + ")").css({
                opacity: "0",
                top: "10px",
            });
        }, 200 * i + 500);
    }
    setTimeout(function () {
        $("#navbar-brand").css("opacity", "0");
    }, 1800);
    setTimeout(function () {
        $(".overlay").css("right", "-100vw");
    }, 2000);
}
