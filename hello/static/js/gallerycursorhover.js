$(".btn, #menu-button, a, #gallery-cover > p").hover(
  function () {
    $("#gallery-cursor").addClass("cursor-hover")
  },
  function () {
    $("#gallery-cursor").removeClass("cursor-hover")
  }
)