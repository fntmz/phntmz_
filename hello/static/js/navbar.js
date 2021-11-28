function openNav() {
  $(".overlay").css("right", "0");
  setTimeout(
    function () {
      $("#navbar-brand").css("opacity", "1")
    }, 500
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
      $(".closebtn").css({ "opacity": "1", "visibility": "visible" })
    }, 2000
  )
}

function closeNav() {
  $(".closebtn").css("opacity", "0")

  setTimeout(
    function () {
      $(".closebtn").css("visibility", "hidden")
    }, 300
  )
  setTimeout(
    function () {
      $("#navbar-socials").css("opacity", "0")
    }, 500
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
      $("#navbar-brand").css("opacity", "0")
    }, 1800
  )
  setTimeout(
    function () {
      $(".overlay").css("right", "-100vw");
    }, 2000
  )

}