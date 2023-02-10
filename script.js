const menuBar = document.querySelector(".box-menubar");
const menuNav = document.querySelector(".box2");

menuBar.addEventListener("click", function() {
    menuNav.classList.toggle("menu-active");
})