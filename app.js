// Toggle burger btn
var getburgerbtn = document.querySelector(".burger-btn");
var gethidemenu = document.querySelector(".hide-menu");

getburgerbtn.addEventListener('click',function(){
    gethidemenu.classList.toggle("active");
});

// Carousel
var myIndex = 0;
var x;

carousel();

function carousel(){
  var mySlides = document.querySelectorAll('.carousel-item');


  for(x = 0; x < mySlides.length; x++){
    mySlides[x].style.display = 'none'
  }

  myIndex++;

  if(myIndex > mySlides.length){
    myIndex = 1;
  }

  mySlides[myIndex-1].style.display = 'block';
  setTimeout(carousel,4000)
}

// Modal
var getticketbtns = document.querySelectorAll('.buyticks');
var getmodal = document.querySelector(".modal");
var getclosebtns = document.querySelectorAll('.close-btn');

getticketbtns.forEach(getticketbtn=>{
  // console.log(getclosebtn);
  getticketbtn.addEventListener('click',function(){
    getmodal.style.display = 'block';
  })
})

getclosebtns.forEach(getclosebtn=>{
  getclosebtn.addEventListener('click',function(){
    getmodal.style.display = 'none';
  })
})

window.onclick = (e)=>{
  // console.log(e.target)
  if(e.target === getmodal){
    getmodal.style.display = 'none';
  }
}