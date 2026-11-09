
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#abf0cd'; 
        link.style.borderRadius = '50px';      
        link.style.padding = '8px 16px';       
        link.style.transition = 'background-color 0.5s';
    });

    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = 'transparent';
        link.style.borderRadius = '0';              
        link.style.padding = '0';              
    });
});


 const texinicio = document.querySelector('.resumo');
 const containerC = document.getElementById('containerC');
 

 const titus = document.createElement('h2')
 titus.innerText= 'Previsões de El Niño e La Niña'
 texinicio.insertBefore(titus, containerC);
 const resumDiv = document.createElement('div');
 const resDivPara = document.createElement('p');
 resDivPara.innerText = 'Esse site foi feito com o propósito de informar sobre o que são  El Niño e La Niña, e algumas outras perguntas como: por que ocorrem, onde ocorre, quais são as diferenças entres eles. Não só isso, como também  dizer como são previdos e como funciona o sistema de previsão.';
 resumDiv.appendChild(resDivPara);
 texinicio.insertBefore(resumDiv , containerC);

 const cardp = document.createElement('div')
 const cardptex = document.createElement('p')
 const cardtitu = document.createElement('h2');
 cardtitu.innerText = '2,6°c';
 cardptex.innerText = 'No caso de 2015-2016, o aquecimento das águas do Pacífico equatorial chegou a cerca de 2,6 °C acima da média, o maior valor já observado por instrumentos modernos. ';
 cardp.appendChild(cardtitu);
 cardp.appendChild(cardptex);
 containerC.appendChild(cardp);
 

 const carsds = document.createElement('div')
 const cardstex = document.createElement('p')
 const cardtitus= document.createElement('h2');
 cardtitus.innerText = '2023-2024';
 cardstex.innerText = 'Já em 2023-2024, as temperaturas ficaram em torno de 2 °C acima da média no auge do fenômeno, beirando o limite usado por parte da comunidade científica para definir um “super” El Niño.';
 carsds.appendChild(cardtitus);
 carsds.appendChild(cardstex);
 containerC.appendChild(carsds);

 const cartdt = document.createElement('div')
 const cardttex = document.createElement('p')
 const cardtitut= document.createElement('h2');

 

 cardtitut.innerText = '96%';
 cardttex.innerText = 'A previsão da NOAA, agência de oceanos e atmosfera dos Estados Unidos, divulgada no começo deste mês é a de que um novo episódio forte ou muito forte deve se desenvolver até o fim de 2026, com 96% de probabilidade de persistir entre dezembro deste ano e fevereiro de 2027. ';
 cartdt.appendChild(cardtitut);
 cartdt.appendChild(cardttex);
 containerC.appendChild(cartdt);
 

 cardp.classList.add('card');
 carsds.classList.add('card');
 cartdt.classList.add('card');

 const cards = document.querySelectorAll('.card');

 

 cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        card.style.width = '600px'
        card.style.height = '200px'
        card.style.fontSize = 'larger'
        containerC.style.height='590px'
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.1)';
        card.style.width = '250px'
        card.style.height = '250px'
        card.style.fontSize = 'large'
        containerC.style.height='490px'
    });

 });

