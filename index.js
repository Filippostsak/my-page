emailjs.init("U4CmSlQI2idZaLqq-"); // Replace with your user ID from EmailJS

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user's email address from the form input
    var userEmailAddress = document.getElementById("user_email").value;

    // Define the parameters to send to EmailJS
    var templateParams = {
      to_email: userEmailAddress,
    };

    // Send the email using EmailJS
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
