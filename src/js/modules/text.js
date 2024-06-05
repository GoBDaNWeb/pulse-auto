export const text = () => {
  const eqInfo = document.querySelector(".equipment-info");
  if (eqInfo) {
    const text = eqInfo.querySelector(".text");
    const textP = text.querySelector("p");
    const decriptionBtn = text.querySelector(".decription-btn");
    if (window.document.body.offsetWidth < 767) {
      const fullText = textP.innerText;
      textP.innerText = textP.innerText.substring(0, 200) + "...";
      decriptionBtn.addEventListener("click", () => {
        if (decriptionBtn.className.includes("active")) {
          decriptionBtn.classList.remove("active");
          textP.innerText = textP.innerText.substring(0, 200) + "...";
          decriptionBtn.querySelector("span").innerText = "Развернуть";
        } else {
          decriptionBtn.classList.add("active");
          textP.innerText = fullText;
          decriptionBtn.querySelector("span").innerText = "Свернуть";
        }
      });
    }
  }
};
