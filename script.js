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
  window.location.href = "mailto:meeash2021@gmail.com";
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



// Testimonials popup
function openPopUp(name, imgSrc, date, body) {
  document.getElementById("popupName").textContent = name;
  document.getElementById("popupImg").src = imgSrc;
  document.getElementById("popupDate").textContent = date;
  document.getElementById("popupBody").textContent = body;
  document.getElementById("popupOverlay").classList.add("active");
}
 
function closePopUp() {
  document.getElementById("popupOverlay").classList.remove("active");
}
 
 
 
document.getElementById("popupOverlay").addEventListener("click", function (e) {
  if (e.target === this) closePopUp();
});
 

//Testimonials Slider
const scrollWrapper = document.getElementById("testimonialScroll");
const segSlider = document.getElementById("segSlider");
const cards = scrollWrapper.querySelectorAll(".testimonial-card");
const totalCards = cards.length;
 

cards.forEach((_, i) => {
  const seg = document.createElement("button");
  seg.classList.add("seg");
  if (i === 0) seg.classList.add("active");
 
  seg.addEventListener("click", () => {
    
    scrollWrapper.scrollLeft = cards[i].offsetLeft - scrollWrapper.offsetLeft;
    setActiveSeg(i);
  });
 
  segSlider.appendChild(seg);
});
 
function setActiveSeg(index) {
  segSlider.querySelectorAll(".seg").forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
}
 
scrollWrapper.addEventListener("scroll", () => {
  
  let closest = 0;
  let minDist = Infinity;
  cards.forEach((card, i) => {
    const dist = Math.abs(card.offsetLeft - scrollWrapper.offsetLeft - scrollWrapper.scrollLeft);
    if (dist < minDist) { minDist = dist; closest = i; }
  });
  setActiveSeg(closest);
});
 

 

// Client Scroll
const clientScroll = document.getElementById("clientScroll");
const clientTrack  = document.getElementById("clientSliderTrack");
const clientThumb  = document.getElementById("clientSliderThumb");
 

clientScroll.addEventListener("scroll", () => {
  const maxScroll = clientScroll.scrollWidth - clientScroll.clientWidth;
  const percent = maxScroll > 0 ? (clientScroll.scrollLeft / maxScroll) * 100 : 0;
  clientThumb.style.width = percent + "%";
});
 
clientTrack.addEventListener("click", (e) => {
  const rect = clientTrack.getBoundingClientRect();
  const clickPercent = (e.clientX - rect.left) / rect.width;
  const maxScroll = clientScroll.scrollWidth - clientScroll.clientWidth;
  clientScroll.scrollLeft = clickPercent * maxScroll;
});
 

(function initThumb() {
  const maxScroll = clientScroll.scrollWidth - clientScroll.clientWidth;
  const percent = maxScroll > 0 ? (clientScroll.scrollLeft / maxScroll) * 100 : 0;
  clientThumb.style.width = percent + "%";
})();