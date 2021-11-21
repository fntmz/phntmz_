function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    // changes the website theme to dark at 6pm and back at 6am
    if (currentHour >= 18 || currentHour <= 6) {
        document.body.setAttribute("data-theme", "dark_theme")
    }
    else {
        document.body.setAttribute("data-theme", "light_theme")
    };

    // remove the gallery at any time besides midnight
    if (currentHour != 0) {
        document.getElementById("midnight-gallery").remove();
    }

    if (window.location.href.indexOf("gallery") > -1) {
        if (currentHour != 0) {
            document.body.setAttribute("data-theme", "dark_theme");
            document.getElementById("menu-button").style.top = "-10px";
        }
        else {
            document.getElementById("gallery-cover").style.display = "none";
        };
    };
}

window.onload = setThemePreference;