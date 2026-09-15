/* Entry point: smooth-scroll anchor handling shared across pages */
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      const id = link.getAttribute('href');
      if(id.length < 2) return;
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
      }
    });
  });
})();
