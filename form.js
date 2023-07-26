
let userInput = document.querySelector("[name='username']");
let telphoneInput = document.querySelector("[name='telphonenumber']");
let needInput = document.querySelector("[name='need']");

document.forms[0].onsubmit = function (e){
  let userValid = false;
  let telphoneValid = false;
  let needValid = false;

  if (userInput.value !== "" && userInput.value.length >= 10 ) {
  userValid = true;
  }

  if (telphoneInput.value !== "" && telphoneInput.value.length ==11){
    telphoneValid = true;
  }

  if (needInput.value !== ""){
    needValid = true;
  }


  if (userValid === false || telphoneValid === false || needValid === false) {
    alert("Username must be 10 charachters , The phone number must be 11 numbers and Your need can not be empty ")
    e.preventDefault();
  }
  };


$(document).ready(function(){

  const mainColor = "#c7a17a";
  const logo = "pic/logo.png";

  $(".shop-now form").prepend(`<h1>Shop Now</h1>`)
  $(".shop-now form").prepend(`<img src='${logo}' >`)

  $('body').css({
    'padding' : '0',
    'margin' : '0',
    'background-image' : 'url(pic/footer-bg.jpg)'
  });
  
  $('.shop-now').css({
    'margin' : '20px auto',
    'width' : '80%'
  });
  
  $('.shop-now form').css({
    'width' : '60%',
    'margin' : '20px auto',
    'padding' : '50px',
    'textAlign' : 'center',
    'background-color' : '#ffffff36',
    'border-radius' : '5px'
  });

  
  $('.shop-now form h1').css({
    'color' : mainColor,
    'text-align' : 'center',
    'margin-bottom' : '30px'
  });
  
  $('.shop-now form input').css({
    'display' : 'block',
    'margin' : '20px 0',
    'padding' : '5px 0',
    'width' : '100%',
    'padding' : '10px 0 10px 15px',
    'border-radius' : '10px',
    'border' : '1px solid var(--main-color)'
  });

  // Media Query
  const windowWidth = $(window).width();

  if(windowWidth < 767)
  {
    $('.shop-now').css({
      'margin' : '20px auto',
      'width' : '90%'
    });

    $('.shop-now form').css({
      'width' : '100%',
      'padding' : '30px',
    });
  }
    

})