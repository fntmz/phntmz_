$(".btn, #menu-button, a, #cover-text").hover(
    function () {
        $("#gallery-cursor").addClass("cursor-hover");
    },
    function () {
        $("#gallery-cursor").removeClass("cursor-hover");
    }
);
