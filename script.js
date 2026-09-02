```javascript
// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
```
