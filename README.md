# Es el Clima

Site informativo sobre os fenômenos climáticos **El Niño** e **La Niña**: o que são, por que ocorrem, onde ocorrem e como são previstos. O projeto foi feito em grupo para o trabalho **PL1**, com HTML, CSS e JavaScript puro (mais o Bootstrap para alguns componentes).

**QR Code:** a imagem do QR Code que leva ao site está no rodapé de todas as páginas.

## Páginas

| Página | Arquivo | O que tem |
|---|---|---|
| Início | `index.html` | Abertura com título, botão e foto, motivo do projeto, três números sobre o El Niño e links para as outras páginas. |
| El Niño e La Niña | `conteudo.html` | Texto explicativo (o que são, onde ocorrem, como é feita a previsão, papel da inteligência artificial) e um quiz com 4 perguntas. |
| Equipe | `equipe.html` | Cartões com foto, função e contribuição de cada integrante. |
| Gráfico | `grafico.html` | Dois gráficos de barras: anomalias de temperatura da superfície do mar e impacto na chuva por região do Brasil. |
| Estilo | `guia.html` | Guia de estilo visual do site (cores, tipografia, componentes e acessibilidade). |

## Funcionalidades em JavaScript

- **`index.js`**: monta os três cartões de números da página inicial a partir de uma lista.
- **`conteudo.js`**: controla o quiz. Só deixa marcar uma opção por pergunta, libera o botão *Responder* quando todas foram respondidas, pinta as respostas de verde ou vermelho e mostra o total de acertos.
- **`equipe.js`**: cria os cartões da equipe a partir do código, com `createElement` e `appendChild`.
- **`grafico.js`**: desenha os gráficos de barras sem biblioteca externa, usando arrays de objetos, laços `forEach` e cálculo da largura de cada barra.

## Tecnologias

- HTML5 e CSS3 (variáveis CSS, flexbox, grid e media queries)
- JavaScript (DOM, eventos, arrays de objetos, laços e funções)
- Bootstrap (botões do quiz)
- Git e GitHub Pages

## Estrutura do projeto

```
/
├── index.html
├── conteudo.html
├── equipe.html
├── grafico.html
├── guia.html
├── style.css        # estilo geral e variáveis de cor e fonte
├── guia.css         # estilo exclusivo da página do guia
├── index.js
├── conteudo.js
├── equipe.js
├── grafico.js
├── midia/           # imagens, fotos da equipe e QR Code
└── README.md
```

## Guia de estilo

O guia completo está na página `guia.html`. Resumo:

**Cores** (variáveis em `:root`, no `style.css`)

| Variável | Valor | Uso |
|---|---|---|
| `--fundo` | `#FFFFFF` | Fundo das páginas |
| `--card` | `#EEF9F9` | Fundo dos cartões |
| `--borda` | `#8AD6D6` | Bordas e botões do menu |
| `--destaque` | `#D6E264` | Destaque do menu ao passar o mouse |
| `--texto` | `#132442` | Texto principal |
| `--texto-2` e `--link` | `#3551A4` | Links e textos de apoio |
| (sem variável) | `#80A1F8` | Cabeçalho e rodapé |

**Tipografia:** *Nofex* nos títulos (reserva: Impact) e *Poppins* nos textos (reserva: system-ui).

**Formas:** cantos de 12 px nos cartões, 8 px nos botões do quiz e 50 px (pílula) nos links do menu; sombra `0 8px 10px rgba(0, 0, 0, 0.1)`.

**Responsividade:** ponto de quebra em 768 px; no celular o menu e o rodapé ficam empilhados e os cartões ocupam 90% da largura.

## Acessibilidade e qualidade do código

- Idioma da página declarado (`lang="pt-BR"`) e todas as imagens com texto alternativo (`alt`).
- Menu, links e quiz com elementos nativos (`a` e `button`), que funcionam com o teclado.
- Contraste entre texto e fundo conferido na seção de acessibilidade do guia de estilo.
- HTML indentado e JavaScript comentado.

## Equipe

| Integrante | Função | Contribuição |
|---|---|---|
| Marcos | Desenvolvedor e designer UI/UX | Estilização com CSS e identidade visual das seções sobre El Niño e La Niña. |
| Ana Elisa | Arquiteta Front-End | Estrutura HTML, layouts e integração dos scripts de texto. |
| Ian | Interatividade e animações | Gráficos interativos e componentes visuais sobre aquecimento e resfriamento do Pacífico. |
| Miguel Sodré | Pesquisador de conteúdo e Front-End | Textos explicativos, estrutura das páginas e semântica do código. |
| Daniel Tomé | Conexão com a plataforma | Integração do projeto ao Portal, onde o trabalho é publicado e hospedado. |

O histórico de commits e a aba **Insights → Contributors** do repositório registram a contribuição de cada integrante.

## Fontes de pesquisa

- [g1: quando foi o último Super El Niño](https://g1.globo.com/meio-ambiente/noticia/2026/05/24/quando-foi-o-ultimo-super-el-nino.ghtml)
- [Greenpeace Brasil: Super El Niño 2026](https://www.greenpeace.org/brasil/blog/super-el-nino-2026/)
- [IFRC: El Niño, qué es y qué significa para los desastres](https://www.ifrc.org/es/articulo/el-nino-que-es-y-que-significa-para-los-desastres)
- [Brasil Escola: El Niño e La Niña](https://brasilescola.uol.com.br/geografia/el-nino-e-la-nina.htm)

© 2026 - Todos os direitos reservados.
