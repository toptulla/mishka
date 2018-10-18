document.addEventListener('DOMContentLoaded', function () {
    let nav_toggles = document.getElementsByClassName('nav-toggle');
    let nav_toggle = nav_toggles[0];

    nav_toggle.onclick = function () {
        let nav__lists = document.getElementsByClassName('nav__list');
        let site_nav = nav__lists[0];
        let user_nav = nav__lists[1];
        
        if(site_nav.style.display === 'block')
        {
            site_nav.style = undefined;
            user_nav.style = undefined;
            nav_toggle.style = undefined;
        }
        else
        {
            site_nav.style.display = 'block';
            user_nav.style.display = 'block';
            nav_toggle.style.backgroundImage = "url('../img/menu-close.svg')";
        }
    };
});

function closeMobileNavigationOnMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        let nav_toggles = document.getElementsByClassName('nav-toggle');
        let nav_toggle = nav_toggles[0];

        let nav__lists = document.getElementsByClassName('nav__list');
        let site_nav = nav__lists[0];
        let user_nav = nav__lists[1];

        site_nav.style = undefined;
        user_nav.style = undefined;
        nav_toggle.style = undefined;
    }
};

var x = window.matchMedia('(min-width: 768px)');
x.addListener(closeMobileNavigationOnMediaQuery);