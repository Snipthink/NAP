/* Scroll reveal, timeline reveal, number counters, accordion */
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    if(prefersReduced || !('IntersectionObserver' in window)){
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      const io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});
      revealEls.forEach(function(el){ io.observe(el); });
    }
  }

  // Number counters
  const counters = document.querySelectorAll('[data-counter]');
  if(counters.length && !prefersReduced && 'IntersectionObserver' in window){
    const counterIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.getAttribute('data-counter');
        const match = target.match(/^([^\d]*)([\d.]+)(.*)$/);
        if(!match){ el.textContent = target; counterIO.unobserve(el); return; }
        const prefix = match[1], num = parseFloat(match[2]), suffix = match[3];
        const duration = 1400;
        const start = performance.now();
        function tick(now){
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = (num * eased);
          const display = Number.isInteger(num) ? Math.round(val) : val.toFixed(1);
          el.textContent = prefix + display + suffix;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, {threshold:0.4});
    counters.forEach(function(el){ counterIO.observe(el); });
  } else {
    counters.forEach(function(el){ el.textContent = el.getAttribute('data-counter'); });
  }

  // Accordion (mobile capabilities)
  document.querySelectorAll('.accordion-trigger').forEach(function(trigger){
    trigger.addEventListener('click', function(){
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', String(!expanded));
      if(panel){
        panel.style.maxHeight = expanded ? '0px' : panel.scrollHeight + 'px';
      }
    });
  });

  // Map hover states — highlight connections on node hover
  document.querySelectorAll('.map-svg [data-node]').forEach(function(node){
    node.addEventListener('mouseenter', function(){
      const id = node.getAttribute('data-node');
      document.querySelectorAll('.map-svg .connection[data-from="'+id+'"], .map-svg .connection[data-to="'+id+'"]').forEach(function(c){
        c.style.opacity = '1';
        c.style.strokeWidth = '1.6';
      });
    });
    node.addEventListener('mouseleave', function(){
      const id = node.getAttribute('data-node');
      document.querySelectorAll('.map-svg .connection[data-from="'+id+'"], .map-svg .connection[data-to="'+id+'"]').forEach(function(c){
        c.style.opacity = '';
        c.style.strokeWidth = '';
      });
    });
  });
})();
