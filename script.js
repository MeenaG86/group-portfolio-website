//Toggle Menu
const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("toggleContent");

toggleBtn.addEventListener("click", function () {
  content.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

//email
const emailText = document.getElementById("emailText");

emailText.addEventListener("click", function () {
  window.location.href = "mailto:meeash@2021@gmail.com";
});

//phone
const phoneText = document.getElementById("phoneText");

phoneText.addEventListener("click", function () {
  window.location.href = "tel:+919876543210";
});

//location
const locationText = document.getElementById("locationText");
const mapContainer = document.getElementById("mapContainer");

locationText.addEventListener("click", function () {
  if (mapContainer.style.display === "none") {
    mapContainer.style.display = "block";
  } else {
    mapContainer.style.display = "none";
  }
});

//social icons
//facebook
const facebook = document.getElementById("faceIcon");

facebook.addEventListener("click", function () {
  window.open("https://www.facebook.com/", "_blank");
});
//twitter
const twitter = document.getElementById("twitterIcon");

twitter.addEventListener("click", function () {
  window.open("https://www.twitter.com/", "_blank");
});
//instagram
const insta = document.getElementById("instaIcon");

insta.addEventListener("click", function () {
  window.open("https://www.instagram.com/", "_blank");
});

//github
const github=document.getElementById("gitIcon");
github.addEventListener("click",function(){
  window.open("https://www.github.com/MeenaG86", "_blank");
});

//linkedin

const linkedin=document.getElementById("linkIcon");
linkedin.addEventListener("click",function(){
  window.open("https://www.linkedin.com/in/meena-subash-55a151222/", "_blank");
});