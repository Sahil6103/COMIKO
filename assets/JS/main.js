let close_btn = document.querySelector(".close-btn");
let userIcon = document.querySelector(".fa-user");
let sidebar = document.getElementById("sidebar");
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
close_btn.style = "display:none;";

function toggleSidebar() {
  let btn = document.getElementById("btnopen");
  let cart = document.querySelector(".fa-bag-shopping");
  sidebar.classList.toggle("open");
  let isOpen = sidebar.classList.contains("open");

  if (isOpen) {
    // btn.style.display = "none";
    close_btn.style.display = "initial";
    // cart.style.display = "none";
    // userIcon.style.display = viewportWidth <= 425 ? "none" : "initial";
  } else {
    btn.style.display = "initial";
    cart.style.display = "initial";
    close_btn.style.display = "none";
    // btn.style.top = "3%";
    userIcon.style.display = "none";
    userIcon.style.display = viewportWidth <= 425 ? "none" : "initial";
  }
}

// Event listener to adjust user icon visibility when the viewport is resized
window.addEventListener("resize", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let isOpen = sidebar.classList.contains("open");
  if (!isOpen && viewportWidth >= 425) {
    userIcon.style.display = "initial";
  } else {
    userIcon.style.display = "none";
  }
});

// reveal animation
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    // mybutton.style.display = "block";
    mybutton.style.transform = "scale(1)";
  } else {
    mybutton.style.transform = "scale(0)";
    // mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FAQ section

let faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
