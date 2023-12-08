document.documentElement.style.setProperty("--animate-duration", "2s");

// Initialize EmailJS
emailjs.init("U4CmSlQI2idZaLqq-"); // Replace with your EmailJS user ID

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var userEmailAddress = document.getElementById("user_email").value;

    // Simple regex to validate email format
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(userEmailAddress)) {
      alert("Please enter a valid email address.");
      return; // Stop the function if the email is not valid
    }

    var templateParams = {
      user_email: userEmailAddress, // User's email address
      to_email: userEmailAddress, // Destination of the auto-reply email
    };

    emailjs.send("service_qdsr9hd", "template_qpw2wqi", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email successfully sent!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send the email.");
      }
    );
  });

$(document).ready(function () {
  function isElementInView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  function animateElements() {
    $(
      ".element-to-animate, .element-to-animate-left, .element-to-animate-up"
    ).each(function () {
      if (isElementInView(this) && !$(this).hasClass("animated")) {
        $(this).css("visibility", "visible").css("opacity", "1");

        if ($(this).hasClass("element-to-animate")) {
          $(this).addClass("animated-element");
        } else if ($(this).hasClass("element-to-animate-left")) {
          $(this).addClass("animated-element-left");
        } else if ($(this).hasClass("element-to-animate-up")) {
          $(this).addClass("animated-element-up");
        }
      }
    });
  }

  // Run on scroll and initially
  $(window).scroll(animateElements);
  animateElements();
});
