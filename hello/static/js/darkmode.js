function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    if (currentHour >= 18 || currentHour <= 6) {
        $("body").attr("data-theme", "dark_theme");
        $(window).on("load", function () {
            console.log(
                "%cgood evening, amazing person. 104 103 32 60 51",
                "color: rgb(160, 160, 255); font-size: 16px"
            );
        });
    } else {
        $("body").attr("data-theme", "light_theme");
        $(window).on("load", function () {
            console.log(
                "%cgood morning, amazing person. 104 103 32 60 51",
                "color: rgb(252, 87, 96); font-size: 16px"
            );
        });
    }

    if (currentHour != 0) {
        $("#midnight-gallery").remove();
    }

    if (window.location.href.indexOf("gallery") > -1) {
        if (currentHour != 0) {
            $("body").attr("data-theme", "dark_theme");
            $("#menu-button").css("top", "-10px");
            $("#gallery-body").remove();
        } else {
            $("#gallery-cover").remove();
        }
    }
}

$(window).on("load", setThemePreference());
