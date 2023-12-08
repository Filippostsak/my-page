const firstName = document.querySelector(".col-25");
const fnameInput = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const textbox = document.querySelector("#subject");
const emailInput = document.querySelector("#email");

function capitalizeFirstLetter(string) {
  if (string && string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

function button() {
  const fnameValid =
    fnameInput.value.length >= 3 && fnameInput.value.length <= 20;
  const lnameValid = lastName.value.length >= 3 && lastName.value.length <= 30;
  const emailValid =
    emailInput.value.includes("@") && emailInput.value.includes(".");
  const textboxValid =
    textbox.value.length >= 10 && textbox.value.length <= 250;
  const submitButton = document.querySelector(".input");

  if (fnameValid && lnameValid && emailValid && textboxValid) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
}

if (fnameInput) {
  fnameInput.addEventListener("input", function () {
    this.value = capitalizeFirstLetter(this.value);
  });
}

if (lastName) {
  lastName.addEventListener("input", function () {
    this.value = capitalizeFirstLetter(this.value);
  });
}

if (emailInput) {
  emailInput.addEventListener("input", button);
}

if (emailInput) {
  emailInput.addEventListener("input", function () {
    const spanElement = document.querySelector("label[for='email'] .span4");
    if (this.value.includes("@") && this.value.includes(".")) {
      if (spanElement) {
        spanElement.style.color = "green";
      }
    } else {
      if (spanElement) {
        spanElement.style.color = "initial";
      }
    }
  });
}

if (fnameInput) {
  fnameInput.addEventListener("input", function () {
    const spanElement = document.querySelector("label[for='fname'] .span1");
    if (this.value.length >= 3 && this.value.length <= 20) {
      if (spanElement) {
        spanElement.style.color = "green";
      }
    } else {
      if (spanElement) {
        spanElement.style.color = "initial";
      }
    }
  });
}

if (lastName) {
  lastName.addEventListener("input", function () {
    const spanElement = document.querySelector("label[for='lname'] .span2");
    if (this.value.length >= 3 && this.value.length <= 30) {
      if (spanElement) {
        spanElement.style.color = "green";
      }
    } else {
      if (spanElement) {
        spanElement.style.color = "initial";
      }
    }
  });
}

if (textbox) {
  textbox.addEventListener("input", function () {
    const spanElement = document.querySelector("label[for='subject'] .span3");
    if (this.value.length >= 10 && this.value.length <= 250) {
      if (spanElement) {
        spanElement.style.color = "green";
      }
    } else {
      if (spanElement) {
        spanElement.style.color = "initial";
      }
    }
  });
}

if (firstName) {
  firstName.addEventListener("input", button);
}

if (lastName) {
  lastName.addEventListener("input", button);
}

if (textbox) {
  textbox.addEventListener("input", button);
}

emailjs.init("U4CmSlQI2idZaLqq-");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var userEmailAddress = document.getElementById("email").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var country = document.getElementById("country").value;
  var subject = document.getElementById("subject").value;

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(userEmailAddress)) {
    alert("Please enter a valid email address.");
    return;
  }

  var templateParams = {
    firstname: fname,
    lastname: lname,
    email: userEmailAddress,
    country: country,
    subject: subject,
  };

  emailjs.send("service_qdsr9hd", "template_c3pxr0u", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been successfully submitted.");
      window.location.reload(); // This line will reload the page

      // Auto-reply part
      emailjs
        .send("service_qdsr9hd", "template_qpw2wqi", {
          to_email: userEmailAddress,
          firstname: fname,
          lastname: lname,
          email: userEmailAddress,
          country: country,
          subject: subject,
        })
        .then(
          function (autoReplyResponse) {
            console.log(
              "Auto-reply SUCCESS!",
              autoReplyResponse.status,
              autoReplyResponse.text
            );
          },
          function (autoReplyError) {
            console.log("Auto-reply FAILED...", autoReplyError);
          }
        );
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send the email.");
    }
  );
});
