    const mobileMenu = document.querySelector('.menu_bar');
    const navLinks = document.querySelector('.nav_list');
    const closeMenu = document.querySelector('.close_bar');
    const navLinkList = document.querySelectorAll('.list_item');

    mobileMenu.addEventListener('click', ()=> {
        // opens the navbar and also controls the display of the menu and close bars
        openMobileMenu();
        closeMenu.classList.add('menu_active');
        mobileMenu.classList.remove('menu_active');
    });

    closeMenu.addEventListener('click', () => {
         // closes the navbar and also controls the display of the menu and close bars
        closeMobileMenu();
        mobileMenu.classList.add('menu_active');
        closeMenu.classList.remove('menu_active');
    });

    // the open Mobile menu function and animations
    function openMobileMenu() {
        navLinks.classList.add('active');
        navLinkList.forEach((link, index) => {
            link.classList.add('fade-in');
            link.style.animationDelay = `${index * 0.1}s`;

            //remove the animation when it ends
            link.addEventListener('animationend', () => {
                link.classList.remove('fade-in')
            });
        });
    }

// the close Mobile menu function and animations
    function closeMobileMenu() {
        
        navLinkList.forEach((link, index) => {
            link.classList.add('fade-out');
            link.style.animationDelay = `${index * 0.1}s`;
            navLinks.classList.remove('active');
            
            
             //remove the animation when it ends
             link.addEventListener('animationend', () => {
                link.classList.remove('fade-out')
            });
        });
    }


    //Animation part

    const infoSection = document.querySelector('.info-section');
    const leftHidden = infoSection.querySelectorAll('.left-hidden');
    const rightHidden = infoSection.querySelectorAll('.right-hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        entry.isIntersecting ? entry.target.classList.add('display') : entry.target.classList.remove('display');

    })
  });

  leftHidden.forEach((el) => observer.observe(el));
  rightHidden.forEach((el) => observer.observe(el));
  blockItems.forEach((el) => observer.observe(el));