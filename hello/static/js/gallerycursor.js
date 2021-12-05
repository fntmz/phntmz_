const onMouseMove = (e) => {
    var rect = $("#cursor-area")[0].getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    $("#gallery-cursor").css({ left: x + "px", top: y + "px", opacity: ".8" });
};

document.addEventListener("mousemove", onMouseMove);
