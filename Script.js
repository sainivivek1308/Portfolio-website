function togglemenu() {

    var menu = document.getElementById("menu");
    var about = document.getElementById("about");
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        about.style.top = "230px";

    } else {
        menu.style.display = "none";
        about.style.top = "0px";
    }
}