document.addEventListener('DOMContentLoaded', function () {
    let nav_toggle = document.getElementById('main-nav__toggle');
    nav_toggle.onclick = function () {
        let main_nav = document.getElementById('main-nav__list');
        
        if(main_nav.style.display === 'block')
        {
            main_nav.style.display = 'none';
            nav_toggle.style.backgroundImage = "url('../img/menu.svg')";
        }
        else
        {
            main_nav.style.display = 'block';
            nav_toggle.style.backgroundImage = "url('../img/menu-close.svg')";
        }
    };
});