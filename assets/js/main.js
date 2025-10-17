// =======================
// 📅 Année automatique
// =======================
document.querySelectorAll('[id^=year]').forEach(el => el.textContent = new Date().getFullYear());

// =======================
// 📱 Menu responsive
// =======================
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('main-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

// =======================
// 🌟 Reveal on scroll
// =======================
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
}
