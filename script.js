
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  
  
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".mobile__menu"); 
const body = document.querySelector("body");

hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
  body.classList.toggle("hidden")
});  

const whiteHamburger = document.querySelector(".white-ham");
const recipes = document.querySelector(".catalog .block__recipes-body");

whiteHamburger.addEventListener('click', () => {  
  whiteHamburger.classList.toggle("change")  
  if (recipes.style.display === "block") {
    recipes.style.display = "none";
  } else {
    recipes.style.display = "block";
  } 
});  

//функція для роботи стрілки вверх
$(function() {
 
  $(window).scroll(function() { 
  if($(this).scrollTop() != 0) {   
  $('#toTop').fadeIn();   
  } else {   
  $('#toTop').fadeOut();   
  }   
  });   
  $('#toTop').click(function() {   
  $('body,html').animate({scrollTop:0},800);   
  });

});

//функція для розгортання та згортання тексту
function myFunction() {
  
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn__more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Сховати";
    moreText.style.display = "inline";
  }

  
} 

function bill(){

  alert("Hi? I`m working");


  var total = 0;
 
  var totalitems = "Список обраних послуг:\n";
  
  
  var chbox1,chbox2,chbox3,chbox4,chbox5,chbox6,chbox7;

  chbox1=document.getElementById('price1000');
  chbox2=document.getElementById('price450');
  chbox3=document.getElementById('price2000');
  chbox4=document.getElementById('price500');
  chbox5=document.getElementById('price150');
  chbox6=document.getElementById('price300');
  chbox7=document.getElementById('price400');


  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var input3 = document.getElementById('input3').value;
  var input4 = document.getElementById('input4').value;
  var input5 = document.getElementById('input5').value;
  var input6 = document.getElementById('input6').value;
  var input7 = document.getElementById('input7').value;
  var email = document.getElementById('email').value;

 

  if(input1>0&&chbox1.checked){
    total+=(1000*input1);
    totalitems+="Дренажна та зрошувальна системи\n"
  }

  if(input2>0&&chbox2.checked){
    total+=(450*input2);
    totalitems+="Огорожі і роздільники зон на ділянці\n"
  }

  if(input3>0&&chbox3.checked){
    total+=(2000*input3);
    totalitems+="Встановлення альтанки\n"
  }

  if(input4>0&&chbox4.checked){
    total+=(500*input4);
    totalitems+="Клумба безперервного цвітіння\n"
  }

  if(input5>0&&chbox5.checked){
    total+=(150*input5);
    totalitems+="Рулонний газон\n"
  }

  if(input6>0&&chbox6.checked){
    total+=(300*input6);
    totalitems+="Укладка бруківки\n"
  }

  if(input7>0&&chbox7.checked){
    total+=(2000*input7);
    totalitems+="Створення проекту під ключ озеленення квартир\n"
  }
 
  
    validate()
  
    alert("email:  "+email+"\n"+totalitems+"\nЗагальний кошторис:"+total);

}


function validate(){
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if(email.match(pattern))
  ;

  else{
    alert("Пошта введена неправильно");
    document.getElementById("email").value="";
  }

}







 
