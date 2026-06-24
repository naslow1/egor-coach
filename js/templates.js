/* ═══════════════════════════════════════
   SHARED HTML TEMPLATES
   ═══════════════════════════════════════ */

export const NAV_HTML = (root = '') => `
<nav class="nav" id="navbar">
  <a class="nav-logo" href="${root}index.html">ЕГОР <span>.</span></a>
  <ul class="nav-links">
    <li><a href="${root}index.html">Главная</a></li>
    <li><a href="${root}pages/about.html">О тренере</a></li>
    <li><a href="${root}pages/programs.html">Программы</a></li>
    <li><a href="${root}pages/nutrition.html">Питание</a></li>
    <li><a href="${root}pages/contact.html">Контакты</a></li>
  </ul>
  <a class="nav-cta btn" href="#" data-modal="modal">Записаться</a>
  <button class="nav-hamburger" aria-label="Меню">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-menu-close">✕</button>
  <a href="${root}index.html">Главная</a>
  <a href="${root}pages/about.html">О тренере</a>
  <a href="${root}pages/programs.html">Программы</a>
  <a href="${root}pages/nutrition.html">Питание</a>
  <a href="${root}pages/contact.html">Контакты</a>
  <a href="#" data-modal="modal" style="color:var(--amber)">Записаться →</a>
</div>
`;

export const TICKER_HTML = `
<div class="ticker-wrap">
  <div class="ticker">
    <span class="ticker-item">Борьба</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Дисциплина</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Характер</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Сила духа</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Победа</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Результат</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Борьба</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Дисциплина</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Характер</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Сила духа</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Победа</span><span class="ticker-item ticker-dot">✦</span>
    <span class="ticker-item">Результат</span><span class="ticker-item ticker-dot">✦</span>
  </div>
</div>
`;

export const FOOTER_HTML = (root = '') => `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="nav-logo">ЕГОР <span>.</span></div>
      <p>Тренер по борьбе. Бывший спортсмен — сейчас помогаю другим раскрыть свой потенциал.</p>
    </div>
    <div class="footer-col">
      <h4>Навигация</h4>
      <ul>
        <li><a href="${root}index.html">Главная</a></li>
        <li><a href="${root}pages/about.html">О тренере</a></li>
        <li><a href="${root}pages/programs.html">Программы</a></li>
        <li><a href="${root}pages/nutrition.html">Питание & КБЖУ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Программы</h4>
      <ul>
        <li><a href="${root}pages/programs.html#kids">Детская группа</a></li>
        <li><a href="${root}pages/programs.html#individual">Индивидуально</a></li>
        <li><a href="${root}pages/programs.html#competition">Соревнования</a></li>
        <li><a href="${root}pages/nutrition.html">План питания</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Контакты</h4>
      <ul>
        <li><a href="https://t.me/goga_rus" target="_blank">Telegram</a></li>
        <li><a href="https://instagram.com/goga_rus" target="_blank">Instagram</a></li>
        <li><a href="${root}pages/contact.html">Написать</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2024 Егор — Тренер по борьбе</div>
    <div class="social-links">
      <a class="social-link" href="https://t.me/goga_rus" target="_blank" title="Telegram">✈</a>
      <a class="social-link" href="https://instagram.com/goga_rus" target="_blank" title="Instagram">◈</a>
      <a class="social-link" href="https://vk.com/goga_rus" target="_blank" title="ВКонтакте">V</a>
    </div>
  </div>
</footer>
`;

export const MODAL_HTML = `
<div class="modal-overlay" id="modal">
  <div class="modal-box">
    <button class="modal-close" onclick="import('../js/utils.js').then(m=>m.closeModal())">✕</button>
    <h3>Записаться на <em>тренировку</em></h3>
    <p>Заполните форму — свяжусь в течение нескольких часов и обговорим детали.</p>
    <form id="signupForm">
      <div class="form-group">
        <label>Имя</label>
        <input type="text" name="name" placeholder="Иван Иванов" required>
      </div>
      <div class="form-group">
        <label>Телефон / Telegram</label>
        <input type="text" name="phone" placeholder="+7 900 000-00-00" required>
      </div>
      <div class="form-group">
        <label>Программа</label>
        <select name="program">
          <option>Детская группа (6–16 лет)</option>
          <option>Индивидуальная тренировка</option>
          <option>Подготовка к соревнованиям</option>
          <option>Расчёт КБЖУ + план питания</option>
          <option>Не знаю — хочу посоветоваться</option>
        </select>
      </div>
      <div class="form-group">
        <label>Коротко о себе (необязательно)</label>
        <textarea name="about" placeholder="Возраст, цели, уровень..." rows="3"></textarea>
      </div>
      <button type="submit" class="modal-submit">Отправить заявку →</button>
    </form>
  </div>
</div>
`;