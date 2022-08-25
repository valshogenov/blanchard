let partnersSlider = new Swiper(".partners-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
/*   pagination: {
    el: ".edition-swiper-pagination",
    type: "fraction"
  }, */
  navigation: {
    nextEl: ".partners-swiper-btn-next",
    prevEl: ".partners-swiper-btn-prev"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: -50
    },
    998: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1440: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 30
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
