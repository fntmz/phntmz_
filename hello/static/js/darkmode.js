function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    // changes the website theme to dark at 6pm and back at 6am
    if (currentHour >= 18 || currentHour <= 6) {
        $("body").attr("data-theme", "dark_theme");
    }
    else {
        $("body").attr("data-theme", "light_theme");
    };

    // remove the gallery at any time besides midnight
    if (currentHour != 0) {
        $("#midnight-gallery").remove();
    }

    if (window.location.href.indexOf("gallery") > -1) {
        if (currentHour != 0) {
            $("body").attr("data-theme", "dark_theme");
            $("#menu-button").css("top", "-10px");
            $("#gallery-body").remove();
        }
        else {
            $("#gallery-cover").remove();
        };
    };
}

window.onload = setThemePreference;