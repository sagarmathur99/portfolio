console.log('script.js loaded');

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => observer.observe(el));
});

const heroButton = document.querySelector('.btn.primary');

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2800);
}

if (heroButton) {
  heroButton.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('Thanks for visiting my portfolio!');
  });
}