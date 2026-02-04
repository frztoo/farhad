
function setActiveNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });
}
function setupMobileNav(){
  const btn = document.querySelector('[data-hamburger]');
  const menu = document.querySelector('[data-mobile]');
  if(!btn || !menu) return;
  btn.addEventListener('click', ()=>{
    const shown = menu.style.display === 'block';
    menu.style.display = shown ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!shown));
  });
}
function setupAccordions(){
  document.querySelectorAll('.acc-item').forEach(item=>{
    const head = item.querySelector('.acc-head');
    const body = item.querySelector('.acc-body');
    if(!head || !body) return;
    head.addEventListener('click', ()=>{
      const open = item.classList.toggle('open');
      if(open){
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = '0px';
      }
    });
    // if any marked open
    if(item.classList.contains('open')){
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  setActiveNav();
  setupMobileNav();
  setupAccordions();
});
