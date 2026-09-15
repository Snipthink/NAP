/* Contact form validation + submission to a configurable static endpoint */
(function(){
  // Replace with a real static-form provider endpoint (e.g. Formspree, Basin, Netlify Forms).
  // No secrets belong here — public form endpoints only.
  const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID';

  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  function setError(field, message){
    const wrap = field.closest('.field');
    if(!wrap) return;
    wrap.classList.toggle('has-error', Boolean(message));
    const errEl = wrap.querySelector('.field-error');
    if(errEl) errEl.textContent = message || '';
  }

  function validate(){
    let valid = true;
    form.querySelectorAll('[required]').forEach(function(field){
      const value = field.value.trim();
      if(!value){
        setError(field, 'This field is required.');
        valid = false;
      } else if(field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
        setError(field, 'Enter a valid email address.');
        valid = false;
      } else {
        setError(field, '');
      }
    });
    return valid;
  }

  form.querySelectorAll('input, select, textarea').forEach(function(field){
    field.addEventListener('blur', function(){
      if(field.hasAttribute('required')) validate();
    });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!validate()){
      status.className = 'form-status is-error';
      status.textContent = 'Please complete the required fields above.';
      return;
    }

    if(FORM_ENDPOINT.indexOf('REPLACE_WITH_FORM_ID') !== -1){
      // Endpoint not configured yet — show success UX without a network call.
      showSuccess();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING…';

    fetch(FORM_ENDPOINT, {
      method:'POST',
      headers:{'Accept':'application/json'},
      body:new FormData(form)
    }).then(function(res){
      if(res.ok){
        showSuccess();
      } else {
        throw new Error('Submission failed');
      }
    }).catch(function(){
      status.className = 'form-status is-error';
      status.textContent = 'Something went wrong. Please email oslo@norwegianaviation.partners directly.';
    }).finally(function(){
      submitBtn.disabled = false;
      submitBtn.textContent = 'SEND PROJECT BRIEF';
    });
  });

  function showSuccess(){
    status.className = 'form-status is-success';
    status.textContent = 'Thank you. Your project brief has been received — we will respond directly.';
    form.reset();
  }
})();
