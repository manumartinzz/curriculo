// Particle effect function
function createParticles(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle particle-spark';
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#a855f7';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 8px #c084fc';

    const angle = (Math.PI * 2 * i) / 8;
    const velocity = 60 + Math.random() * 40;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  }
}

// Add glow effect to all info cards on hover
document.addEventListener('mouseover', (event) => {
  const card = event.target.closest('.card-glow');

  if (card && !card.classList.contains('glow-pulse')) {
    card.classList.add('glow-pulse');
    createParticles(card);
  }
});

// Tab Navigation
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;

    contents.forEach((content) => {
      content.classList.add('hidden');
      content.classList.remove('fade-in');
    });

    const element = document.getElementById('tab-' + target);
    element.classList.remove('hidden');

    // Reinicia a animação de entrada.
    void element.offsetWidth;
    element.classList.add('fade-in');
  });
});

// Cria os ícones do Lucide quando a biblioteca estiver carregada.
if (window.lucide) {
  lucide.createIcons();
}

// Image Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.gallery-slot img').forEach(img => {
  img.parentElement.addEventListener('click', () => {
    modal.classList.add('active');
    modal.classList.remove('hidden');
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden'; // Previne scroll
  });
});

const handleClose = () => {
  modal.classList.remove('active');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Restaura scroll
};

closeModal.addEventListener('click', handleClose);
modal.addEventListener('click', (e) => {
  if (e.target === modal) handleClose();
});
