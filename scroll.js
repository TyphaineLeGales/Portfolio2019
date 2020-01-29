
function black (params){
   for (i=0; i<params.length; i++) {
      params[i].style.color="black";
  }
}

function invisible (params){
  for (i=0; i<params.length; i++) {
    params[i].classList.add('invisible');
  }
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function SVGmaskHeader () {

}

function nav (currIndex, descriptionArray, btnArray) {
  invisible(descriptionArray);
  descriptionArray[currIndex].classList.remove('invisible');
  if(currIndex != 0) {
    black(btnArray);
    btnArray[currIndex-1].style.color="#113ffa";
  } else {
    black(btnArray);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('scroll', function(){

  var descriptions = document.querySelectorAll("div.description");
  var sections = document.querySelectorAll("div.section");
  var imgSection = document.querySelectorAll("div.showImg");
  var arrow = document.getElementsByClassName('arrow');
  var buttons = document.querySelectorAll('button');
  console.log(descriptions, buttons);


  var project1 = document.getElementById('section1');
  var showType = document.getElementById('showType');


  var projectFurby = document.getElementById('sectionFurby');
  var showFurby = document.getElementById('showFurby');


  var project2 = document.getElementById('section2');
  var showFood = document.getElementById('showFood');


  var project3 = document.getElementById('section3');
  var showDOT = document.getElementById('showDigital');


  var project4 = document.getElementById('section4');
  var showDS = document.getElementById('showDigital');

  var top = document.getElementById('top');
  var about = document.getElementById('showAbout');
  var landing = document.getElementById('landing');

  var contact = document.getElementById('contact');
  var showContact = document.getElementById('showContact');
  var end = document.getElementById('end');


   if( -showAbout.clientHeight< top.offsetTop- window.scrollY+200){
      nav(0, descriptions, buttons);
      arrow[0].classList.remove('up', 'blue');
      arrow[0].setAttribute("href", "#end");
   } else if(-showType.clientHeight < project1.offsetTop- window.scrollY) {
      nav(1, descriptions, buttons);
    } else if(-showFurby.clientHeight < projectFurby.offsetTop- window.scrollY ){
      nav(2, descriptions, buttons);
    } else if (-showFood.clientHeight < project2.offsetTop- window.scrollY){
      nav(3, descriptions, buttons);
    } else if(-showDOT.clientHeight < project3.offsetTop- window.scrollY ) {
      nav(4, descriptions, buttons);
    } else if(-showDS.clientHeight < project4.offsetTop- window.scrollY) {
      nav(5, descriptions, buttons);
    } else if(-showContact.clientHeight < end.offsetTop- window.scrollY){
      nav(6, descriptions, buttons);
      arrow[0].classList.add('up', 'blue');
      arrow[0].setAttribute("href", "#top");
    }

    var nom = document.getElementById('prenom');
    var section1 = document.getElementById('section1');
    var maskDiv= document.getElementById('maskDivTitle1');
    var portrait= document.getElementById('p5CanvasMobile');
    portrait.style.top = `${window.scrollY/4}px`;
    nom.style.opacity = `${window.scrollY/showAbout.clientHeight}`;
    maskDiv.style.width = `${map_range(window.scrollY -project1.offsetTop, 0,showType.clientHeight, 100, 0 )}%`;
  });
}, false);



