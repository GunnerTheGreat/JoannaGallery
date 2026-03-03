document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = wrapper.querySelector('img').src;
        const title = wrapper.dataset.title || '';
        const description = wrapper.dataset.description || 'No description available';
  
        const overlay = document.querySelector('.overlay');
        overlay.querySelector('.overlay-image').src = imgSrc;
        overlay.querySelector('.overlay-title').textContent = title;
        overlay.querySelector('.description-text').textContent = description;
        
        void overlay.offsetWidth;
        
        overlay.classList.add('active');
      });
    });
  
    document.querySelector('.overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay') || e.target.classList.contains('close-btn')) {
          const overlay = document.querySelector('.overlay');
          overlay.classList.remove('active');
      
          setTimeout(() => {
            overlay.querySelector('.overlay-image').src = '';
            overlay.querySelector('.overlay-title').textContent = '';
            overlay.querySelector('.description-text').textContent = '';
          }, 300); 
        }
      });

  });
