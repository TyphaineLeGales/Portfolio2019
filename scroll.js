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

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('scroll', function(){
  var type = document.getElementById("typeTxt");
  var project1 = document.getElementById('section1');
  var showType = document.getElementById('showType');

  var furby = document.getElementById('furbyTxt');
  var projectFurby = document.getElementById('sectionFurby');
  var showFurby = document.getElementById('showFurby');

  var food = document.getElementById('foodTxt');
  var project2 = document.getElementById('section2');
  var showFood = document.getElementById('showFood');

  var dot = document.getElementById('dotTxt');
  var project3 = document.getElementById('section3');
  var showDOT = document.getElementById('showDigital');

  var dSpace = document.getElementById('digitalSpaceTxt');
  var project4 = document.getElementById('section4');
  var showDS = document.getElementById('showDigital');

  var arrow = document.getElementsByClassName('arrow');
  var buttons = document.querySelectorAll('button');

  var top = document.getElementById('top');
  var about = document.getElementById('showAbout');
  var landing = document.getElementById('landing');

  var contact = document.getElementById('contact');
  var showContact = document.getElementById('showContact');
  var end = document.getElementById('end');
  // var end = document.getElementById('info');
   if( -showAbout.clientHeight< top.offsetTop- window.scrollY+200){
      landing.classList.remove('invisible');
      invisible([type, food, dSpace, dot, contact, furby]);
      black([buttons[0],buttons[1], buttons[2], buttons[3],buttons[4]]);
      arrow[0].classList.remove('up', 'blue');
      arrow[0].setAttribute("href", "#end");
   } else if(-showType.clientHeight < project1.offsetTop- window.scrollY-350) {
      invisible([landing, food, dSpace, dot, contact, furby]);
      type.classList.remove('invisible');
      black([buttons[1], buttons[2], buttons[3],buttons[4]]);
      buttons[0].style.color="#113ffa";
    } else if(-showFurby.clientHeight < projectFurby.offsetTop- window.scrollY+250 ){
      invisible([landing, food, dSpace, dot, contact, type]);
      furby.classList.remove('invisible');

    } else if (-showFood.clientHeight < project2.offsetTop- window.scrollY-350){
      invisible([landing, type, dSpace, dot, contact, furby]);
      food.classList.remove('invisible');
      black([buttons[0], buttons[2], buttons[3],buttons[4]]);
      buttons[1].style.color="#113ffa";
    } else if(-showDOT.clientHeight < project3.offsetTop- window.scrollY+250) {
      invisible([landing, type, dSpace, food, contact, furby]);
      dot.classList.remove('invisible');
      black([buttons[0], buttons[1], buttons[3],buttons[4]]);
      buttons[2].style.color="#113ffa";
    } else if(-showDS.clientHeight < project4.offsetTop- window.scrollY) {
      invisible([landing, type, dot, food, contact, furby]);
      dSpace.classList.remove('invisible');
      black([buttons[0], buttons[1], buttons[2],buttons[4]]);
      buttons[3].style.color="#113ffa";
    } else if(-showContact.clientHeight < end.offsetTop- window.scrollY){
       invisible([landing, type, dot, food, dSpace, furby]);
      contact.classList.remove('invisible');
      arrow[0].classList.add('up', 'blue');
      arrow[0].setAttribute("href", "#top");
      black([buttons[0], buttons[1], buttons[2], buttons[3]]);
      buttons[4].style.color="#113ffa";
    }
  });
}, false);



