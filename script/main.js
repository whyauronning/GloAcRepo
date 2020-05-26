// меню

const leftMenu = document.querySelector('.left-menu'),
      hamburger = document.querySelector('.hamburger');

      // открытие/закрытие меню

      hamburger.addEventListener('click', () => {
        leftMenu.classList.toggle('openMenu');
        hamburger.classList.toggle('open');
      });

      document.addEventListener('click', (event) =>{
      if(!event.target.closest('.left-menu')) {
          leftMenu.classList.remove('openMenu');
          hamburger.classList.remove('open');
      }
});
            leftMenu.addEventListener('click', event =>{
            const target = event.target;
            const dropdown = target.closest('.dropdown');
            if (dropdown) { 
                dropdown.classList.toggle('active');
            }
            });