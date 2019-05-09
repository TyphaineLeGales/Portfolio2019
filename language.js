function francais() {
  var en = document.querySelectorAll('.en');
  var fr = document.querySelectorAll('.fr');

  for(var i=0; i< en.length; i++){
     en[i].classList.add('invisible');
  }

  for(var j=0; j< fr.length; j++){
     fr[j].classList.remove('invisible');
  }
}

function english() {
  var en = document.querySelectorAll('.en');
  var fr = document.querySelectorAll('.fr');

   for(var i=0; i< en.length; i++){
     en[i].classList.remove('invisible');
  }

  for(var j=0; j< fr.length; j++){
     fr[j].classList.add('invisible');
  }
}
