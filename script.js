// Tabs
document.querySelectorAll('.product-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.product-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Nav highlight
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.bcard, .step-card, .product, .press-card-v2, .kpi, .benefit').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
