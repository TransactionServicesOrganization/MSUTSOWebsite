
//header scripts

const header = document.getElementById('mainHeader');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Background change
  if (currentScroll === 0) {
    header.classList.add('solid');
    header.classList.remove('transparent');
  } else {
    header.classList.add('transparent');
    header.classList.remove('solid');
  }

  // Hide/show on scroll direction
  if (currentScroll > lastScroll && currentScroll > 60) {
    // Scrolling down
    header.classList.add('hide');
  } else {
    // Scrolling up
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

// Image Carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const overlays = document.querySelectorAll('.overlay');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  const slidesWrapper = document.querySelector('.slides');
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  // Parallax overlay effect
  overlays.forEach((overlay, i) => {
    const offset = (i - index) * 30;
    overlay.style.transform = `translateX(${offset}px)`;
  });

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Dot click handlers
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.getAttribute('data-slide'));
    showSlide(currentSlide);
  });
});

setInterval(nextSlide, 10000); // Slide every 10 seconds