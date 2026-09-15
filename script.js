document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Shop filters
  const filterBtns = document.querySelectorAll('.filter-row button');
  const cards = document.querySelectorAll('.product-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => {
        c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
      });
    });
  });

  // Product detail: thumbnail + swatch switching (visual only)
  const thumbs = document.querySelectorAll('.gallery-thumbs > div');
  const mainImg = document.querySelector('.gallery-main');
  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      if (mainImg && t.dataset.src) mainImg.innerHTML = t.innerHTML.replace('width="70%" height:"70%"', '');
    });
  });

  const swatches = document.querySelectorAll('.swatch');
  const colorLabel = document.querySelector('[data-color-label]');
  swatches.forEach(s => {
    s.addEventListener('click', () => {
      swatches.forEach(x => x.classList.remove('active'));
      s.classList.add('active');
      if (colorLabel) colorLabel.textContent = s.dataset.name;
    });
  });

  // Newsletter / contact form: prevent real submit, show inline confirmation
  document.querySelectorAll('form[data-demo-form]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const note = f.querySelector('.form-note');
      if (note) note.textContent = 'تم الإرسال! سنتواصل معك قريبًا.';
    });
  });
});
