//ru eng
document.addEventListener('DOMContentLoaded', function () {
    const langToggleButton = document.getElementById('lang-toggle');

    let currentLanguage = 'RU'; 

    langToggleButton.addEventListener('click', () => {
        if (currentLanguage === 'RU') {
            langToggleButton.textContent = 'EN';
            currentLanguage = 'EN';
        } else {
            langToggleButton.textContent = 'RU';
            currentLanguage = 'RU';
        }
    });


    const blogContainer = document.querySelector('.blog');
    const scrollSpeed = 3; 

  
    blogContainer.addEventListener('wheel', function (event) {
        event.preventDefault();
        blogContainer.scrollBy({
            top: event.deltaY * scrollSpeed,
            behavior: 'smooth'
        });
    });

 
    let touchStartY = 0;
    let touchEndY = 0;

    blogContainer.addEventListener('touchstart', function (event) {
        touchStartY = event.touches[0].clientY;
    });

    blogContainer.addEventListener('touchmove', function (event) {
        touchEndY = event.touches[0].clientY;
        const touchDelta = (touchStartY - touchEndY) * scrollSpeed;
        blogContainer.scrollBy({
            top: touchDelta,
            behavior: 'smooth'
        });
        touchStartY = touchEndY;
    });



//mobile-menu

    const menuIcon = document.getElementById('menu-icon');
    const navigation = document.getElementById('navigation');

    menuIcon.addEventListener('click', () => {
        if (menuIcon.getAttribute('src') === 'images/Menu.png') {
            menuIcon.setAttribute('src', 'images/Menu-close.png');
        } else {
            menuIcon.setAttribute('src', 'images/Menu.png');
        }
        navigation.classList.toggle('show');
    });
});








