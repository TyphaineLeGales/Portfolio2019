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

// function SVGmaskHeader (maskArray, index, sectionsArray, imgSectionArray) {
//   var fillAmount = map_range(window.scrollY - sectionsArray[index].offsetTop, 0,imgSectionArray[index].clientHeight, 100, 0 );
//   maskArray[index-1].style.width = `${fillAmount}%`;
// }

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
  var buttons = document.querySelectorAll("a.underlineAnim");

   if( -imgSection[0].clientHeight< sections[0].offsetTop- window.scrollY){
      nav(0, descriptions, buttons);

   } else if(-imgSection[1].clientHeight < sections[1].offsetTop- window.scrollY) {
      nav(1, descriptions, buttons);
    } else if(-imgSection[2].clientHeight < sections[2].offsetTop- window.scrollY ){
      nav(2, descriptions, buttons);
    } else if (-imgSection[3].clientHeight <sections[3].offsetTop- window.scrollY){
      nav(3, descriptions, buttons);
    } else if(-imgSection[4].clientHeight < sections[4].offsetTop- window.scrollY ) {
      nav(4, descriptions, buttons);
    } else if(-imgSection[5].clientHeight < sections[5].offsetTop- window.scrollY) {
      nav(5, descriptions, buttons);
    } else if(-imgSection[6].clientHeight < sections[6].offsetTop- window.scrollY){
      nav(6, descriptions, buttons);
    }

    var nom = document.getElementById('prenom');
    nom.style.opacity = `${(window.scrollY/imgSection[0].clientHeight)}`;

    if(window.scrollY < imgSection[0].clientHeight) {
      nom.style.display = "block";

    } else {
      nom.style.display = "none";
    }
  });
}, false);



