// main.js

// Array com os nomes das imagens do logotipo
var logoImages = [
    "logo1.png", 
    "logo2.png", 
    "logo3.png", 
    "logo4.png", 
    "logo5.png", 
    "logo6.png", 
    "logo7.png", 
    "logo8.png"
];

// Array com os nomes das imagens de cabeçalho
var headerImages = [
    "./images/img1.png",
    "./images/img2.png",
    "./images/img3.png",
    "./images/img4.png",
    "./images/img5.png",
    "./images/img6.png",
    "./images/img7.png",
    "./images/img8.png"
  ];

// Função para atualizar o logotipo de forma aleatória
function updateRandomLogo() {
    var randomIndex = Math.floor(Math.random() * logoImages.length);
    var logoImage = document.getElementById("logoImage");
    logoImage.src = "./assets/images/logo/" + logoImages[randomIndex];
    var firstSectionRightDiv = document.querySelector(".firstsection-rightdiv");
    firstSectionRightDiv.style.backgroundImage = `url('${headerImages[randomIndex]}')`;
}

// Chame a função para atualizar o logotipo quando a página for carregada
window.onload = function () {
    updateRandomLogo();
};




