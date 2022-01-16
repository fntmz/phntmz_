function setThemePreference() {
    var d = new Date();
    var currentHour = 0;

    if (currentHour >= 18 || currentHour <= 6) {
        $("body").attr("data-theme", "dark_theme");
        $(window).on("load", function () {
            console.log(
                "%cgood evening. 104 103 32 60 51",
                "color: rgb(160, 160, 255); font-size: 16px"
            );
        });
    } else {
        $("body").attr("data-theme", "light_theme");
        $(window).on("load", function () {
            console.log(
                "%cgood morning. 104 103 32 60 51",
                "color: rgb(252, 87, 96); font-size: 16px"
            );
        });
    }

    if (currentHour != 0) {
        $("#gallery-notif").remove()
        $(".overlay-content > .navbar-item:last-child").remove();
    }

    if (window.location.href.indexOf("gallery") > -1) {
        $("#gallery-notif").remove()
        if (currentHour != 0) {
            $("body").attr("data-theme", "dark_theme");
            $("#menu-button").css("transform", "translateY(-10px)");
            $("#gallery-body").remove();
        } else {
            $("#gallery-cover").remove();
        }
    } else {
        $("#gallery-cover, #cursor-area").remove()
    }
}

$(window).on("load", setThemePreference());
