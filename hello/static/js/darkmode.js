function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    console.log("Current time in hours is", currentHour)

    // changes the website theme to dark at 6pm and back at 6am
    if (currentHour >= 18 || currentHour <= 6) {
        document.body.setAttribute("data-theme", "light_theme")
    }
    else {
        document.body.setAttribute("data-theme", "dark_theme")
    };

    // remove the gallery at any time besides midnight
    if (currentHour != 0) {
        document.getElementById("midnight-gallery").remove();
    }
}

window.onload = setThemePreference;