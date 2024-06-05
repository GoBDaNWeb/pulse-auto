export const modal = () => {
  const menuWrapper = document.querySelector(".menuWrapper");

  const modalCallBtns = document.querySelectorAll(".call-btn");
  const modalCall = document.querySelector(".modal-call");
  const modalCallClose = modalCall.querySelector(".close-modal");
  const modalCallContent = modalCall.querySelector(".modal-content");

  if (modalCallBtns) {
    modalCallContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    modalCall.addEventListener("click", () => {
      modalCall.classList.remove("active");
      document.body.removeAttribute("style");
    });
    modalCallClose.addEventListener("click", () => {
      modalCall.classList.remove("active");
      document.body.removeAttribute("style");
    });

    modalCallBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalCall.classList.add("active");
        menuWrapper.classList.remove("active");
        document.body.style.overflow = "hidden";
      });
    });
  }

  const modalTradeBtns = document.querySelectorAll(".estimationBtn");
  const modalTrade = document.querySelector(".modal-trade");
  const modalTradeClose = modalTrade.querySelector(".close-modal");
  const modalTradeContent = modalTrade.querySelector(".modal-content");

  if (modalTradeBtns) {
    modalTradeContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    modalTradeClose.addEventListener("click", () => {
      modalTrade.classList.remove("active");
      document.body.removeAttribute("style");
    });
    modalTrade.addEventListener("click", () => {
      modalTrade.classList.remove("active");
      document.body.removeAttribute("style");
    });

    modalTradeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalTrade.classList.add("active");
        menuWrapper.classList.remove("active");
        document.body.style.overflow = "hidden";
      });
    });
  }

  const successModal = document.querySelector(".modal-success");
  const successModalContent = successModal.querySelector(".modal-content");
  const successCloseBtn = successModal.querySelector(".close-modal");

  successModalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  successModal.addEventListener("click", () => {
    successModal.classList.remove("active");
    document.body.removeAttribute("style");
  });
  successCloseBtn.addEventListener("click", () => {
    successModal.classList.remove("active");
    document.body.removeAttribute("style");
  });


  const modalDeliveryBtns = document.querySelectorAll(".delivery-btn");
  const modalDelivery = document.querySelector(".modal-delivery");
  const modalDeliveryClose = modalDelivery.querySelector(".close-modal");
  const modalDeliveryContent = modalDelivery.querySelector(".modal-content");

  if (modalDeliveryBtns) {
    modalDeliveryContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    modalDelivery.addEventListener("click", () => {
      modalDelivery.classList.remove("active");
      document.body.removeAttribute("style");
    });
    modalDeliveryClose.addEventListener("click", () => {
      modalDelivery.classList.remove("active");
      document.body.removeAttribute("style");
    });

    modalDeliveryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalDelivery.classList.add("active");
        menuWrapper.classList.remove("active");
        document.body.style.overflow = "hidden";
      });
    });
  }
};
