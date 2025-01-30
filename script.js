// Carousel Image Rotator
const images = document.querySelectorAll('.carousel img');
const leftArrow = document.querySelector('.carousel .arrow.left');
const rightArrow = document.querySelector('.carousel .arrow.right');
let currentIndex = 0;

// Function to show a specific image
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  document.querySelectorAll('.section-inner').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });

// Show the previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Event listeners for navigation buttons
rightArrow.addEventListener('click', showNextImage);
leftArrow.addEventListener('click', showPreviousImage);


// Automatic rotation every 10 seconds
setInterval(showNextImage, 10000);

const darkToggle = document.createElement('button');
darkToggle.textContent = '🌓';
darkToggle.style.position = 'fixed';
darkToggle.style.bottom = '20px';
darkToggle.style.right = '20px';
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});