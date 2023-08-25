// Favicon Dark/Light Mode

// Obtém a tag de favicon do documento HTML.
const faviconTag = document.getElementById('favicon_tag');

// Verifica se o usuário tem uma preferência por modo escuro.
const isDark = window.matchMedia('(prefers-color-scheme: dark)');

// Função para trocar o favicon com base no modo de cor preferido.
// Provavelmente nosso código usará um favicon normal
const changeFavicon = () => {
if (isDark.matches)
faviconTag.href = './assets/img/favicon.png'; // Define o favicon escuro.
else
  faviconTag.href = './assets/img/favicon.png'; // Define o favicon claro.
};

// Inicialmente, chama a função para definir o favicon com base nas preferências do usuário.
changeFavicon();

// Configura um intervalo para verificar periodicamente o modo de cor preferido e atualizar o favicon.
setInterval(changeFavicon, 1000);

// Menu Toggle

// Obtém elementos HTML relacionados ao menu.
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

// Adiciona um ouvinte de evento de clique ao botão de alternância do menu.
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Alterna a visibilidade do menu.
});

// Adiciona um ouvinte de evento de clique ao botão de fechamento do menu.
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show'); // Fecha o menu.
});

// Aplica animações usando a biblioteca GSAP a vários elementos da página.
gsap.from('.nav_logo, .nav_toggle', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 10,
});

gsap.from('.nav_item', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});
