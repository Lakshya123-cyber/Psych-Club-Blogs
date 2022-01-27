const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".nav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Navigation Fix
function toggleMenu() {
  menuToggle.classList.remove("active");
  navigation.classList.remove("active");
}

// THIS IS FOR LOADER PAGE
setTimeout(function () {
  $(".center").fadeToggle();
}, 700);
