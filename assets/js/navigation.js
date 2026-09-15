/* Header solidify on scroll, mobile menu, active nav state, back-to-top */
(function(){
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backToTop = document.querySelector('.back-to-top');

  function onScroll(){
    if(!header) return;
    if(window.scrollY > 40){
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
    if(backToTop){
      if(window.scrollY > 600){
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if(toggle && mobileMenu){
    toggle.addEventListener('click', function(){
      const isOpen = mobileMenu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        mobileMenu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  if(backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Active nav state based on current path
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a, .mobile-menu nav a').forEach(function(link){
    const href = link.getAttribute('href').split('#')[0] || 'index.html';
    if(href === current){
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
