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
    "assets/images/cabecalho/img1.png",
    "assets/images/cabecalho/img2.png",
    "assets/images/cabecalho/img3.png",
    "assets/images/cabecalho/img4.png",
    "assets/images/cabecalho/img5.png",
    "assets/images/cabecalho/img6.png",
    "assets/images/cabecalho/img7.png",
    "assets/images/cabecalho/img8.png"
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

document.addEventListener("DOMContentLoaded", function() {
    const thirdSectionLeftDiv = document.getElementById("imageContainer");
    const textContainer = document.querySelector(".thirdsection-rightdiv");
    const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
    const texts = [
        "Este é um depoimento sobre a nossa experiência com nosso querido pet. Ele sempre nos enche de alegria e amor.",
        "Nossa jornada com nosso amado animal de estimação tem sido incrível. Ele é parte da nossa família e traz muita felicidade aos nossos dias.",
        "Estamos gratos por todos os momentos maravilhosos que compartilhamos com nosso pet. Ele é verdadeiramente especial para nós."
    ];
    let currentIndex = 0;

    function changeBackgroundAndText() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = `assets/images/depoimentos/${images[currentIndex]}`;
        const currentText = texts[currentIndex];
        thirdSectionLeftDiv.style.backgroundImage = `url('${imageUrl}')`;
        textContainer.innerHTML = `<p>${currentText}</p>`;
    }

    // Altera o plano de fundo e o texto a cada 5 segundos (5000 ms)
    setInterval(changeBackgroundAndText, 5000);

    const botaoAbrir = document.getElementById('botaoAbrir');
    const botaoVoltarExterno = document.getElementById('botaoVoltarExterno');
    const botaoVoltarInterno = document.getElementById('botaoVoltarInterno');
    const quadradoExterno = document.getElementById('quadradoExterno');
    const quadradoInterno = document.getElementById('quadradoInterno');
    const botoesInternos = document.querySelectorAll('.botaoInterno');
    const textoInternos = document.querySelectorAll('.textoInterno');

    botaoAbrir.addEventListener('click', () => {
        quadradoExterno.style.display = 'block';
        botaoAbrir.style.display = 'none'; // Esconde o botão "Abrir"
    });

    botaoVoltarExterno.addEventListener('click', () => {
        quadradoExterno.style.display = 'none';
        quadradoInterno.style.display = 'none';
         botaoAbrir.style.display = 'block'; // Mostra o botão "Abrir" novamente
    });

    botoesInternos.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            quadradoExterno.style.display = 'none';
            quadradoInterno.style.display = 'block';
           

            // Exibe o texto correspondente ao botão clicado
            textoInternos.forEach((texto, textoIndex) => {
                texto.style.display = textoIndex === index ? 'block' : 'none';
            });
        });
    });

    botaoVoltarInterno.addEventListener('click', () => {
        quadradoExterno.style.display = 'block';
        quadradoInterno.style.display = 'none';
    });
});


