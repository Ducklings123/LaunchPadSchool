document.addEventListener('DOMContentLoaded', function() {
  // Subtle animation for the hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeIn 2s ease-in-out';
  }

  // Updated fullscreen functionality 
  const fullscreenBtn = document.querySelector('.fullscreen-btn');
  
  fullscreenBtn.addEventListener('click', function() {
    const gameFrame = document.getElementById('game-frame');
    
    if (gameFrame && !document.fullscreenElement) {
      gameFrame.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  });

  // Sidebar toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
});
