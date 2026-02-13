// Efeito de sobreposição suave durante o scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    const offset = rect.top * -0.15;
    sec.style.transform = `translateY(${offset}px)`;
  });
});
