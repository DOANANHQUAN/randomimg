// const imgs = ["bob.png", "among.png", "duolingo.jpg", "rob.png"];
// function changImgSource() {
//   var random = Math.floor(Math.random() * imgs.length);
//   var randomimgsrc = imgs[random];

//   var image = document.getElementById("img");

//   image.src = randomimgsrc;
//   window.location.href = `https://doananhquan.github.io/randomimg/imgs/${randomimgsrc}`;
// }
// window.onload = changImgSource;
document.addEventListener("DOMContentLoaded", function () {
  const imgs = [
    "./imgs/bob.png",
    "./imgs/among.png",
    "./imgs/duolingo.jpg",
    "./imgs/rob.png",
  ];
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function setRandomImage() {
    const randomIndex = getRandomIndex(imgs);
    const randomImageURL = imgs[randomIndex];
    const randomImageElement = document.getElementById("img");
    randomImageElement.src = randomImageURL;

    // const newURL = window.location.origin + "/" + randomImageURL;
    const newURL = `https://doananhquan.github.io/randomimg/${randomImageURL}`;
    window.location.href = newURL;
  }

  setRandomImage();

  document.getElementById("img").addEventListener("click", setRandomImage);
});
