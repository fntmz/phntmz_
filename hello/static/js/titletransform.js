var title = document.title;
var blurMessage = "// 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 : : . .";

window.addEventListener("blur", function () {
    document.title = blurMessage;
});

window.addEventListener("focus", function () {
    document.title = title;
});