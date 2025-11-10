const getCurrentPath = (path) => {
  if (path === "/") return "home";
  if (path === "/pages/my-work") return "my work";
  if (path === "/pages/services") return "services";
  if (path === "/pages/classes") return "classes";
  if (path === "/pages/beauty-tips") return "beauty tips";
  if (path === "/pages/about") return "about";
  if (path === "/pages/contact") return "contact";
};

window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".footer-nav ul li a");
  navLinks.forEach((link) => {
    if (link.href.split("/")[4] === getCurrentPath(window.location.pathname)) {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "var(--bold-main-color)";
      link.style.textDecorationThickness = "0.5px";
      link.style.textUnderlineOffset = "2px";
    }
  });
});
