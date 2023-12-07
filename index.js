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
