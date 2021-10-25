function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    console.log(currentHour)

    if (currentHour >= 18 || currentHour <= 6) {
        document.body.setAttribute("data-theme", "dark_theme")
    } else {
        document.body.setAttribute("data-theme", "light_theme")
    }
}

window.onload = setThemePreference;