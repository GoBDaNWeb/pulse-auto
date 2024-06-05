export const doubleRange = () => {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const doubleRange = document.querySelector(".double-range");

  if (doubleRange) {
    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let minGap = 0;
    let sliderTrack = document.querySelector(".slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;
    const fromInput = document.querySelector("#from-input");
    const toInput = document.querySelector("#to-input");
    sliderOne.addEventListener("input", (e) => {
      slideOne();
      fromInput.value = formatNumber(e.target.value);
    });
    sliderTwo.addEventListener("input", (e) => {
      slideTwo();
      toInput.value = formatNumber(e.target.value);
    });
    fromInput.addEventListener("input", (e) => {
      sliderOne.value = e.target.value;
      fromInput.value = formatNumber(e.target.value);
      slideOne();
    });
    toInput.addEventListener("input", (e) => {
      sliderTwo.value = e.target.value;
      toInput.value = formatNumber(e.target.value);
      slideTwo();
    });

    function slideOne() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      fillColor();
    }
    function slideTwo() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      fillColor();
    }
    function fillColor() {
      const percent1 = (sliderOne.value / Number(sliderMaxValue)) * 100;
      const percent2 = (sliderTwo.value / Number(sliderMaxValue)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3964FF ${percent1}% , #3964FF ${percent2}%, #dadae5 ${percent2}%)`;
    }
    slideOne();
    slideTwo();
  }
};
