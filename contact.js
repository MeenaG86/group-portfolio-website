(function () {
  'use strict';

  // Mobile nav toggle
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

  // Map fetching for requested location
  var contactMap = document.getElementById('contactMap');
  if (contactMap) {
    var locationQuery = 'Tamilnadu, India';
    contactMap.src = 'https://www.google.com/maps?q=' + encodeURIComponent(locationQuery) + '&output=embed';
  }

  // Form validation
  var contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    return;
  }

  var fullName = document.getElementById('fullName');
  var email = document.getElementById('email');
  var message = document.getElementById('message');

  var fullNameError = document.getElementById('fullNameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');
  var successText = document.getElementById('successText');

  function setError(input, output, text) {
    input.classList.add('error');
    output.textContent = text;
  }

  function clearError(input, output) {
    input.classList.remove('error');
    output.textContent = '';
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var nameValue = fullName.value.trim();
    var emailValue = email.value.trim();
    var messageValue = message.value.trim();

    var isValid = true;
    successText.textContent = '';

    clearError(fullName, fullNameError);
    clearError(email, emailError);
    clearError(message, messageError);

    if (nameValue.length < 3) {
      setError(fullName, fullNameError, 'Full name must be at least 3 characters.');
      isValid = false;
    }

    if (!validEmail(emailValue)) {
      setError(email, emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    if (messageValue.length < 10) {
      setError(message, messageError, 'Message must be at least 10 characters.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    successText.textContent = 'Message validated successfully.';

    var mailto = 'mailto:richard@example.com'
      + '?subject=' + encodeURIComponent('Contact from ' + nameValue)
      + '&body=' + encodeURIComponent('Name: ' + nameValue + '\nEmail: ' + emailValue + '\n\nMessage:\n' + messageValue);

    window.location.href = mailto;
    contactForm.reset();
  });
})();
