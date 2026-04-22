function showmenu() {
    var btn = document.getElementById("nav-button");
    var menu = document.getElementsByClassName("nav-menu");
    if (menu[0].classList.contains("active")) {
        btn.innerText = "≡"
    } else {
        btn.innerText = "≡"
    }
    menu[0].classList.toggle("active")
}