let slideIndex = 1; // Aqui está declarando uma variavél javascript, definido com o nome:slideIndex, atribuindo o seu valor.
showSlides(slideIndex); // Aqui basicamente esta chamando a função slideIndex.

function plusSlides(n) { // Essa linha esta definindo uma função chamada plusSlides que com o parametro 'n' para definir a quantidade de slides.
    showSlides(slideIndex += n);// Essa função realiza duas operações simultaneamente: incrementa o valor de slideIndex por n e em seguida chama a função showSlides com o novo valor de slideIndex.
}

function currentSlide(n) { // função javascript usada para mostrar um slide especifico. 
    showSlides(slideIndex = n); // realiza duas operções simultaneamente: atribuindo o valor 'n' para slideIndex depois chama a funçao com um novo valor.
}

function showSlides(n) { // Define o inicio de uma função e recebe o seu parâmetro 'n'.
    let i; // Declarando uma variavel i
    let slides = document.getElementsByClassName("mySlides"); // Declara a variavel 'slides' document.getElementsByClassName: representa o documento HTML e faz o retorno do documento.   let slides = document.getElementsByClassName("mySlides");
    let pontos = document.getElementsByClassName("ponto"); // Declara a variavel 'pontos' document.getElementsByClassName: representa o documento HTML e faz o retorno do documento.   let pontos = document.getElementsByClassName("ponto");

    if (n > slides.length) { // Aqui verifica se o valor da variavel 'n' é maior que a coleção dos slides. 
        slideIndex = 1 // aqui volta para o primeiro slide.
    }
    
    if (n < 1) {  // Aqui verifica se o valor da variável 'n' é menor que '1' 
        slideIndex = slides.length //Vai para o último slide.
    }
    
    for (i = 0; i < slides.length; i++) { // Uma estrutura de repetição: variável 'i' e inicializa com o valor '0' < slides.length; define a condicão, i++ faz o incremen 
        slides[i].style.display = "none";// É usadado para esconder um elemento quando voçê desejar exibir um slide por vez, e controlar a visibilidade.
    }
    
    for (i = 0; i < pontos.length; i++) { // É uma estrutura de loop, ultilizado para controle de fluxo. Este tipo de loop é frequentemente usado para iterar sobre elementos em uma coleção, como uma lista de pontos em um slideshow, uma lista de itens em um menu
        pontos[i].className = pontos[i].className.replace(" active", ""); // Manipula classes do elementos do DOM. remove a classe CSS "active" de um elemento específico dentro de uma coleção de elementos pontos.
    }
    
    slides[slideIndex - 1].style.display = "block"; //Esta lina exibe o slide [slideIndex -1]  e define qual slide deve ser mostrado.
    
    pontos[slideIndex - 1].className += " active"; // adicona a clsse "active" ao ponto de navegação correspondente ao slide atual.
}


/*parte 3

Bsicamente esse é uma função para controlar a navegação entres os slides, recebe um parametro 'n'  e indica qual slide vai ser mostrado faz os ajuste. 
remove as marcações e exibe o slide correto, assim ele percorre todo carrossel e exibe corretamente no final.



*/

