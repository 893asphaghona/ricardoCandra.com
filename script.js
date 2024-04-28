// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navbarNav.classList.toggle("active");
  });
});

// untuk mengirim pesan lansung ke wa di form contact me
function sendMessageToWhatsapp() {
  const urlToWhatsapp = `https://wa.me/6283151727739?text=Hello, nama saya ${nama.value}, ${pesan.value}`;

  window.open(urlToWhatsapp, "_blank");
}

// Function untuk navbar active
