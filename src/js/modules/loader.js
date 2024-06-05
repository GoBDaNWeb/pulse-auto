import { gsap } from "gsap";
export const loader = () => {
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isLoading")) {
      document.querySelector(".loader").remove();
      document.querySelector("body").classList.add("loaded");
      document.querySelector("body").classList.remove("loading");
      return;
    }
    if (window.innerWidth < 992) document.querySelector(".loader").remove();
    if (window.innerWidth > 992) {
      document.querySelector("body").classList.add("loading");

      gsap.to(".loader_flex", {
        scale: "1",
        duration: 2,
        delay: 2,
        // ease: 'circ'
      });
    }
    if (window.innerWidth > 992) {
      gsap
        .to(".loader_flex", {
          opacity: "0",
          duration: 1,
          delay: 4,
          // ease: 'circ'
        })
        .eventCallback("onStart", () => {
          document.querySelector("body").classList.add("loaded");
          document.querySelector("body").classList.remove("loading");
          sessionStorage.setItem("isLoading", true);
        });
    }
  });
};
