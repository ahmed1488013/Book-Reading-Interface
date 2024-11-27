// تغيير حجم الخط
const fontSizeSlider = document.getElementById('font-size-slider');
const readingArea = document.getElementById('reading-area');

fontSizeSlider.addEventListener('input', (e) => {
  readingArea.style.fontSize = `${e.target.value}px`;
});

// تغيير لون الخلفية
const creamBg = document.getElementById('cream-bg');
const whiteBg = document.getElementById('white-bg');
const nightMode = document.getElementById('night-mode');

creamBg.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FAF3E0';
  document.body.style.color = '#2E2E2E';
});

whiteBg.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.color = '#2E2E2E';
});

nightMode.addEventListener('click', () => {
  document.body.style.backgroundColor = '#2E2E2E';
  document.body.style.color = '#FAF3E0';
});

// عرض وإخفاء نافذة الإعدادات
const settingsBtn = document.getElementById('settings-btn');
const settingsFooterBtn = document.getElementById('settings-footer-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');

settingsBtn.addEventListener('click', () => {
  settingsModal.style.display = 'flex';
});

settingsFooterBtn.addEventListener('click', () => {
  settingsModal.style.display = 'flex';
});

closeSettings.addEventListener('click', () => {
  settingsModal.style.display = 'none';
});
