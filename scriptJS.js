document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {

    console.log('scroll');
    let windowScroll = document.scrollTo(),
      windowWidth = document.outerWidth(),
      contentHeight = document.querySelector(".content").outerHeight(),
      parallaxHeight = document.querySelector(".parallax").outerHeight(),
      procScrollContent = (windowScroll / contentHeight) * 100,
      procScrollPrallax = (windowScroll / parallaxHeight) * 100,
      opacity = 1 - (1 / 100) * procScrollPrallax;

    let zoom1 = 1 + (windowWidth / 10000) * procScrollPrallax;
    document.querySelector(".parallax__fog").style.transform.scale = zoom1;
    document.querySelector(".parallax__fog").style.opacity = opacity;

    let zoom2 = 1 + (windowWidth / 5000000) * procScrollContent;
    document.querySelector(
      ".parallax__montain_1"
    ).style.transform.scale = zoom2;

    let horizontal1 = (windowWidth / 2000) * procScrollPrallax,
      zoom3 = 1 + windowWidth * 0.000005 * procScrollPrallax;
    document.querySelector(
      ".parallax__montain_2"
    ).style.transform.translate3d = `${horizontal1}px,0,0`;
    document.querySelector(".parallax__montain_2").style.scale = zoom3;

    let horizontal2 = (windowWidth / 1500) * procScrollPrallax,
      zoom4 = 1 + windowWidth * 0.00001 * procScrollPrallax;
    document.querySelector(
      ".parallax__montain_3"
    ).style.transform.translate3d = `${horizontal2}px,0,0`;
    document.querySelector(".parallax__montain_3").style.scale = zoom4;
  });
});
