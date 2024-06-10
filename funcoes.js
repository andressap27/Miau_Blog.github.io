document.addEventListener("DOMContentLoaded", function() {
    // Botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Validação do formulário
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Função para exibir uma seção específica
    function showSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
});

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

// Pega o lightbox
var lightbox = document.getElementById('lightbox');

// Pega a imagem dentro do lightbox
var lightboxImg = document.querySelector('.lightbox-content');

// Pega a legenda dentro do lightbox
var captionText = document.querySelector('.caption');

// Pega todos os elementos de imagem na galeria
var imgs = document.querySelectorAll('#galeria .gallery img');

// Variável para controlar a imagem atual
var currentImgIndex = 0;

// Função para abrir o lightbox com a imagem clicada
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgs[index].src;
    captionText.innerHTML = imgs[index].alt;
    currentImgIndex = index;
}

// Função para fechar o lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Adiciona um evento de clique em cada imagem da galeria
imgs.forEach(function(img, index) {
    img.onclick = function() {
        openLightbox(index);
    }
});

// Pega os botões de navegação
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

// Adiciona um evento de clique no botão anterior
prevButton.onclick = function() {
    if (currentImgIndex > 0) {
        openLightbox(currentImgIndex - 1);
    }
}

// Adiciona um evento de clique no botão seguinte
nextButton.onclick = function() {
    if (currentImgIndex < imgs.length - 1) {
        openLightbox(currentImgIndex + 1);
    }
}

// Pega o elemento de fechar
var close = document.querySelector('.close');

// Adiciona um evento de clique no botão de fechar
close.onclick = function() {
    closeLightbox();
}
