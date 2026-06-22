const topbar = document.querySelector('#topbar');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 40));
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }) }, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
