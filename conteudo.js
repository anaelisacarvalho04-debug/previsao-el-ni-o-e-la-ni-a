/* =========================================================
   1. ETAPAS DA PREVISÃO (ferramentas digitais)
   ========================================================= */

//cada etapa é um objeto: título, explicação, ferramentas usadas e o padrão que se procura
const etapas = [
    {
        nome: '1. Observar',
        titulo: 'Observar o oceano e a atmosfera',
        texto: 'Tudo começa com medições contínuas do Pacífico equatorial. Nenhum modelo funciona sem dados reais para começar.',
        ferramentas: [
            'Boias fixas da rede TAO/TRITON, pensada com cerca de 70 boias que enviam em tempo real vento, temperatura do ar e da água (em 10 profundidades, até 500 m).',
            'Flutuadores Argo, cerca de 3.000 no mundo, que medem temperatura e salinidade até 2.000 m.',
            'Satélites, que acompanham o nível do mar, a temperatura da superfície e as nuvens.',
            'Estações em superfície e balões, que registram pressão, umidade e ventos.'
        ],
        padrao: 'Padrão procurado: água quente em profundidade (termoclina mais funda) e ventos alísios enfraquecidos. No boletim de novembro de 2026, o calor subsuperficial seguia bem acima da média, com anomalias acima de +10 °C em profundidade no Pacífico leste.'
    },
    {
        nome: '2. Assimilar',
        titulo: 'Assimilar e organizar os dados',
        texto: 'Os computadores limpam, comparam e encaixam medições de fontes diferentes em uma grade global. Essa técnica se chama assimilação de dados e gera um retrato o mais fiel possível do estado atual do oceano e da atmosfera.',
        ferramentas: [
            'Sistemas de assimilação que juntam boias, Argo e satélites.',
            'Índices calculados em cima dessa grade: Niño-3.4, ONI/RONI e o Índice de Oscilação Sul.'
        ],
        padrao: 'Padrão procurado: o oceano e a atmosfera mudando juntos. Em novembro de 2026, a chuva estava reforçada do Pacífico central ao leste e suprimida na Indonésia, e o Índice de Oscilação Sul se mantinha negativo.'
    },
    {
        nome: '3. Simular',
        titulo: 'Simular o futuro em supercomputadores',
        texto: 'Modelos acoplados de oceano, atmosfera e superfície terrestre resolvem equações da física em milhões de células tridimensionais, avançando no tempo passo a passo. Como são trilhões de cálculos, rodam em supercomputadores.',
        ferramentas: [
            'Modelos globais, como o CFSv2 (Climate Forecast System versão 2) do centro americano NCEP.',
            'Ensembles: o mesmo modelo é rodado várias vezes, com pequenas variações iniciais, para estimar probabilidades.',
            'Consenso entre modelos: a previsão oficial da NOAA combina vários sistemas, da América do Norte e de outros países.'
        ],
        padrao: 'Padrão procurado: quantos cenários apontam para El Niño, La Niña ou neutralidade em cada trimestre, e com que força.'
    },
    {
        nome: '4. Usar IA',
        titulo: 'Inteligência artificial como reforço',
        texto: 'A IA entra como complemento dos modelos físicos, não como substituta. Em 2019, pesquisadores sul-coreanos mostraram que uma rede neural convolucional, a mesma técnica de reconhecimento de imagens, conseguia indicar eventos de El Niño com até 18 meses de antecedência, quando os melhores métodos da época iam até cerca de um ano.',
        ferramentas: [
            'Detecção de padrões ocultos em décadas de dados de temperatura, ventos e calor subsuperficial.',
            'Aprendizado por transferência: o modelo treina com simulações climáticas e reanálises (cerca de 3.000 amostras por mês, contra cerca de 150 medições reais) e depois é aplicado aos dados observados.',
            'Correção de vieses: a IA compara o que o modelo previu com o que aconteceu e corrige erros sistemáticos.',
            'Emuladores de tempo com IA, como Pangu-Weather, FuXi, AIFS, GraphCast e Aurora, hoje comparados com modelos tradicionais em previsões de semanas e meses.',
            'Modelos híbridos, que unem as equações da física ao reconhecimento de padrões.'
        ],
        padrao: 'Padrão procurado: sinais precoces que regras simples não captam, como água anormalmente quente no Pacífico tropical ou no Oceano Índico meses antes de o evento se formar.'
    },
    {
        nome: '5. Comunicar',
        titulo: 'Transformar a previsão em aviso',
        texto: 'O resultado vira boletim, mapa e alerta. É nessa etapa que a previsão chega a quem precisa decidir: agricultores, defesa civil e gestores de água.',
        ferramentas: [
            'NOAA: discussão mensal do ENSO, com atualizações semanais e probabilidades por trimestre.',
            'Brasil: Painel El Niño 2026-2027, boletim mensal do Inmet com o Cemaden, o Serviço Geológico do Brasil, a Defesa Civil e outros órgãos federais.',
            'Monitor de Secas, da ANA, e as previsões sazonais do CPTEC/INPE, Inmet e Funceme.'
        ],
        padrao: 'Padrão procurado: onde a chance de chuva acima ou abaixo da média sobe, para agir antes do desastre. A previsão aponta aumentos de probabilidade e não um desastre específico.'
    }
];

const etapasBotoes = document.querySelector('#etapas');
const etapaConteudo = document.querySelector('#etapa-conteudo');

//mostra o conteúdo da etapa escolhida
function mostrarEtapa(indice) {
    const etapa = etapas[indice];

    //marca só o botão da etapa escolhida
    etapasBotoes.querySelectorAll('.etapa-btn').forEach((botao, i) => {
        botao.setAttribute('aria-selected', i === indice ? 'true' : 'false');
    });

    //limpa o conteúdo anterior
    etapaConteudo.innerHTML = '';

    const titulo = document.createElement('h4');
    titulo.textContent = etapa.titulo;
    etapaConteudo.appendChild(titulo);

    const texto = document.createElement('p');
    texto.textContent = etapa.texto;
    etapaConteudo.appendChild(texto);

    const lista = document.createElement('ul');
    etapa.ferramentas.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
    etapaConteudo.appendChild(lista);

    const padrao = document.createElement('p');
    padrao.classList.add('etapa-padrao');
    padrao.textContent = etapa.padrao;
    etapaConteudo.appendChild(padrao);
}

//cria um botão para cada etapa
etapas.forEach((etapa, i) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.classList.add('etapa-btn');
    botao.setAttribute('role', 'tab');
    botao.textContent = etapa.nome;
    botao.addEventListener('click', () => mostrarEtapa(i));
    etapasBotoes.appendChild(botao);
});

mostrarEtapa(0);


/* =========================================================
   2. SIMULADOR: DO DADO AO DIAGNÓSTICO
   ========================================================= */

const formSim = document.querySelector('#simulador');
const campos = formSim.querySelectorAll('input');
const marcador = document.querySelector('#marcador');
const simResultado = document.querySelector('#sim-resultado');

//a escala do medidor vai de -2,5 °C até +3 °C
const ESCALA_MIN = -2.5;
const ESCALA_MAX = 3;

//converte a média em fase (El Niño, La Niña ou neutro) e intensidade
function classificar(media) {
    const forca = Math.abs(media);
    let intensidade = '';

    if (forca >= 2.0) intensidade = 'muito forte';
    else if (forca >= 1.5) intensidade = 'forte';
    else if (forca >= 1.0) intensidade = 'moderado';
    else intensidade = 'fraco';

    if (media >= 0.5) {
        const nome = intensidade === 'muito forte' ? 'El Niño muito forte (Super El Niño)' : 'El Niño ' + intensidade;
        return nome;
    }
    if (media <= -0.5) {
        //La Niña é feminino: moderada, fraca
        const fem = intensidade.replace('moderado', 'moderada').replace('fraco', 'fraca');
        return 'La Niña ' + fem;
    }
    return 'condições neutras';
}

//lê os três campos, calcula a média de 3 meses e atualiza a tela
function atualizarSimulador() {
    const valores = [...campos].map(c => parseFloat(c.value.replace(',', '.')));

    //confere se os três campos têm número válido
    if (valores.some(v => Number.isNaN(v) || v < -5 || v > 5)) {
        simResultado.textContent = 'Digite três valores entre -5 e +5 °C.';
        return;
    }

    const media = valores.reduce((soma, v) => soma + v, 0) / valores.length;

    //posição do marcador na barra, limitada entre 0% e 100%
    const posicao = (media - ESCALA_MIN) / (ESCALA_MAX - ESCALA_MIN) * 100;
    marcador.style.left = Math.min(100, Math.max(0, posicao)) + '%';

    const mediaTexto = media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'exceptZero' });
    simResultado.textContent = `Média de 3 meses: ${mediaTexto} °C. Diagnóstico: ${classificar(media)}.`;
}

campos.forEach(c => c.addEventListener('input', atualizarSimulador));
formSim.addEventListener('submit', e => e.preventDefault());
atualizarSimulador();


/* =========================================================
   3. QUIZ
   ========================================================= */

//declaração de variáveis
const perguntas = document.querySelectorAll('.pergunta');
const opcoes = document.querySelectorAll('.opcao');
const responder = document.querySelector('#responder');
const refazer = document.querySelector('#refazer');
const resultado = document.querySelector('#resultado');
let respondido = false;

//o botão "Responder" pode ser clicado quando todas as perguntas tiverem tido uma opção marcada
function atualizarBotao() {
    const todas = [...perguntas].every(p => p.querySelector('.opcao.active'));
    responder.disabled = !todas;
}

//aplica a todas as opções
opcoes.forEach(op => {

    //botão cresce quando o mouse passa por cima
    op.addEventListener('mouseenter', () => {
        if (respondido) return;
        op.style.transform = 'scale(1.05)';
        op.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    //botão diminui quando o mouse sai de cima
    op.addEventListener('mouseleave', () => {
        if (respondido) return;
        op.style.transform = 'scale(1)';
        op.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.1)';
    });

    //botão ativa quando clicado e não permite dois botões marcados em uma questão
    op.addEventListener('click', () => {
        if (respondido) return;
        const pergunta = op.closest('.pergunta');
        pergunta.querySelectorAll('.opcao').forEach(o => {
            o.classList.remove('active');
            o.setAttribute('aria-pressed', 'false');
        });
        op.classList.add('active');
        op.setAttribute('aria-pressed', 'true');
        atualizarBotao();
    });
});

//percebe se o botão "Responder" foi clicado
responder.addEventListener('click', () => {
    if (respondido || responder.disabled) return;
    respondido = true;

    //marca os acertos
    let acertos = 0;

    //aplica a todas questões
    perguntas.forEach(p => {
        const escolhida = p.querySelector('.opcao.active');
        const certa = p.querySelector('.opcao[data-certo="true"]');
        escolhida.classList.remove('active');

        //acerto = botão verde; erro = botão vermelho e a resposta certa fica contornada
        if (escolhida === certa) {
            acertos++;
            escolhida.classList.add('correta');
        } else {
            escolhida.classList.add('errada');
            certa.classList.add('gabarito');
        }

        //mostra a explicação de cada pergunta
        const explicacao = document.createElement('p');
        explicacao.classList.add('explicacao');
        explicacao.textContent = (escolhida === certa ? 'Correto. ' : 'Resposta certa: ' + certa.textContent + '. ') + p.dataset.explicacao;
        p.appendChild(explicacao);
    });

    //trava os botões, desativa "Responder" e escreve quantas do total foram certas
    opcoes.forEach(op => {
        op.style.transform = 'scale(1)';
        op.style.pointerEvents = 'none';
    });
    responder.disabled = true;
    refazer.hidden = false;
    resultado.innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
});

//volta o quiz ao começo
refazer.addEventListener('click', () => {
    respondido = false;
    opcoes.forEach(op => {
        op.classList.remove('active', 'correta', 'errada', 'gabarito');
        op.removeAttribute('aria-pressed');
        op.style.transform = '';
        op.style.boxShadow = '';
        op.style.pointerEvents = '';
    });
    document.querySelectorAll('.explicacao').forEach(e => e.remove());
    resultado.innerText = '';
    refazer.hidden = true;
    responder.disabled = true;
});
