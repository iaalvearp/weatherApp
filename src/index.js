const toggleMenu = document.getElementById("toggleMenu");
const navMenu = document.getElementById("navMenu");
const navLogo = document.getElementById("navLogo");
const navBar = document.getElementById("navBar");
const headerContainer = document.getElementById("headerContainer");
const heroPic = document.getElementById("heroPic");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.forEach((classT) => {
    if (classT === "-translate-y-[10rem]") {
      navMenu.classList.replace("-translate-y-[10rem]", "translate-y-20");
      navBar.classList.replace("h-12", "h-auto");
      headerContainer.classList.replace("blur-0", "blur");
      headerContainer.classList.replace("opacity-100", "opacity-50");
    }
    if (classT === "translate-y-20") {
      navMenu.classList.replace("translate-y-20", "-translate-y-[10rem]");
      navBar.classList.replace("h-auto", "h-12");
      headerContainer.classList.replace("blur", "blur-0");
      headerContainer.classList.replace("opacity-50", "opacity-100");
    }
  });
});
