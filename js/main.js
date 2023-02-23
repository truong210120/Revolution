
$('.services__content').owlCarousel({
    loop: true,
    margin: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.footer__text').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
const getElement = (selector) => {
    return document.querySelector(selector);
}
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-fade',
    removalDelay: 300,
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});
window.onscroll = () => { srollHeader() };

const srollHeader = () => {
    if (document.documentElement.scrollTop > 10) {
        getElement(".header").classList = "header active";
    } else {
        getElement(".header").classList = "header";
    }
    if (document.documentElement.scrollTop > 700) {
        getElement(".backToTop").classList = "backToTop active";
    } else {
        getElement(".backToTop").classList = "backToTop";
    }
}
getElement(".backToTop").addEventListener("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 600);
});

getElement(".header__navbar").addEventListener("click", () => {
    const headerMenu = getElement(".header__menu");
    if (headerMenu.classList == "header__menu hide") {
        headerMenu.classList = "header__menu show";
    } else {
        headerMenu.classList = "header__menu hide";
    }
    const headerLogo = getElement(".header__logo");
    if (headerLogo.classList == "header__logo hide") {
        headerLogo.classList = "header__logo show";
    } else {
        headerLogo.classList = "header__logo hide";
    }
    const headerNav = getElement(".header__navbar");
    if (headerNav.classList == "header__navbar hide") {
        headerNav.classList = "header__navbar show";
    } else {
        headerNav.classList = "header__navbar hide";
    }
})
