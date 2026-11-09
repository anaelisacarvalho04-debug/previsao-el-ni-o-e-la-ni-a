const pagmain = document.querySelector('.equi');
const pagsec = document.querySelector('.cont');
const foto1 = document.querySelector('.foto1');
const foto2 = document.querySelector('.foto2');
const foto3 = document.querySelector('.foto3');
const foto4 = document.querySelector('.foto4');
const foto5 = document.querySelector('.foto5');



const t =document.createElement('h2');
t.innerText = ' Equipe jojo';
pagmain.insertBefore(t, pagsec);

const divcont1 = document.createElement ('div');
const nome1 = document.createElement ('h3')
const pcont1= document.createElement ('p');
nome1.innerText = 'Marcos-Desenvolvedor Designer UI/UX';
pcont1.innerText = 'Responsavel por estilizar a interface com css, garantindo um visual limpo, moderno e intuitivo. Marcos cuidou da identidade visual das seções sobre o El Niño e a La Niña, transformando dados climáticos complexos em layouts acessiveis e agradáveis para leitura';
divcont1.appendChild(pcont1);
divcont1.appendChild(nome1);
divcont1.insertBefore(nome1,pcont1);
pagsec.appendChild(divcont1);
divcont1.appendChild(foto1);

const divcont2 = document.createElement ('div');
const nome2 = document.createElement ('h3');
const pcont2 = document.createElement ('p');
nome2.innerText = 'Ana Elisa-Arquiteta Front-End';
pcont2.innerText ='Responsável por estrutura a arquitetura HTML e criar layouts. Ana Elisa também integrou os scripts JavaScript responsáveis pelo texto.';
divcont2.appendChild(pcont2);
divcont2.appendChild(nome2);
divcont2.insertBefore (nome2 ,pcont2);
pagsec.appendChild(divcont2);
divcont2.appendChild(foto2);


const divcont3 = document.createElement ('div');
const nome3 = document.createElement ('h3');
const pcont3 = document.createElement ('p');
nome3.innerText = 'Ian-Desenvolvedor de Interatividade e Animações';
pcont3.innerText ='Implemetou os gráficos interativos e os componentes visuais que explicam as fases de aquecimentos e resfriamento do Pacífico. É o responsável por dar vida aos dados científicos com animações leves em JavaScript.';
divcont3.appendChild(pcont3);
divcont3.appendChild(nome3);
divcont3.insertBefore (nome3 ,pcont3);
pagsec.appendChild(divcont3);
divcont3.appendChild(foto3);


const divcont4 = document.createElement ('div');
const nome4 = document.createElement ('h3');
const pcont4 = document.createElement ('p');
nome4.innerText = 'Miguel Sodré-Pesquisador de Conteúdo e Desenvolvedor Front-End';
pcont4.innerText ='Uniu o rigor científico á programação. Além de redigir e organizar os texto explicativos sobre os fenômenos, Miguel ajudou a estruturar as páginas e a garantir que a semântica do código estivesse otimizada para SEO e leitura';
divcont4.appendChild(pcont4);
divcont4.appendChild(nome4);
divcont4.insertBefore (nome4 ,pcont4);
pagsec.appendChild(divcont4);
divcont4.appendChild(foto4);


const divcont5 = document.createElement ('div');
const nome5 = document.createElement ('h3');
const pcont5 = document.createElement ('p');
nome5.innerText = 'Daniel- O conector da Plataforma';
pcont5.innerText ='Ele faz parte da equipe do Portal, onde o nosso trabalho sobre El Niño e La Niña  será oficialmente publicado e hospedado. graça a ele, a transição e a incorporação do nosso projeto no Portal principal acontecerão sem conflitos do código ou layout';
divcont5.appendChild(pcont5);
divcont5.appendChild(nome5);
divcont5.insertBefore (nome5 ,pcont5);
pagsec.appendChild(divcont5);
divcont5.appendChild(foto5);
