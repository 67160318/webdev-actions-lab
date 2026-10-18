const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const status = document.getElementById('status');
const helloBtn = document.getElementById('helloBtn');

function applyTheme(t){
  root.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch(e) {}
applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch(e) {}
});

let count = 0;
helloBtn.addEventListener('click', () => {
  count++;
  status.textContent = `สวัสดีครับ! คุณทักทายมาแล้ว ${count} ครั้ง`;
});
