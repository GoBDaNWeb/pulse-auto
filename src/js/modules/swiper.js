import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  FreeMode,
  Mousewheel,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

export const swiper = () => {
  const swiper2 = new Swiper(".hero-thumbs", {
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel, Thumbs, Navigation],
    slidesPerView: 10,
    spaceBetween: 50,
    navigation: {
      prevEl: ".hero-main-prev",
      nextEl: ".hero-main-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 5.3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6.3,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 8.3,
        spaceBetween: 50,
        mousewheel: true,
      },
      1400: {
        slidesPerView: 10,
        mousewheel: false,
      },
    },
  });

  const swiper1 = new Swiper(".swiper-hero-main", {
    thumbs: {
      swiper: swiper2,
    },
    modules: [Thumbs],
    spaceBetween: 10,
    allowTouchMove: false,
    grabCursor: false,
  });

  // const swiper4 = new Swiper(".thumbsCarsSwiper", {
  //   spaceBetween: 10,
  //   slidesPerView: 10,
  //   modules: [Thumbs],
  // });
  // let thumb
  document.querySelectorAll(".brand-container").forEach((el, index) => {
    if (!el) {
      return;
    }
    const thumb = new Swiper(el.querySelector(".thumbsCarsSwiper"), {
      spaceBetween: 10,
      slidesPerView: 4.3,
      modules: [Thumbs, Navigation],
      breakpoints: {
        0: {
          slidesPerView: 2.2,
        },
        500: {
          slidesPerView: 4.3,
        },
      },
      navigation: {
        prevEl: el.parentElement.querySelector(".brand-prev"),
        nextEl: el.parentElement.querySelector(".brand-next"),
      },
    });
    const swiper = new Swiper(el.querySelector(".swiper-brands"), {
      thumbs: {
        swiper: thumb,
      },
      modules: [Thumbs],
      spaceBetween: 10,
    });
  });

  const swiper5 = new Swiper(".autoSwiper", {
    spaceBetween: 30,
    slidesPerView: 3.4,
    modules: [Navigation],
    navigation: {
      prevEl: ".stock-prev",
      nextEl: ".stock-next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      767: {
        slidesPerView: 2.4,
      },
      1280: { slidesPerView: 3.4 },
    },
  });

  const swiper6 = new Swiper(".craveThumbs", {
    slidesPerView: 6.2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 4.8,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });
  const swiper7 = new Swiper(".crave-swiper", {
    thumbs: {
      swiper: swiper6,
    },
    modules: [Thumbs],
    allowTouchMove: false,
    grabCursor: false,
  });
  const swiper8 = new Swiper(".main-comparions-swiper", {
    spaceBetween: 30,
    slidesPerView: 3.4,
    modules: [Navigation, Controller],
    navigation: {
      prevEl: ".comparison-main-prev",
      nextEl: ".comparison-main-next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      767: {
        slidesPerView: 2.4,
      },
      1280: { slidesPerView: 3.4 },
    },
  });
  const swiper9 = new Swiper(".comparison-second-swiper", {
    spaceBetween: 30,
    slidesPerView: 3.4,
    modules: [Navigation, Controller],
    navigation: {
      prevEl: ".comparison-second-prev",
      nextEl: ".comparison-second-next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      767: {
        slidesPerView: 2.4,
      },
      1280: { slidesPerView: 3.4 },
    },
  });

  swiper8.controller.control = swiper9;
  swiper9.controller.control = swiper8;

  const swiper10 = new Swiper(".brand-hero-thumbs", {
    slidesPerView: 6.2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 4.8,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });

  const swiper11 = new Swiper(".brand-hero-swiper", {
    thumbs: {
      swiper: swiper10,
    },
    modules: [Thumbs, Pagination, Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      //@ts-ignore
      el: ".brand-hero-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    allowTouchMove: false,
    grabCursor: false,
  });
  const swiper12 = new Swiper(".brand-about-swiper", {
    slidesPerView: 1.15,
    modules: [Navigation],
    spaceBetween: 72,
    navigation: {
      //@ts-ignore
      prevEl: ".brand-about-prev",
      //@ts-ignore
      nextEl: ".brand-about-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 72,
      },
    },
  });

  const swiper13 = new Swiper(".model-hero-thumbs", {
    slidesPerView: 6.2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 4.8,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });

  const swiper14 = new Swiper(".model-hero-swiper", {
    thumbs: {
      swiper: swiper13,
    },
    modules: [Thumbs, Pagination, Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      //@ts-ignore
      el: ".model-hero-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    allowTouchMove: false,
    grabCursor: false,
  });

  const swiper15 = new Swiper(".exterior-main-thumbs", {
    modules: [Thumbs],
    slidesPerView: 6,
    spaceBetween: 10,
  });
  const swiper16 = new Swiper(".exterior-main-swiper", {
    thumbs: {
      swiper: swiper15,
    },
    effect: "fade",
    modules: [Thumbs, Controller, EffectFade],
    allowTouchMove: false,
    grabCursor: false,
  });
  const swiper32 = new Swiper(".exterior-main-swiper-text", {
    slidesPerView: 1,
    effect: "fade",
    modules: [Autoplay, Controller, EffectFade],
    allowTouchMove: false,
    grabCursor: false,
  });

  swiper16.controller.control = swiper32;
  swiper32.controller.control = swiper16;
  const swiper30 = new Swiper(".swiper-exterior-thumbs", {
    slidesPerView: 6.2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    // loop: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 3.4,
      },
      1200: {
        slidesPerView: 4.4,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });
  const swiper31 = new Swiper(".swiper-exterior-text", {
    slidesPerView: 1,
    effect: "fade",
    modules: [Autoplay, Controller, EffectFade],
    allowTouchMove: false,
    grabCursor: false,
  });
  const swiper17 = new Swiper(".swiper-exterior", {
    thumbs: {
      swiper: swiper30,
    },
    allowTouchMove: false,
    grabCursor: false,
    modules: [Thumbs, Pagination, Autoplay, Controller],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      //@ts-ignore
      el: ".exterior-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        grabCursor: true,
      },
      1024: {
        allowTouchMove: false,
        grabCursor: false,
      },
    },
    on: {
      init: function (e) {
        const pagination = e.el.querySelector(".pagination");
        const video = e.el.querySelectorAll("video");
        if (video.length) {
          e.autoplay.stop();
          pagination.classList.add("hidden");
        }

        let observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!video.length > 0) {
                if (entry.isIntersecting) {
                  e.autoplay.start();
                  pagination.classList.remove("hidden");
                } else {
                  e.autoplay.stop();
                  pagination.classList.add("hidden");
                }
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(e.el);
        if (swiper31.slides.length === 0) {
          e.el.parentElement.style.paddingBottom = "70px";
        }
      },
    },
  });

  swiper17.controller.control = swiper31;
  swiper31.controller.control = swiper17;
  const swiper18 = new Swiper(".model-interior-thumbs", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    // loop: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 3.4,
      },
      1200: {
        slidesPerView: 4.4,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });
  const swiper33 = new Swiper(".model-interior-swiper-text", {
    slidesPerView: 1,
    effect: "fade",
    modules: [Autoplay, Controller, EffectFade],
    allowTouchMove: false,
    grabCursor: false,
  });
  const swiper19 = new Swiper(".model-interior-swiper", {
    thumbs: {
      swiper: swiper18,
    },
    allowTouchMove: false,
    grabCursor: false,
    modules: [Thumbs, Pagination, Autoplay, Controller],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      //@ts-ignore
      el: ".interior-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        grabCursor: true,
      },
      1024: {
        allowTouchMove: false,
        grabCursor: false,
      },
    },
    on: {
      init: function (e) {
        const pagination = e.el.querySelector(".pagination");
        const video = e.el.querySelectorAll("video");
        if (video.length > 0) {
          e.autoplay.stop();
          pagination.classList.add("hidden");
        }
        let observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!video.length > 0) {
                if (entry.isIntersecting) {
                  e.autoplay.start();
                  pagination.classList.remove("hidden");
                } else {
                  e.autoplay.stop();
                  pagination.classList.add("hidden");
                }
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(e.el);
        if (swiper33.slides.length === 0) {
          e.el.parentElement.style.paddingBottom = "70px";
        }
      },
    },
  });

  swiper19.controller.control = swiper33;
  swiper33.controller.control = swiper19;

  const swiper20 = new Swiper(".model-multimedia-swiper", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    modules: [Navigation],
    navigation: {
      prevEl: ".multimedia-prev",
      nextEl: ".multimedia-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.2,
      },
    },
  });
  const swiper21 = new Swiper(".model-about-swiper", {
    slidesPerView: 1.15,
    modules: [Navigation],
    spaceBetween: 72,
    navigation: {
      prevEl: ".model-about-prev",
      nextEl: ".model-about-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 72,
      },
    },
  });

  const swiper22 = new Swiper(".complectates-swiper", {
    spaceBetween: 30,
    slidesPerView: 3.4,
    modules: [Navigation],
    navigation: {
      prevEl: ".stock-prev",
      nextEl: ".stock-next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      767: {
        slidesPerView: 2.4,
      },
      1280: { slidesPerView: 3.4 },
    },
  });

  const swiper23 = new Swiper(".swiper-equipment-thumbs", {
    slidesPerView: 6.2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    // loop: true,
    modules: [FreeMode, Mousewheel, Thumbs, Navigation],
    navigation: {
      prevEl: ".eq-about-prev",
      nextEl: ".eq-about-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 3.4,
      },
      1200: {
        slidesPerView: 5.4,
      },
      1440: {
        slidesPerView: 7.2,
      },
      1600: {
        slidesPerView: 8.2,
      },
    },
  });
  const swiper24 = new Swiper(".swiper-equipment-about", {
    thumbs: {
      swiper: swiper23,
    },
    modules: [Thumbs],
    allowTouchMove: true,
    grabCursor: true,
    // breakpoints: {
    //   0: {
    //     allowTouchMove: true,
    //     grabCursor: true,
    //   },
    //   1024: {
    //     allowTouchMove: false,
    //     grabCursor: false,
    //   },
    // },
  });
  const swiper25 = new Swiper(".about-hero-thumbs", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel, Thumbs],
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      500: {
        slidesPerView: 4.3,
      },
      767: {
        slidesPerView: 6.2,
      },
      1024: {
        slidesPerView: 4.8,
      },
      1440: {
        slidesPerView: 6.2,
      },
    },
  });
  const swiper26 = new Swiper(".about-hero-swiper", {
    thumbs: {
      swiper: swiper25,
    },
    modules: [Thumbs],
    allowTouchMove: false,
    grabCursor: false,
  });

  const swiper27 = new Swiper(".about-swiper", {
    slidesPerView: 1.15,
    modules: [Navigation],
    spaceBetween: 72,
    navigation: {
      //@ts-ignore
      prevEl: ".about-swiper-prev",
      //@ts-ignore
      nextEl: ".about-swiper-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 72,
      },
    },
  });

  const swiper28 = new Swiper(".about-team-swiper", {
    spaceBetween: 30,
    slidesPerView: 3.4,
    modules: [Navigation],
    navigation: {
      prevEl: ".about-team-prev",
      nextEl: ".about-team-next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      767: {
        slidesPerView: 2.4,
      },
      1280: { slidesPerView: 3.4 },
    },
  });

  const swiper29 = new Swiper(".catalog-swiper", {
    freeMode: true,
    mousewheel: true,
    modules: [FreeMode, Mousewheel],
    slidesPerView: 10,
    spaceBetween: 50,
    breakpoints: {
      0: {
        slidesPerView: 3.3,
      },
      767: {
        slidesPerView: 5.3,
      },
      1024: {
        slidesPerView: 6.3,
      },
      1280: {
        slidesPerView: 8.3,
      },
      1400: {
        slidesPerView: 10,
      },
    },
  });
  const swiper34 = new Swiper(".equipment-second-swiper", {
    slidesPerView: 7,
    spaceBetween: 50,
    modules: [Navigation, Controller],
    navigation: {
      prevEl: ".eq-second-prev",
      nextEl: ".eq-second-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  });

  let eqSecondSwipers = [];
  const equipmentSwiperWrapper =
    document.querySelectorAll(".accordion-content");
  equipmentSwiperWrapper.forEach((el) => {
    const swipers = el.querySelectorAll(".equipment-second-swiper-mini");
    swipers.forEach((swiper) => {
      const objSwiper = new Swiper(swiper, {
        slidesPerView: 7,
        spaceBetween: 50,
        modules: [Controller],
        allowTouchMove: false,
        grabCursor: false,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1400: {
            slidesPerView: 7,
          },
        },
      });
      eqSecondSwipers.push(objSwiper);
    });
  });

  swiper34.controller.control = [...eqSecondSwipers];

  const swiper34Wrapper = document.querySelector(
    ".equipment-second-swiper-wrapper"
  );
  const accordionList = document.querySelector(".accordionList");
  if (swiper34Wrapper) {
    const fix = swiper34Wrapper.offsetTop - swiper34Wrapper.offsetHeight / 2;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > fix) {
        swiper34Wrapper.classList.add("active");
        accordionList.style.marginTop = `${
          swiper34Wrapper.offsetHeight + 110
        }px`;
      } else {
        swiper34Wrapper.classList.remove("active");
        accordionList.style.marginTop = `30px`;
      }
    });
  }

  const comparisonSecondSwiper = document.querySelector(
    ".comparison-second-swiper-wrapper"
  );
  if (comparisonSecondSwiper) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        comparisonSecondSwiper.classList.add("active");
      } else {
        comparisonSecondSwiper.classList.remove("active");
      }
    });
  }

  const swiper35 = new Swiper(".test-drive-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
      prevEl: ".test-drive-prev",
      nextEl: ".test-drive-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.3,
      },
      767: {
        slidesPerView: 3.3,
      },
      1024: {
        slidesPerView: 4.3,
      },
    },
  });

  const autoSwipers = document.querySelectorAll(".carSwiper");

  autoSwipers.forEach((swiper) => {
    swiper.addEventListener("mouseenter", () => {
      swiper.classList.add("active");
    });
  });

  const equipmentAboutSwiper = document.querySelector(
    ".equipment-about-swiper"
  );
  if (equipmentAboutSwiper) {
    const hiddenContent = document.querySelector(".hiddenContent");
    const mainContent = document.querySelector(".mainContent");
    if (hiddenContent && mainContent) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              hiddenContent.classList.remove("active");
              mainContent.classList.remove("active");
              mainContent.style.paddingTop = `0px`;
            } else {
              hiddenContent.classList.add("active");
              mainContent.style.paddingTop = `${
                hiddenContent.offsetHeight + 20
              }px`;
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(equipmentAboutSwiper);
    }
  }
};
