var currentHour = new Date().getHours();
$(window).on("load", function () {
    if (localStorage.getItem("lowwhite") == "true") {
        if (!(currentHour >= 18 || currentHour <= 6)) {
            document.body.style.setProperty("--background-color", "whitesmoke");
        }
    }
});
