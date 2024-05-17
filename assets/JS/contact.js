let fullname = document.querySelector("#fullname");
let email = document.querySelector("#email");
let msg = document.querySelector("#msg");
let sendbtn = document.querySelector("#sendbtn");
let contact_error = document.querySelector("#contact_error");

sendbtn.addEventListener("click", (e) => {
  console.log("click");
  e.preventDefault();

  if (fullname.value == "" && email.value == "" && msg.value == "") {
    contact_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Fill all the fields.</div>";
    fullname.focus();
  } else if (fullname.value == "") {
    contact_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Full Name.</div>";
    fullname.focus();
  } else if (email.value == "") {
    contact_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Email Address.</div>";
    email.focus();
  } else if (msg.value == "") {
    contact_error.innerHTML =
      "<div class='alert alert-danger rounded-0' role='alert'><i class='fa-solid fa-circle-exclamation'></i>&nbsp;&nbsp;Enter Your Message.</div>";
    msg.focus();
  }
});
