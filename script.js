const sign_up_button = document.getElementById("sign_up");
const sign_in_button = document.getElementById("sign_in");
const container = document.getElementById("container");
const name1 = document.getElementById("name1");
const country = document.getElementById("country");
const zip_code = document.getElementById("zip_code");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const form = document.querySelector("form");
const email_error = document.querySelector("#email + span.error");
const name_error = document.querySelector("#name1 + span.error");
const country_error = document.querySelector("#country + span.error");
const zip_code_error = document.querySelector("#zip_code + span.error");
const password_error = document.querySelector("#password + span.error");

//Sign up form validation

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    email_error.textContent = "";
    email_error.className = "error";
  } else {
    show_error();
  }
});
////check if password and confirm password
let validate_password = () => {
  if (password.value === confirm_password.value) {
    return true;
  } else {
    return false;
  }
};

///name
name1.addEventListener("input", (event) => {
  if (name1.validity.valid) {
    name_error.textContent = "";
    name_error.className = "error";
  } else {
    show_name_error();
  }
});

///country
country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    country_error.textContent = "";
    country_error.className = "error";
  } else {
    show_country_error();
  }
});

////zip code
zip_code.addEventListener("input", (event) => {
  if (zip_code.validity.valid) {
    zip_code_error.textContent = "";
    zip_code_error.className = "error";
  } else {
    show_zip_code_error();
  }
});

/////form
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    show_error();

    event.preventDefault();
  } else if (!name1.validity.valid) {
    show_name_error();
    event.preventDefault();
  } else if (!country.validity.valid) {
    show_country_error();
    event.preventDefault();
  } else if (!zip_code.validity.valid) {
    show_zip_code_error();
    event.preventDefault();
  } else if (validate_password() === false) {
    console.log("password mismatch");
    show_password_error();
    event.preventDefault();
  }
});

////email
let show_error = () => {
  if (email.validity.valueMissing) {
    email_error.textContent = "You need to enter an e-mail address";
  } else if (email.validity.typeMismatch) {
    email_error.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    email_error.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  email_error.className = "error active";
};

///name
let show_name_error = () => {
  if (name1.validity.valueMissing) {
    name_error.textContent = "Kindly input your name";
  }
  name_error.className = "error active";
};

////country
let show_country_error = () => {
  if (country.validity.valueMissing) {
    country_error.textContent = "Kindly input your country";
  }
  country_error.className = "error active";
};

///zip code
let show_zip_code_error = () => {
  if (zip_code.validity.valueMissing) {
    zip_code_error.textContent = "kindly input your zip code";
  } 
  
  zip_code_error.className = "error active";
};

///password
let show_password_error = () => {
  password_error.textContent = "password mismatch";
};

//sliding mechanism
sign_up_button.addEventListener("click", () =>
  container.classList.add("right_panel_active")
);

sign_in_button.addEventListener("click", () =>
  container.classList.remove("right_panel_active")
);
