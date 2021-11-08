var title = document.title;
var blurMessage = "// 𝐩𝐡𝐧𝐭𝐦𝐳 : : . .";

window.addEventListener("blur", function () {
    document.title = blurMessage;
});

window.addEventListener("focus", function () {
    document.title = title;
});