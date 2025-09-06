const toggle = 
document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change',
    function() {
        if(this.checked){
            body.classList.add('night');
        }else{
            body.classList.remove('night');
        }
    }
)

    
    // Example: Infinite horizontal scroll for .carouselBS
    document.addEventListener('DOMContentLoaded', function () {
      const carousel = document.querySelector('.carouselBS');
      if (!carousel) return;

      // Duplicate content for seamless looping
      carousel.innerHTML += carousel.innerHTML;

      // Set up styles (ensure these are also in your CSS)
      carousel.style.display = 'flex';
      carousel.style.overflow = 'hidden';
      carousel.parentElement.style.overflow = 'hidden';

      let scrollAmount = 0;
      const speed = 1; // px per frame

      function animate() {
      scrollAmount += speed;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(animate);
      }

      animate();
    });
    
