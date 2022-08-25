let editionSlider = new Swiper(".edition-right-768-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".edition-swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".edition-swiper-btn-next",
    prevEl: ".edition-swiper-btn-prev"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    998: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    1440: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 20
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});
