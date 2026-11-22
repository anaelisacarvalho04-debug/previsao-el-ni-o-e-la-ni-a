//os três destaques da página inicial: número, título e explicação
const numeros = [
    {
        valor: '2,6 °C',
        texto: 'Em 2015-2016, o Pacífico equatorial chegou a cerca de 2,6 °C acima da média, o maior valor já medido por instrumentos modernos.'
    },
    {
        valor: '2023-2024',
        texto: 'No auge desse El Niño, a água ficou cerca de 2 °C acima da média, perto do limite usado para chamar um evento de "super".'
    },
    {
        valor: '+2,5 °C',
        texto: 'Em novembro de 2026, o índice Niño-3.4 chegou a +2,5 °C, segundo a NOAA. A chance de um El Niño forte a muito forte até março de 2027 é maior que 79%.'
    }
];

const containerNumeros = document.querySelector('#numeros');

//cria um cartão para cada destaque
numeros.forEach(item => {
    const cartao = document.createElement('div');
    cartao.classList.add('i-numero');

    const valor = document.createElement('strong');
    valor.textContent = item.valor;

    const texto = document.createElement('p');
    texto.textContent = item.texto;

    cartao.appendChild(valor);
    cartao.appendChild(texto);
    containerNumeros.appendChild(cartao);
});
