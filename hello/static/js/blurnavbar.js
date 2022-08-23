if (localStorage.getItem("blur") == "true") {
    $(".overlay").css("backdrop-filter", "blur(10px)");
    $(".overlay").css("background", "transparent");
    $("#settings-wrapper").css("background", "transparent");
}
