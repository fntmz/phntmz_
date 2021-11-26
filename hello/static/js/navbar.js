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
  setTimeout(
    function () {
      $(".closebtn").css("top", "-10px")
      $(".closebtn").css("opacity", "1")
    }, 2000
  )
}

function closeNav() {
  $(".closebtn").css("opacity", "0")

  setTimeout(
    function () {
      $("#navbar-socials").css("opacity", "0")
    }, 400
  )
  setTimeout(
    function () {
      $("#navbar-item-5").css({ "opacity": "0", "bottom": "-10px" })
    }, 700
  )
  setTimeout(
    function () {
      $("#navbar-item-4").css({ "opacity": "0", "bottom": "-10px" })
    }, 900
  )
  setTimeout(
    function () {
      $("#navbar-item-3").css({ "opacity": "0", "bottom": "-10px" })
    }, 1100
  )
  setTimeout(
    function () {
      $("#navbar-item-2").css({ "opacity": "0", "bottom": "-10px" })
    }, 1300
  )
  setTimeout(
    function () {
      $("#navbar-item-1").css({ "opacity": "0", "bottom": "-10px" })
    }, 1500
  )
  setTimeout(
    function () {
      $("#navbar-brand").css({ "opacity": "0", "left": "0" })
    }, 1800
  )
  setTimeout(
    function () {
      $("#myNav").css("right", "-100vw");
      $(".closebtn").css("top", "100vh")
    }, 2000
  )

}