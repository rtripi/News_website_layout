const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.getElementById("nav-bar");

btnHam.addEventListener("click", () => {
  if (btnHam.classList !== "") {
    btnHam.style.display = "none";
    btnTimes.style.display = "block";
    navBar.classList.add("show-nav");
  }
});

btnTimes.addEventListener("click", () => {
  if (btnHam.classList !== "") {
    btnTimes.style.display = "none";
    btnHam.style.display = "block";
    navBar.classList.remove("show-nav");
  }
});
