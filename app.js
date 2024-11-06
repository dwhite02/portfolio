/* -----------------
    Vue
-------------------*/

new Vue ({
    el: '#t-vue',
    data: {
        projects: [
            {
                id: "mod-1",
                title: "Carrml Drop",
                for: "Personal Project",
                about: "A website conceptualization for rising R&B artist, Carrml Drop, depicting his various music and to help establish an online presence amongst his fans.",
                tools: "HTML/CSS,  Tailwind CSS, JavaScript, VueJS",
                web: "https://carrmldrop.netlify.app/",
                github: "https://github.com/dwhite02/carrml-drop",
                img: "images/assets/cd.svg",
                alt: "CD Disc icon"
            },
            {
                id: "mod-2",
                title: "Weathy",
                for: "Personal Project",
                about: "A mock web app depicting the weather to use as a design and functionality exercise.",
                tools: "HTML/CSS, Tailwind CSS, JavaScript, VueJS, RESTful API",
                web: "https://weathy-finder.netlify.app/",
                github: "https://github.com/dwhite02/weathy",
                img: "images/assets/weather.svg",
                alt: "Sun with weather icon"
            },
            {
                id: "mod-3",
                title: "AnimeTube",
                for: "Personal Project",
                about: "Inspired by love of anime, sparked an interest to create a mock streaming site to explore ux and ui concepts.",
                tools: "HTML/CSS,  Tailwind CSS, JavaScript, VueJS, Bootstrap, jQuery, RESTful API",
                web: "https://animetube.netlify.app/",
                github: "https://github.com/dwhite02/animetube",
                img: "images/assets/video.svg",
                alt: "Media Player icon"
            },
            {
                id: "mod-4",
                title: "Rock Paper Scissors",
                for: "Personal Project",
                about: "My take on creating a rock, paper, sciccors online game as a SPA exercise",
                tools: "HTML/CSS, Tailwind CSS, JavaScript, VueJS, SASS",
                web: "https://rps-online-game.netlify.app/",
                github: "https://github.com/dwhite02/rock-paper-scissors",
                img: "images/assets/scissors.svg",
                alt: "Media Player icon"
            }
        ]
    },
    methods: {
        openModal: function (mod) {
            const modal = document.getElementById(mod);
            const body = document.querySelector('body');
            const header = document.getElementsByClassName('t-header')
            modal.classList.add('h-full');
            body.classList.add('overflow-hidden');
            
        },
        closeModal: function(mod) {
            const modal = document.getElementById(mod);
            const body = document.querySelector('body');
            modal.classList.remove('h-full');
            body.classList.remove('overflow-hidden')
        },
        scroll: function(hash) {
            const body = document.querySelector("body");

            if (body.scrollWidth > body.clientWidth) {
                let scroll = document.querySelector(hash).offsetLeft
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollLeft: scroll
                }, 50
                )
            } else {
                let scroll = document.querySelector(hash).offsetTop
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: scroll
                }, 50
                )
            }  
        }
    }
})

/* -----------------
    Slider
-------------------*/

if ($('.swiper').length) {
    const swiper = new Swiper(".swiper", {
        // spaceBetween: 30,
        enabled: false,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                enabled: true,
            },
            1280: {
                slidesPerView: 4,
            },
        },
    });
}

/* -----------------
    Hash Anchor
-------------------*/

window.onhashchange = function (e) {
    let nav = document.querySelectorAll('.t-nav')

    for (const item of nav) {
        item.classList.remove('current')
    }

    const hash = e.target.location.hash

    let selector = `a[href$="${hash}"] .t-nav`
    document.querySelector(selector).classList.add('current')
}

window.onload = function (e) {
    const hash = e.target.location.hash

    if (hash !== '') {
        let nav = document.querySelectorAll('.t-nav')

        for (const item of nav) {
            item.classList.remove('current')
        }

        let selector = `a[href$="${hash}"] .t-nav`
        document.querySelector(selector).classList.add('current')
    }
    
}


