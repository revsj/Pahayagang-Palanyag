const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Show the mobile menu
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

// Hide the mobile menu
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

//Search Bar//
const articles = [
  { title: "Ang Pahayagang Palanyag : A Three-Part Narrative", url: "Article1.html" },
  { title: "PULO: TADYANG NG SAN DIONISIO", url: "Article2.html" },
  { title: "announcement", url: "ann.html" },
  { title: "about", url: "about.html" },
  { title: "archives", url: "arch.html" },
  { title: "contact us", url: "cn.html" },
  { title: "Homepage", url: "index.html" },
];

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const form = document.getElementById('searchForm');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  suggestions.innerHTML = '';
  if (!query) {
    suggestions.classList.add('hidden');
    return;
  }
  const matches = articles.filter(article => article.title.toLowerCase().includes(query));
  if (matches.length === 0) {
    suggestions.classList.add('hidden');
    return;
  }
  matches.forEach(article => {
    const li = document.createElement('li');
    li.className = "px-4 py-2 hover:bg-sky-100 cursor-pointer";
    li.textContent = article.title;
    li.onclick = () => window.location.href = article.url;
    suggestions.appendChild(li);
  });
  suggestions.classList.remove('hidden');
});


document.addEventListener('click', (e) => {
  if (!form.contains(e.target)) {
    suggestions.classList.add('hidden');
  }
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
});
