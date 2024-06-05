export const selector = () => {
  const modelSelectors = document.querySelectorAll(".model-selector");
  const brandSelectors = document.querySelectorAll(".brand-selector");
  const yearSelectors = document.querySelectorAll(".year-selector");

  modelSelectors.forEach((selector) => {
    const selectorContent = selector.querySelector(".model-selector-content");

    if (selector) {
      selector.addEventListener("click", (e) => {
        if (selector.className.includes("active")) {
          selector.classList.remove("active");
        } else {
          selector.classList.add("active");
        }
      });
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
    }

    selectorContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
  brandSelectors.forEach((selector) => {
    const selectorContent = selector.querySelector(".brand-selector-content");
    selector.addEventListener("click", (e) => {
      if (selector.className.includes("active")) {
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }
    });
    if (selector) {
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
    }

    selectorContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
  yearSelectors.forEach((selector) => {
    const selectorContent = selector.querySelector(".year-selector-content");

    if (selector) {
      selector.addEventListener("click", (e) => {
        if (selector.className.includes("active")) {
          selector.classList.remove("active");
        } else {
          selector.classList.add("active");
        }
      });
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
    }

    selectorContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
};
