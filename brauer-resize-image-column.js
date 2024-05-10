if( LS.template == "product" ) {
  var elements = document.querySelectorAll('.section-single-product .col-md-8');
  elements.forEach(function(element) {
      element.classList.remove('col-md-8');
      element.classList.add('col-md-5');
  });
  var resizeEvent = new Event('resize');
  window.dispatchEvent(resizeEvent);
}
