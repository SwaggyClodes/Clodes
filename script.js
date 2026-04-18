// Scroll-reveal for sections using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Add border to nav once the user scrolls past the hero
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

// Auto-update the copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Click-to-copy Discord username
const copyBtn = document.getElementById('copyDiscord');
const copyLabel = document.getElementById('copyLabel');
if (copyBtn && copyLabel) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('swaggyclodes');
      copyBtn.classList.add('is-copied');
      copyLabel.textContent = 'Copied ✓';
      setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        copyLabel.textContent = 'Copy';
      }, 1800);
    } catch {
      copyLabel.textContent = 'Copy failed';
    }
  });
}
