const maxHeight = $(window).height() * 0.5;
$(window).on("scroll", function () {
    if (document.documentElement.scrollTop > maxHeight) {
        $("#menu-button").css("transform", "translateY(-10px)");
    } else {
        $("#menu-button").css("transform", "translateY(-100px)");
    }
});
