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

  // Newsletter / contact form: prevent real submit, show inline confirmation
  document.querySelectorAll('form[data-demo-form]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const note = f.querySelector('.form-note');
      if (note) note.textContent = 'تم الإرسال! سنتواصل معك قريبًا.';
    });
  });

  // Product detail page: build everything from PRODUCTS + ?item=
  renderProductPage();
});

function renderProductPage() {
  const mainImgEl = document.getElementById('p-main-img');
  if (!mainImgEl || typeof PRODUCTS === 'undefined') return; // not on product.html

  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('item');
  const product = PRODUCTS[itemId] || PRODUCTS[Object.keys(PRODUCTS)[0]];
  if (!product) return;

  const mainWrap = document.getElementById('p-main');
  const thumbsWrap = document.getElementById('p-thumbs');
  const kicker = document.getElementById('p-kicker');
  const nameEl = document.getElementById('p-name');
  const priceEl = document.getElementById('p-price');
  const descEl = document.getElementById('p-desc');
  const colorLabel = document.getElementById('p-colorlabel');
  const swatchesWrap = document.getElementById('p-swatches');
  const accWrap = document.getElementById('p-acc');
  const relatedWrap = document.getElementById('p-related');
  const breadcrumb = document.getElementById('p-breadcrumb');
  const docTitle = document.getElementById('p-doctitle');

  // Text content
  if (docTitle) docTitle.textContent = product.name + ' | Shinny';
  if (breadcrumb) breadcrumb.textContent = 'الرئيسية / المتجر / ' + product.name;
  if (kicker) kicker.textContent = product.cat;
  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) priceEl.textContent = product.price;
  if (descEl) descEl.textContent = product.desc;

  // Photo vs illustration sizing (real photos fill the frame, SVG icons stay padded/centered)
  if (mainWrap) mainWrap.classList.toggle('photo', !!product.photo);

  // Gallery: main image + thumbnails
  function setMainImage(src) {
    mainImgEl.src = src;
    mainImgEl.alt = product.name;
  }
  setMainImage(product.images[0]);

  if (thumbsWrap) {
    thumbsWrap.innerHTML = '';
    if (product.images.length > 1) {
      product.images.forEach((src, i) => {
        const div = document.createElement('div');
        div.className = 'thumb' + (product.photo ? ' photo' : '') + (i === 0 ? ' active' : '');
        div.dataset.src = src;
        const img = document.createElement('img');
        img.src = src;
        img.alt = product.name + ' - صورة ' + (i + 1);
        div.appendChild(img);
        div.addEventListener('click', () => {
          thumbsWrap.querySelectorAll('div').forEach(x => x.classList.remove('active'));
          div.classList.add('active');
          setMainImage(src);
        });
        thumbsWrap.appendChild(div);
      });
    }
  }

  // Colors / swatches
  if (colorLabel) colorLabel.textContent = product.colors[0].name;
  if (swatchesWrap) {
    swatchesWrap.innerHTML = '';
    product.colors.forEach((c, i) => {
      const s = document.createElement('div');
      s.className = 'swatch' + (i === 0 ? ' active' : '');
      s.style.background = c.hex;
      s.dataset.name = c.name;
      s.addEventListener('click', () => {
        swatchesWrap.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
        s.classList.add('active');
        if (colorLabel) colorLabel.textContent = c.name;
      });
      swatchesWrap.appendChild(s);
    });
  }

  // Accordion (size/material, shipping, care)
  if (accWrap && product.details) {
    accWrap.innerHTML = '';
    const rows = [
      ['المقاس والخامة', product.details.size],
      ['مدة التجهيز والشحن', product.details.shipping],
      ['العناية بالقطعة', product.details.care]
    ];
    rows.forEach(([label, text], i) => {
      const details = document.createElement('details');
      details.className = 'acc-item';
      if (i === 0) details.open = true;
      const summary = document.createElement('summary');
      summary.textContent = label;
      const p = document.createElement('p');
      p.style.marginTop = '10px';
      p.textContent = text;
      details.appendChild(summary);
      details.appendChild(p);
      accWrap.appendChild(details);
    });
  }

  // Related products: same category, excluding current, up to 3
  if (relatedWrap) {
    relatedWrap.innerHTML = '';
    const relatedIds = Object.keys(PRODUCTS)
      .filter(id => id !== itemId && PRODUCTS[id].catKey === product.catKey)
      .slice(0, 3);
    // Pad with other categories if fewer than 3 matches
    if (relatedIds.length < 3) {
      Object.keys(PRODUCTS)
        .filter(id => id !== itemId && !relatedIds.includes(id))
        .forEach(id => { if (relatedIds.length < 3) relatedIds.push(id); });
    }
    relatedIds.forEach(id => {
      const p = PRODUCTS[id];
      const a = document.createElement('a');
      a.className = 'product-card';
      a.href = 'product.html?item=' + id;
      a.innerHTML =
        '<div class="thumb' + (p.photo ? ' photo' : '') + '"><img src="' + p.images[0] + '" alt="' + p.name + '"></div>' +
        '<div class="product-body"><span class="kicker">' + p.cat + '</span><h3>' + p.name + '</h3><span class="price">' + p.price + '</span></div>';
      relatedWrap.appendChild(a);
    });
  }
}
