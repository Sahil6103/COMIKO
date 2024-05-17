let password_username = document.querySelector("#password_username");
let password_new_pass = document.querySelector("#password_new_pass");
let password_con_pass = document.querySelector("#password_con_pass");
let password_btn = document.querySelector("#password_btn");
let password_error = document.querySelector("#password_error");

password_btn.addEventListener("click", (e) => {
  // console.log("click");
  e.preventDefault();

  if (
    password_username.value == "" &&
    password_new_pass.value == "" &&
    password_con_pass.value == ""
  ) {
    password_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Fill all the fields.</div>";
    password_username.focus();
  } else if (password_username.value == "") {
    password_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Username.</div>";
    password_username.focus();
  } else if (password_new_pass.value == "") {
    password_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter New Password.</div>";
    password_new_pass.focus();
  } else if (password_con_pass.value == "") {
    password_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Confirm Password.</div>";
    password_con_pass.focus();
  } else {
    password_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter both Password similar.</div>";
    password_con_pass.focus();
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

// show_icon_confirm.addEventListener("click", () => {
//   if (password_con_password.type == "password") {
//     password_con_password.type = "text";
//   } else {
//     password_con_password.type = "password";
//   }
// });
