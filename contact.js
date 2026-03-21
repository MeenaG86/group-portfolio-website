//contact page map loading
const contactMap = document.getElementById("contactMap");

if (contactMap) {
  const place = "Tamilnadu, India";
  contactMap.src = `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;
}

//contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  function setError(input, errorElement, message) {
    input.classList.add("error");
    errorElement.textContent = message;
  }

  function clearError(input, errorElement) {
    input.classList.remove("error");
    errorElement.textContent = "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(subjectInput, subjectError);
    clearError(messageInput, messageError);
    formSuccess.textContent = "";

    if (name.length < 3) {
      setError(nameInput, nameError, "Enter at least 3 characters.");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      setError(emailInput, emailError, "Enter a valid email address.");
      isValid = false;
    }

    if (subject.length < 4) {
      setError(subjectInput, subjectError, "Subject should be at least 4 characters.");
      isValid = false;
    }

    if (message.length < 10) {
      setError(messageInput, messageError, "Message should be at least 10 characters.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const mailtoLink = `mailto:meeash2021@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    formSuccess.textContent = "Validation passed. Opening email app...";
    window.location.href = mailtoLink;
    contactForm.reset();
  });
}
