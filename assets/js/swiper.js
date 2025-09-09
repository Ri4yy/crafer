const catalogSwiper = new Swiper('.catalog-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 2,
        },
        376: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row',
            }
        },
        601: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 4
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.catalog-swiper__btn--next',
      prevEl: '.catalog-swiper__btn--prev',
    },
});

const catalogSectionsSwiper = new Swiper('.catalog-sections-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 2,
        },
        601: {
            allowTouchMove: true,
            spaceBetween: 14,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            spaceBetween: 20,
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
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 6,
            slidesPerView: 1
        },
        366: {
            allowTouchMove: true,
            spaceBetween: 6,
            slidesPerView: 2
        },
        420: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row',
            }
        },
        768: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            spaceBetween: 20,
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
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            spaceBetween: 6,
            slidesPerView: 1
        },
        420: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 2,
        },
        768: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            spaceBetween: 20,
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

const swiperCertificate = new Swiper('.swiper-certificate', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 6,
            slidesPerView: 1,
        },
        380: {
            allowTouchMove: true,
            spaceBetween: 8,
            slidesPerView: 2,
        },
        600: {
            allowTouchMove: true,
            spaceBetween: 12,
            slidesPerView: 3,
        },
        769: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 3,
        },
        1024: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 4,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-certificate-btn--next',
      prevEl: '.swiper-certificate-btn--prev',
    },
});


var swiper2 = new Swiper(".swiper-detail-product-small", {
freeMode: true,
watchSlidesProgress: true,


breakpoints: {
    0: {
        allowTouchMove: true,
        spaceBetween: 6,
        slidesPerView: 4
    },
    420: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 4,
    },
    600: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 6
    },
}
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

