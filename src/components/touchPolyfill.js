// touchPolyfill.js
if (typeof window !== 'undefined') {
  // Dynamically load slick CSS
  import('slick-carousel/slick/slick.css');
  import('slick-carousel/slick/slick-theme.css');
  
  // Add touch event polyfill
  if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(){}, {
      passive: true,
      capture: true
    });
  }
}