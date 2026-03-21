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
const github = document.getElementById("gitIcon");
github.addEventListener("click", function () {
  window.open("https://www.github.com/MeenaG86", "_blank");
});

//linkedin

const linkedin = document.getElementById("linkIcon");
linkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/meena-subash-55a151222/", "_blank");
});

(function () {
  'use strict';

  // Mobile Nav Toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      var spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    });
  }

  // Category Filtering
  var filterBtns = document.querySelectorAll('.filter-btn');
  var allCards = document.querySelectorAll('.blog-card');
  var emptyState = document.getElementById('emptyState');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var selected = btn.getAttribute('data-filter');
      var visibleCount = 0;

      allCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        var matches = selected === 'all' || category === selected;

        if (matches) {
          card.classList.remove('hidden');
          card.classList.remove('fade-in');
          void card.offsetWidth;
          card.style.animationDelay = (visibleCount * 0.08) + 's';
          card.classList.add('fade-in');
          visibleCount++;
        } else {
          card.classList.add('hidden');
          card.classList.remove('fade-in');
        }
      });

      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    });
  });

  var readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.blog-card');
      var extraText = card.querySelector('.card-extra');
      var expanded = btn.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        extraText.classList.remove('visible');
        btn.textContent = 'Read More';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        extraText.classList.add('visible');
        btn.textContent = 'Read Less';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

})();
