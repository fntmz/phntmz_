var s1 = document.getElementById("section-1");
var s2 = document.getElementById("section-2");
var s3 = document.getElementById("section-3");
var s4 = document.getElementById("section-4");
var sd = document.getElementById("gallery-scrolldown");

function toggleSection1() {
  sd.style.display = "initial";
  s1.style.display = "initial";
  s2.style.display = "none";
  s3.style.display = "none";
  s4.style.display = "none";
};

function toggleSection2() {
  sd.style.display = "initial";
  s1.style.display = "none";
  s2.style.display = "initial";
  s3.style.display = "none";
  s4.style.display = "none";
};

function toggleSection3() {
  sd.style.display = "initial";
  s1.style.display = "none";
  s2.style.display = "none";
  s3.style.display = "initial";
  s4.style.display = "none";
};

function toggleSection4() {
  sd.style.display = "initial";
  s1.style.display = "none";
  s2.style.display = "none";
  s3.style.display = "none";
  s4.style.display = "initial";
};