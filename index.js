const imgs = ["bob.png", "among.png", "duolingo.jpg", "rob.png"];
function changImgSource() {
  var random = Math.floor(Math.random() * imgs.length);
  var randomimgsrc = imgs[random];

  var image = document.getElementById("img");

  image.src = randomimgsrc;
  window.location.href = `https://doananhquan.github.io/randomimg/imgs/${randomimgsrc}`;
}
window.onload = changImgSource;
