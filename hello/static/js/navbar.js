function openNav() {
  $("#myNav").css("right", "0");
  setTimeout(
    function () {
      $("#navbar-brand").css({ "opacity": "1", "left": "-3%" })
    }, 400
  )
  setTimeout(
    function () {
      $("#navbar-item-1").css({ "opacity": "1", "bottom": "0" })
    }, 700
  )
  setTimeout(
    function () {
      $("#navbar-item-2").css({ "opacity": "1", "bottom": "0" })
    }, 900
  )
  setTimeout(
    function () {
      $("#navbar-item-3").css({ "opacity": "1", "bottom": "0" })
    }, 1100
  )
  setTimeout(
    function () {
      $("#navbar-item-4").css({ "opacity": "1", "bottom": "0" })
    }, 1300
  )
  setTimeout(
    function () {
      $("#navbar-item-5").css({ "opacity": "1", "bottom": "0" })
    }, 1500
  )
  setTimeout(
    function () {
      $("#navbar-socials").css("opacity", "1")
    }, 1800
  )
}

function closeNav() {
  $("#myNav").css("right", "-100vw");
  setTimeout(
    function () {
      $("#navbar-item-1").css("bottom", "-10px")
      $("#navbar-item-2").css("bottom", "-10px")
      $("#navbar-item-3").css("bottom", "-10px")
      $("#navbar-item-4").css("bottom", "-10px")
      $("#navbar-brand").css("left", "-60px")
      $("#navbar-brand").css("opacity", "0")
      $(".navbar-item").css("opacity", "0")
      $("#navbar-socials").css("opacity", "0")
    }, 500
  )
}