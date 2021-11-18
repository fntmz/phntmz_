function setThemePreference() {
  var d = new Date();
  var currentHour = d.getHours();

  // remove the gallery at any time besides midnight
  if (currentHour == 0) {
    document.getElementById("gallery-cover").remove();
  }
}

window.onload = setThemePreference;