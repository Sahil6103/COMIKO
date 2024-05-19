let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email_address");
let mobile = document.querySelector("#mobile_no");
let aptno = document.querySelector("#aptno");
let address = document.querySelector("#address");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let pincode = document.querySelector("#pin_code");
let checkoutbtn = document.querySelector("#checkbtn");
let checkout_error = document.querySelector("#checkout_error");

checkoutbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    first_name.value == "" &&
    last_name.value == "" &&
    email.value == "" &&
    mobile.value == "" &&
    aptno.value == "" &&
    address.value == "" &&
    city.value == "" &&
    state.value == "" &&
    pincode.value == ""
  ) {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Fill all the fields.</div>";
    first_name.focus();
  } else if (first_name.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter First Name.</div>";
    first_name.focus();
  } else if (last_name.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Last Name.</div>";
    last_name.focus();
  } else if (email.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Email Address.</div>";
    email.focus();
  } else if (mobile.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Mobile Number.</div>";
    mobile.focus();
  } else if (aptno.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Apartment no. or House Name.</div>";
    aptno.focus();
  } else if (address.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Delivery Address.</div>";
    address.focus();
  } else if (city.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter City.</div>";
    city.focus();
  } else if (state.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Select State.</div>";
    state.focus();
  } else if (pincode.value == "") {
    checkout_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'> <i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Pincode No.</div>";
    pincode.focus();
  } else {
    location.href = "thankyou.html";
  }
});
