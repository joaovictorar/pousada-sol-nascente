const topbar = document.querySelector('#topbar');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 40));
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }) }, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const availabilityForm = document.querySelector('#availabilityForm');
if (availabilityForm) {
    const checkIn = document.querySelector('#checkIn');
    const checkOut = document.querySelector('#checkOut');
    const today = new Date().toISOString().split('T')[0];
    checkIn.min = today; checkOut.min = today;
    checkIn.addEventListener('change', () => { checkOut.min = checkIn.value || today; });
    availabilityForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#guestName').value.trim();
        const guests = document.querySelector('#guests').value;
        const message = document.querySelector('#guestMessage').value.trim();
        if (checkOut.value <= checkIn.value) { alert('A data de saída precisa ser depois da data de entrada.'); return; }
        const formatDate = (date) => new Date(date + 'T12:00:00').toLocaleDateString('pt-BR');
        const text = `Olá! Vim pelo site da Pousada Sol Nascente e gostaria de consultar disponibilidade.\n\nNome: ${name}\nCheck-in: ${formatDate(checkIn.value)}\nCheck-out: ${formatDate(checkOut.value)}\nHóspedes: ${guests}${message ? `\nMensagem: ${message}` : ''}`;
        window.open(`https://wa.me/553337211820?text=${encodeURIComponent(text)}`, '_blank');
    });
}
