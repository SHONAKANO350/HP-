(function () {
  // 現在地ナビのハイライト(plan.md 4-1節のロジックを踏襲)
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((el) => {
    if (el.dataset.nav === page) el.classList.add('is-active');
  });

  // フッターのコピーライト年号を自動出力(copy.md 冒頭の申し送り通り)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // モバイル用ハンバーガーメニューの開閉
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
