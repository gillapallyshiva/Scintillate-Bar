document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  if (!hamburger || !mainNav) return;

  const setMenuState = (isOpen) => {
    mainNav.classList.toggle("active", isOpen);
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !mainNav.classList.contains("active");
    setMenuState(isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      setMenuState(false);
    }
  });
});
