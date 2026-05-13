export const Infos = [
  {
    id: 1,
    theme: "Responsive Design",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Responsive Design é a técnica de fazer o site se adaptar a qualquer tamanho de tela.

PASSO 1 — Entenda que telas são diferentes:
Celular é estreito, tablet é médio, desktop é largo.

PASSO 2 — Use classes do Tailwind com breakpoints:
Comece pelo celular (padrão) e depois ajuste:
md:, lg:, xl:

PASSO 3 — Exemplo prático:
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
Isso significa:
1 coluna no celular, 2 no tablet, 3 no desktop.

PASSO 4 — Sempre teste diminuindo e aumentando a tela no navegador.`
  },
  {
    id: 2,
    theme: "HTML Semântico",
    image: "/cardImg/HTML5_Logo_512.png",
    infoImg: "/cardImg/HTML5_Logo_512.png",
    descricao: `HTML Semântico é usar as tags corretas para cada parte do site.

PASSO 1 — Estrutura básica:
<header>, <main>, <section>, <footer>

PASSO 2 — Para textos:
<h1> até <h6>, <p>, <article>

PASSO 3 — Por que isso é importante?
Melhora SEO, acessibilidade e organização do código.

PASSO 4 — Exemplo:
<main>
  <section>
    <h1>Título</h1>
    <p>Conteúdo</p>
  </section>
</main>`
  },
  {
    id: 3,
    theme: "Consumo de API",
    image: "/cardImg/api.png",
    infoImg: "/cardImg/api.png",
    descricao: `Consumir API é buscar dados externos.

PASSO 1 — Crie um estado:
const [data, setData] = useState([])

PASSO 2 — Use useEffect:
useEffect(() => {
  fetch("URL")
    .then(res => res.json())
    .then(json => setData(json))
}, [])

PASSO 3 — Mostre na tela com map.

PASSO 4 — Sempre trate erros com try/catch.`
  },
  {
    id: 4,
    theme: "Flex e Flex-col",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Flex ativa o Flexbox.

PASSO 1 — Coloque flex no pai:
<div class="flex">

PASSO 2 — Por padrão fica lado a lado.

PASSO 3 — Use flex-col para empilhar:
<div class="flex flex-col">`
  },
  {
    id: 5,
    theme: "Flex-1 e Flex-wrap",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `flex-1 faz o item ocupar o espaço restante.

PASSO 1 — Use nos filhos:
<div class="flex">
  <div class="flex-1"></div>
</div>

PASSO 2 — Use flex-wrap para quebrar linha quando não couber.`
  },
  {
    id: 6,
    theme: "Grid e Grid-cols",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Grid cria uma grade.

PASSO 1 — Ative com grid:
<div class="grid">

PASSO 2 — Defina colunas:
grid-cols-3

PASSO 3 — Combine com breakpoints.`
  },
  {
    id: 7,
    theme: "Breakpoints no Tailwind",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Breakpoints mudam o layout por tamanho de tela.

sm: celular grande
md: tablet
lg: desktop
xl: telas grandes

Use assim:
md:flex lg:grid`
  },
  {
    id: 8,
    theme: "Padding e Margin",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Padding é espaço interno.
Margin é espaço externo.

p-4, px-4, py-2
m-4, mx-2, my-1`
  },
  {
    id: 9,
    theme: "useState",
    image: "/cardImg/api.png",
    infoImg: "/cardImg/api.png",
    descricao: `useState guarda valores.

PASSO 1:
const [valor, setValor] = useState(0)

PASSO 2:
setValor(10)

Isso faz o componente renderizar novamente.`
  },
  {
    id: 10,
    theme: "useEffect",
    image: "/cardImg/api.png",
    infoImg: "/cardImg/api.png",
    descricao: `useEffect roda código fora do fluxo do React.

useEffect(() => {
  console.log("rodou")
}, [])`
  },
  {
    id: 11,
    theme: "Props no React",
    image: "/cardImg/HTML5_Logo_512.png",
    infoImg: "/cardImg/HTML5_Logo_512.png",
    descricao: `Props passam dados do pai para o filho.

<Card theme="Teste" />

function Card({theme}) {
  return <h1>{theme}</h1>
}`
  },
  {
    id: 12,
    theme: "overflow e z-index",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `overflow-hidden corta o conteúdo.
z-10 coloca o elemento na frente.`
  },
  {
    id: 13,
    theme: "Glassmorphism",
    image: "/cardImg/free-tailwind-icon@2x.png",
    infoImg: "/cardImg/free-tailwind-icon@2x.png",
    descricao: `Efeito vidro:

bg-white/10
backdrop-blur
border border-white/20
rounded`
  }
]