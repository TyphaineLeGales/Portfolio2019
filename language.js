function francais() {
  var en = document.querySelectorAll('.en');
  var fr = document.querySelectorAll('.fr');
  en.forEach(function(element) {
    element.classList.add('invisible');
  });
  fr.forEach(function(element) {
    element.classList.remove('invisible');
  });
}

function english() {
  var en = document.querySelectorAll('.en');
  var fr = document.querySelectorAll('.fr');
  en.forEach(function(element) {
    element.classList.remove('invisible');
  });
  fr.forEach(function(element) {
    element.classList.add('invisible');
  });
}
