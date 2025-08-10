// Rok vo footeri
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu – zavrieť po kliknutí na odkaz
const navToggle = document.getElementById('nav-toggle');
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
});

// --- NOVÁ LOGIKA ZOBRAZENIA HEADERA ---
const header = document.getElementById('site-header');
const topZone = document.querySelector('.top-hover-zone');
const backToTopBtn = document.getElementById('backToTop');

function showHeader(){
  header.classList.remove('hidden');
}
function hideHeader(){
  // Skry len vtedy, ak nie si úplne hore
  if (window.scrollY > 0) header.classList.add('hidden');
}

// 1) Pri scrollovaní: ukáž len ak si úplne hore, inak skry
function onScroll(){
  if (window.scrollY <= 0) {
    showHeader();
  } else {
    hideHeader();
  }

  // Back-to-top tlačidlo
  if (window.scrollY > 300) backToTopBtn.classList.add('show');
  else backToTopBtn.classList.remove('show');
}
window.addEventListener('scroll', onScroll);
onScroll(); // inicializácia stavu po načítaní

// 2) Hover zóna hore – ukáže header
if (topZone){
  topZone.addEventListener('mouseenter', showHeader);
  topZone.addEventListener('mouseleave', hideHeader);
}

// 3) Keď prejdeš myšou priamo na header, nech ostane viditeľný
header.addEventListener('mouseenter', showHeader);
header.addEventListener('mouseleave', hideHeader);

// Späť hore
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
