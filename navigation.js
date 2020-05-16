function showHome() {
    var homeDiv = document.getElementById("home");
    var aboutDiv = document.getElementById("about");
    var imagesDiv = document.getElementById("images");
    homeDiv.style.display = "inline-block";
    aboutDiv.style.display = "none";
    imagesDiv.style.display = "none";
}
function showAbout() {
    var homeDiv = document.getElementById("home");
    var aboutDiv = document.getElementById("about");
    homeDiv.style.display = "none";
    aboutDiv.style.display = "inline-block";
}
function showImages() {
    var homeDiv = document.getElementById("home");
    var imagesDiv = document.getElementById("images");
    homeDiv.style.display = "none";
    imagesDiv.style.display = "inline-block";
}