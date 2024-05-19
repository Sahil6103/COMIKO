// slide the login and signup form

let login_link = document.querySelector("#login");
let register_link = document.querySelector("#register");
console.log(login_link);
login_link.addEventListener("click", (e) => {
  e.preventDefault();
  login_link.classList.toggle("active");
  let mainForm = document.querySelector(".main-form");
  mainForm.style.transform = "translateX(0px)";
});

register_link.addEventListener("click", (e) => {
  e.preventDefault();

  register_link.classList.toggle("active");

  let mainForm = document.querySelector(".main-form");
  mainForm.style.transform = "translateX(-420px)";

  if (viewportWidth < 576) {
    mainForm.style.transform = "translateX(-370px)";
  }
  if (viewportWidth < 375) {
    mainForm.style.transform = "translateX(-320px)";
  }
  if (viewportWidth < 320) {
    mainForm.style.transform = "translateX(-290px)";
  }
});

// errors in user forms

let login_username = document.querySelector("#login_username");
let login_password = document.querySelector("#login_password");
let signup_username = document.querySelector("#signup_username");
let signup_email = document.querySelector("#signup_email");
let signup_password = document.querySelector("#signup_password");
let login_btn = document.querySelector("#login_btn");
let signup_btn = document.querySelector("#signup_btn");
let login_error = document.querySelector("#login_error");
let signup_error = document.querySelector("#signup_error");

login_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (login_username.value == "" && login_password.value == "") {
    login_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Fill all the fields.</div>";
    login_username.focus();
  } else if (login_username.value == "") {
    login_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Please enter Username or Email Address.</div>";
    login_username.focus();
  } else if (login_password.value == "") {
    login_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Please enter the Password.</div>";
    login_password.focus();
  }
});

signup_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    signup_username.value == "" &&
    signup_email.value == "" &&
    signup_password.value == ""
  ) {
    signup_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Fill all the fields.</div>";
    signup_username.focus();
  } else if (signup_username.value == "") {
    signup_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Please enter Username.</div>";
    signup_username.focus();
  } else if (signup_email.value == "") {
    signup_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Please enter Email Address.</div>";
    signup_email.focus();
  } else if (login_password.value == "") {
    signup_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Please enter the Password.</div>";
    signup_password.focus();
  }
});

// Password show/hide code

// let show_icon = this.documentElement.querySelector("#show_icon");

// show_icon.addEventListener("click", () => {
//   if (login_password.type == "password") {
//     login_password.type = "text";
//   } else {
//     login_password.type = "password";
//   }

//   if (signup_password.type == "password") {
//     signup_password.type = "text";
//   } else {
//     signup_password.type = "password";
//   }
// });

// * Active Links

// ? already declared on top of js its just for reference only
// let login_link = document.querySelector("#login");
// let register_link = document.querySelector("#register");

login_link.addEventListener("click", () => {
  login_link.classList.toggle("active");
});

register_link.addEventListener("click", () => {
  register_link.classList.toggle("active");
});
