$(".btn, #menu-button, a").hover(
  function () {
    $("#gallery-cursor").addClass("cursor-hover")
  },
  function () {
    $("#gallery-cursor").removeClass("cursor-hover")
  }
)