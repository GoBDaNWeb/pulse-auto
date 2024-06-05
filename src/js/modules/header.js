export const header = () => {
  const header = document.querySelector(".header");
  const links = header.querySelectorAll(".link");
  links.forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.classList.add("select");
    } else {
      link.classList.remove("select");
    }
  });
};
