const validateForm = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");

validateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();

  checInputs();
});

function checInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailAddressValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstNameValue === "") {
    inputErr(firstName, "First Name cannot be empty ");
  } else {
    inputSuccess(firstName);
  }

  if (lastNameValue === "") {
    inputErr(lastName, "Last Name cannot be empty");
  } else {
    inputSuccess(lastName);
  }

  if (emailAddressValue === "") {
    inputErr(emailAddress, "Email cannot be empty");
  } else if (!re.test(emailAddressValue)) {
    inputErr(emailAddress, "Looks like this is not an email");
  } else {
    inputSuccess(emailAddress);
  }

  if (passwordValue === "") {
    inputErr(password, "Password cannot be empty ");
  } else if (passwordValue.length < 6) {
    inputErr(password, "Password is too short");
  } else if (passwordValue.length > 15) {
    inputErr(password, "Password is too long");
  } else {
    inputSuccess(password);
  }
}

function inputErr(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__group error";
  const err = formControl.querySelector(".err-message");
  err.innerText = message;
}

function inputSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form__group success";
}
