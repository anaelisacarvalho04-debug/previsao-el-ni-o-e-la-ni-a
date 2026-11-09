document.addEventListener("DOMContentLoaded", () => {
    let containerPrincipal = document.getElementById("secao-graficos");
    if (!containerPrincipal) {
        containerPrincipal = document.createElement("div");
        containerPrincipal.id = "secao-graficos";
        document.body.appendChild(containerPrincipal);
    }
    
   
    const estiloCss = document.createElement("style");
    estiloCss.innerHTML = `
        .bloco-grafico {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .bloco-grafico h2 {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 10px;
        }
        .bloco-grafico p {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.4;
        }
        .barra-container {
            margin-bottom: 15px;
        }
        .barra-label {
            font-size: 0.85rem;
            font-weight: bold;
            color: #444;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
        .barra-fundo {
            background: #eee;
            border-radius: 4px;
            height: 22px;
            width: 100%;
            overflow: hidden;
        }
        .barra-preenchimento {
            height: 100%;
            border-radius: 4px;
            transition: width 0.5s ease;
        }
    `;
    document.head.appendChild(estiloCss);

    const secao1 = document.createElement("div");
    secao1.className = "bloco-grafico";

    const titulo1 = document.createElement("h2");
    titulo1.textContent = "Anomalias de Temperatura da Superfície do Mar (TSM)";
    
    const desc1 = document.createElement("p");
    desc1.textContent = "Este gráfico ilustra a variação média da temperatura das águas superficiais do Oceano Pacífico. Durante o El Niño ocorre aquecimento (valores positivos), enquanto na La Niña ocorre resfriamento (valores negativos).";

    secao1.appendChild(titulo1);
    secao1.appendChild(desc1);

    const dadosGrafico1 = [
        { mes: 'Jan', elNino: 1.2, laNina: -0.8 },
        { mes: 'Mar', elNino: 1.8, laNina: -1.2 },
        { mes: 'Mai', elNino: 2.3, laNina: -1.7 },
        { mes: 'Jul', elNino: 2.6, laNina: -1.6 },
        { mes: 'Set', elNino: 2.2, laNina: -1.3 },
        { mes: 'Dez', elNino: 1.7, laNina: -0.9 }
    ];

    dadosGrafico1.forEach(item => {
        const wrap = document.createElement("div");
        wrap.className = "barra-container";


        const larguraElNino = (Math.abs(item.elNino) / 3) * 100;
        const larguraLaNina = (Math.abs(item.laNina) / 3) * 100;

        wrap.innerHTML = `
            <div class="barra-label">
                <span>${item.mes}</span>
                <span>El Niño: +${item.elNino}°C | La Niña: ${item.laNina}°C</span>
            </div>
            <div style="display: flex; gap: 5px; flex-direction: column;">
                <div class="barra-fundo" title="El Niño">
                    <div class="barra-preenchimento" style="width: ${larguraElNino}%; background-color: #ff4d4d;"></div>
                </div>
                <div class="barra-fundo" title="La Niña">
                    <div class="barra-preenchimento" style="width: ${larguraLaNina}%; background-color: #3399ff;"></div>
                </div>
            </div>
        `;
        secao1.appendChild(wrap);
    });

    containerPrincipal.appendChild(secao1);


    
    const secao2 = document.createElement("div");
    secao2.className = "bloco-grafico";

    const titulo2 = document.createElement("h2");
    titulo2.textContent = "Impactos de Precipitação Por Região (Brasil)";
    
    const desc2 = document.createElement("p");
    desc2.textContent = "Comparação percentual estimada de variação de chuvas nas regiões do país durante os ciclos de El Niño e La Niña.";

    secao2.appendChild(titulo2);
    secao2.appendChild(desc2);

    const dadosGrafico2 = [
        { regiao: 'Região Sul', elNino: 45, laNina: -40 },
        { regiao: 'Região Nordeste', elNino: -35, laNina: 30 },
        { regiao: 'Região Norte', elNino: -30, laNina: 35 },
        { regiao: 'Sudeste / Centro-Oeste', elNino: 10, laNina: -10 }
    ];

    dadosGrafico2.forEach(item => {
        const wrap = document.createElement("div");
        wrap.className = "barra-container";

        const larguraElNino = Math.abs(item.elNino);
        const corElNino = item.elNino >= 0 ? '#ff8000' : '#cc0000';
        
        const larguraLaNina = Math.abs(item.laNina);
        const corLaNina = item.laNina >= 0 ? '#00b3b3' : '#004d80';

        wrap.innerHTML = `
            <div class="barra-label">
                <span>${item.regiao}</span>
            </div>
            <div style="font-size: 0.8rem; color: #666; margin-bottom: 2px;">El Niño (${item.elNino}%)</div>
            <div class="barra-fundo">
                <div class="barra-preenchimento" style="width: ${larguraElNino}%; background-color: ${corElNino};"></div>
            </div>
            <div style="font-size: 0.8rem; color: #666; margin-top: 4px; margin-bottom: 2px;">La Niña (${item.laNina}%)</div>
            <div class="barra-fundo">
                <div class="barra-preenchimento" style="width: ${larguraLaNina}%; background-color: ${corLaNina};"></div>
            </div>
        `;
        secao2.appendChild(wrap);
    });

      containerPrincipal.appendChild(secao2);
});