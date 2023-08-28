// main.js

// Array com os nomes das imagens do logotipo
var logoImages = ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png", "logo7.png", "logo8.png"];

// Função para atualizar o logotipo de forma aleatória
function updateRandomLogo() {
    var randomIndex = Math.floor(Math.random() * logoImages.length);
    var logoImage = document.getElementById("logoImage");
    logoImage.src = "./assets/images/logo/" + logoImages[randomIndex];
}

// Chame a função para atualizar o logotipo quando a página for carregada
window.onload = function () {
    updateRandomLogo();
};

// Você pode chamar a função updateRandomLogo() novamente em qualquer momento para alterar o logotipo aleatoriamente.
// Por exemplo, você pode chamá-lo quando o usuário clicar em um botão ou em outro evento.
