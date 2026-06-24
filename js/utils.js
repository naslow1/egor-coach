/* ═══════════════════════════════════════
   SHARED UTILITIES
   ═══════════════════════════════════════ */

// ── CURSOR GLOW ──
export function initCursorGlow() {
  const el = document.getElementById('cursorGlow');
  if (!el || window.innerWidth < 768) return;
  document.addEventListener('mousemove', e => {
    el.style.left = e.clientX + 'px';
    el.style.top  = e.clientY + 'px';
  });
}

// ── NAV SCROLL ──
export function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  const burger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn  = document.querySelector('.mobile-menu-close');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeBtn?.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // active link
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

// ── SCROLL REVEAL ──
export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// ── COUNTER ANIMATION ──
export function animateCounter(el, target, duration = 1800, suffix = '') {
  const startTime = performance.now();
  const update = now => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

export function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target  = parseInt(e.target.dataset.count);
      const suffix  = e.target.dataset.suffix || '';
      animateCounter(e.target, target, 1800, suffix);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// ── PROGRESS BARS ──
export function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animate');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => obs.observe(b));
}

// ── MODAL ──
export function openModal(id = 'modal') {
  document.getElementById(id)?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
export function closeModal(id = 'modal') {
  document.getElementById(id)?.classList.remove('active');
  document.body.style.overflow = '';
}
export function initModal(id = 'modal') {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(id);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal(id);
  });
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(btn.dataset.modal || id);
    });
  });
}

// ── MODAL FORM SUBMIT ──
export function initModalForm(formId, successHtml) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const box = form.closest('.modal-box');
    box.innerHTML = successHtml;
  });
}

// ── BEAT LINE SVG (cardiogram animation) ──
export function drawBeatLine(containerId, color = '#E8A020', speed = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1200 60');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.cssText = 'width:100%;height:100%;';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  // cardiogram shape pattern
  const beat = `M0,30 L80,30 L100,30 L115,5 L130,55 L145,10 L158,48 L170,30 L250,30 L330,30 L345,5 L360,55 L375,10 L388,48 L400,30 L480,30 L560,30 L575,5 L590,55 L605,10 L618,48 L630,30 L710,30 L790,30 L805,5 L820,55 L835,10 L848,48 L860,30 L940,30 L1020,30 L1035,5 L1050,55 L1065,10 L1078,48 L1090,30 L1200,30`;

  path.setAttribute('d', beat);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', color);
  path.setAttribute('stroke-width', '2');
  path.setAttribute('opacity', '0.5');

  const pathLen = 2000;
  path.style.strokeDasharray  = pathLen;
  path.style.strokeDashoffset = pathLen;
  path.style.transition = `stroke-dashoffset ${speed}s linear infinite`;

  svg.appendChild(path);
  container.appendChild(svg);

  let offset = pathLen;
  const animate = () => {
    offset -= 3;
    if (offset < -pathLen) offset = pathLen;
    path.style.strokeDashoffset = offset;
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

// ── INIT ALL ──
export function initAll() {
  initCursorGlow();
  initNav();
  initReveal();
  initCounters();
  initProgressBars();
  initModal();
}