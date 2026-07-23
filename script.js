document.addEventListener('DOMContentLoaded', () => {

   
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );

    document.querySelectorAll('.reveal, .fade-up, .fade-in-right')
        .forEach(el => revealObserver.observe(el));


   
    const nav    = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a');
    const sections = document.querySelectorAll('section[id], header[id]');

    function onScroll() {
       
        if (window.scrollY > 20) {
            nav.style.borderBottomColor = 'rgba(255,255,255,0.10)';
        } else {
            nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
        }

      
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.id;
            }
        });
        navLinks.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${current}`
                ? 'var(--text)'
                : '';
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 


   
    const menuBtn  = document.querySelector('.nav-menu-btn');
    const drawer   = document.getElementById('navDrawer');

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', () => {
            const isOpen = drawer.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', isOpen);
            drawer.setAttribute('aria-hidden', !isOpen);

            // Animate hamburger → X
            const spans = menuBtn.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
                spans[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.transform = '';
            }
        });

        drawer.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                drawer.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', false);
                drawer.setAttribute('aria-hidden', true);
                const spans = menuBtn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.transform = '';
            });
        });
    }


  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navH = nav ? nav.offsetHeight : 64;
            const top = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

});
