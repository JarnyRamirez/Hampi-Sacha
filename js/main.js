// Nav scroll state + mobile toggle
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// WhatsApp contact form (only present on the homepage)
const WHATSAPP_NUMBER = '51974471418';
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const experience = form.experience.value;
    const date = form.date.value;
    const message = form.message.value.trim();

    let text = `Hola Hampi Sacha, soy ${name}.`;
    text += ` Me interesa: ${experience}.`;
    if (date) text += ` Fecha tentativa: ${date}.`;
    if (message) text += ` ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}
