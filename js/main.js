// Small JS for Athlex landing
document.addEventListener('DOMContentLoaded', ()=>{
  // nav toggle for small screens — toggle class for better responsive control
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    if(!links) return;
    links.classList.toggle('open');
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const t = document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav after clicking a link
        if(window.innerWidth<=800 && links) links.classList.remove('open');
      }
    })
  });

  // intersection observer to reveal cards
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add('in-view');
    })
  },{threshold:0.12});
  document.querySelectorAll('.card, .trainer, .contact-card').forEach(el=>io.observe(el));
});
