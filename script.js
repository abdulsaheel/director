// Smooth scroll function
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Smooth scroll to sections
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      var sectionId = this.getAttribute('href');
      smoothScroll(sectionId, 1000);
    });
  });
  
  // Toggle mobile nav
  var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  
  mobileNavToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
  });
  
  // Image modal
  var galleryImages = document.querySelectorAll('.gallery-image');
  
  galleryImages.forEach(function(galleryImage) {
    galleryImage.addEventListener('click', function() {
      var imgSrc = this.querySelector('img').getAttribute('src');
      var imgModal = document.createElement('div');
      imgModal.classList.add('img-modal');
      imgModal.innerHTML = '<img src="' + imgSrc + '" alt="Modal Image"><span class="close">&times;</span>';
      document.body.appendChild(imgModal);
      var closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', function() {
        imgModal.remove();
      });
    });
  });
  const productImages = document.querySelectorAll('#products .product img');

productImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.opacity = 0.8;
    image.style.transition = 'opacity 0.3s ease-in-out';
  });
  
  image.addEventListener('mouseout', () => {
    image.style.opacity = 1;
    image.style.transition = 'opacity 0.3s ease-in-out';
  });
});
$(document).ready(function() {
    $('.gallery-item').click(function() {
      var imgSrc = $(this).find('img').attr('src');
      var imgAlt = $(this).find('img').attr('alt');
      $('body').append('<div class="lightbox"><img src="' + imgSrc + '" alt="' + imgAlt + '"><span class="close">&times;</span></div>');
      $('.lightbox').fadeIn();
    });
    
    $('body').on('click', '.close', function() {
      $('.lightbox').fadeOut(function() {
        $(this).remove();
      });
    });
  });

  function initMap() {
    var location = {lat: 40.7128, lng: -74.0060};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
      });
  
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }