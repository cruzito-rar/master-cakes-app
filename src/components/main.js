window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    navbar.classList.add('white');
  } else {
    navbar.classList.remove('white');
  }
});

window.dispatchEvent(new Event('scroll'));
