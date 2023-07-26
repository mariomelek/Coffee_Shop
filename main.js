// form
// an function

let userInput = document.querySelector("[name='username']");
let telphoneInput = document.querySelector("[name='telphonenumber']");
let needInput = document.querySelector("[name='need']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let telphoneValid = false;
  let needValid = false;

  if (userInput.value !== "" && userInput.value.length >= 10) {
    userValid = true;
  }

  if (telphoneInput.value !== "" && telphoneInput.value.length == 11) {
    telphoneValid = true;
  }

  if (needInput.value !== "") {
    needValid = true;
  }

  if (userValid === false || telphoneValid === false || needValid === false) {
    e.preventDefault();
  }
};

var x = document.getElementById("myBtn1");
x.addEventListener("mouseover", myFun1);
function myFun1() {
  document.getElementById("demo1").innerHTML =
    "In this coffee shop we make the best types of coffee latte ,and you can also pput your picture on it.Are you sure you don't want to try this?<br>";
}

var y = document.getElementById("myBtn2");
y.addEventListener("mouseover", myFun2);
function myFun2() {
  document.getElementById("demo2").innerHTML =
    "You can have the best breakfast here with latte and ice chocolate<br>";
}

var z = document.getElementById("myBtn3");
z.addEventListener("mouseover", myFun3);
function myFun3() {
  document.getElementById("demo3").innerHTML = "We serve fresh cofee<br>";
}

var g = document.getElementById("myBtn4");
g.addEventListener("mouseover", myFun4);
function myFun4() {
  document.getElementById("demo4").innerHTML =
    "This Coffee shop is a great place to go out with your wife<br>";
}

var k = document.getElementById("myBtn5");
k.addEventListener("mouseover", myFun5);
function myFun5() {
  document.getElementById("demo5").innerHTML =
    "We always try to provide the best<br>";
}

var p = document.getElementById("myBtn6");
p.addEventListener("mouseover", myFun6);
function myFun6() {
  document.getElementById("demo6").innerHTML =
    "This cafe is characterized by the finest types of equipment for making coffee<br>";
}

// message

function myFun() {
  var person = prompt("Please enter your opinion", "very good");
  if (person != null) {
    document.getElementById("opinion").innerHTML =
      "Your opinion is: " + person + " ,Thanks for your opinion";
  }
}

function myFunn() {
  confirm("Do you sure you want to subscripe");
}

// Home action
function myNav() {
  let bar = document.querySelector(".bar");
  let nav = document.querySelector(".navigation");
  bar.onclick = () => {
    if (nav.style.left == "0%") {
      nav.style.left = "-100%";
      bar.src = "pic/menu.png";
    } else {
      nav.style.left = "0%";
      bar.src = "pic/x.png";
    }
  };
}
myNav();

window.onload = () => {
  let homeContent = document.querySelector(".home-content");
  homeContent.style.left = "50px";
};

$(document).ready(function () {
  //alert("Welcome in caffe shop");
  const mainColor = "#c7a17a";

  // Menu section
  $(".bg-menu .menu-flex").hide();

  $(".menu-link").click(function () {
    $(".bg-menu .menu-flex").slideToggle();
  });

  $(".bg-menu .menu-flex .menu1").each(function () {
    $(this).click(function () {
      $(this).animate({ padding: "10px" }, 2000);
      $(".bg-menu .menu-flex .menu1")
        .not(this)
        .animate({ padding: "0px" }, 2000);
    });
  });

  // Gallery section
  $(".bg-gallery p").css({
    color: "rgb(255, 255, 255)",
    padding: "20px",
    fontSize: "30px",
    marginTop: "10vh",
  });

  // About section
  $(".about-flex .about1:last-of-type").on({
    mouseenter: function () {
      $(".about1-txt").css({
        background: "#00000000",
        transition: ".3s",
      });
    },
    mouseleave: function () {
      $(".about1-txt").css({ background: "#00000066" });
    },
  });

  //Footer section
  $(".footer1 button").on({
    mouseenter: function () {
      $(this).animate({
        color: "#FFF",
        padding: "20px",
      });
    },

    mouseleave: function () {
      $(this).animate({
        color: "#000",
        padding: "15px",
      });
    },
  });

  $(".subscribe").submit(function () {
    const subscriber = $(".email-subscriber").val();
    alert(`Your email: ${subscriber} is submitted.`);
  });

  // Button To top
  $(".to-top").hide();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".to-top").fadeIn(200);
    } else {
      $(".to-top").fadeOut(200);
    }
  });

  function normalToTop(bkg, font) {
    $(".to-top").css({
      position: "fixed",
      bottom: "40px",
      right: "40px",
      backgroundColor: bkg,
      color: font,
      padding: "15px 19px",
      borderRadius: "10px",
      cursor: "pointer",
      transition: ".3s",
      zIndex: "9999999",
    });
  }
  normalToTop(mainColor, "#FFF");

  $(".to-top").on({
    mouseenter: function () {
      normalToTop("#FFF", mainColor);
    },
    mouseleave: function () {
      normalToTop(mainColor, "#FFF");
    },
  });

  $(".to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
