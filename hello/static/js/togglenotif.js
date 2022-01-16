function togglenotif() {
    $('#gallery-url, #gallery-notif-description').css("transform", "translateX(-100%)");
    setTimeout(function () {
        $("#gallery-notif > *:first-child").css("height", "0");
        $("#gallery-notif").fadeOut(1000)
    }, 500)
}