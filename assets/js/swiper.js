const catalogSwiper = new Swiper('.catalog-swiper', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.catalog-swiper__btn--next',
      prevEl: '.catalog-swiper__btn--prev',
    },
});
const newProductsSwiper = new Swiper('.new-products-swiper', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.new-products-swiper__btn--next',
      prevEl: '.new-products-swiper__btn--prev',
    },
});
const similarProductsSwiper = new Swiper('.similar-products-swiper', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.similar-products-swiper__btn--next',
      prevEl: '.similar-products-swiper__btn--prev',
    },
});

const heroSwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
    effect: "fade",
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero-swiper__btn--next',
      prevEl: '.hero-swiper__btn--prev',
    }
});


  var swiper2 = new Swiper(".swiper-detail-product-small", {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper(".swiper-detail-product", {
    navigation: {
      nextEl: ".swiper-detail-product__btn--next",
      prevEl: ".swiper-detail-product__btn--prev",
    },
    thumbs: {
      swiper: swiper2,
    },
  });