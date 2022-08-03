/*====================== menu ==================== */

function openMenu() {
  var list = document.getElementById('list')
  list.classList.add('show')
}

function closeMenu() {
  var list = document.getElementById('list')
  list.classList.remove('show')
}

const links = document.querySelectorAll('a')

for (const link of links) {
  link.addEventListener('click', function () {
    list.classList.remove('show')
  })
}

/*====================== Cortina Pedido==================== */

const enviar = document.getElementById('button')

enviar.addEventListener('click', function () {
  const alturadacortina = document.getElementById('height')
  const larguradacortina = document.getElementById('width')
  const form = document.getElementById('formulario')
  const tecido = document.getElementById('curtain-title')

  const valorAltura = alturadacortina.value
  const valorLargura = larguradacortina.value
  const valorForm = form.field.value
  const valorTecido = tecido.innerHTML

  /*====================== calcular orcamento==================== */

  window.location.href = `https://api.whatsapp.com/send?phone=556791285133&text=Olá quero fazer um orçamento %0A	Tecido escolhido: ${valorTecido}
 %0AO tipo de cortina: ${valorForm} 
 %0AAltura:  ${valorAltura}
 %0ALargura:  ${valorLargura}`
})

/*====================== Cortina ==================== */
var solar = document.getElementById('div-solar')
var trans = document.getElementById('div-trans')
var black = document.getElementById('div-black')
var alum = document.getElementById('div-alum')
var pvc = document.getElementById('div-pvc')
var madeira = document.getElementById('div-madeira')
var curtainImage = document.getElementById('curtain-image')

var selectedOption = 'Blackout'
var curtainType = 'Romana'

function setDefaultConfig() {
  solar.classList.remove('hidden')
  trans.classList.remove('hidden')
  black.classList.remove('hidden')

  madeira.classList.add('hidden')
  pvc.classList.add('hidden')
  alum.classList.add('hidden')
}

function setSelectedOption(e) {
  selectedOption = e.target.id
}

function setRomana(e) {
  setDefaultConfig()
  document.getElementById('curtain-title').innerHTML = 'Romana'
  document.getElementById('curtain-subtitle').innerHTML =
    'A persiana romana é formada por “gomos” largos e horizontais que se dobram e desdobram para cima ou para baixo na medida em que a persiana é aberta ou fechada. O espaço entre as dobras da persiana romana é o que torna esse modelo tão diferenciado, transmitindo leveza e elegância aos ambientes.'
  curtainType = 'Romana'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/ROMANA/TELASOLAR/romana-telasolar.jpg'
  document.getElementById('caption1').innerHTML = 'Tela Solar'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/ROMANA/TRANSLUCIDO/romana-translucida.jpg'
  document.getElementById('caption2').innerHTML = 'Translúcido'
  ////////////////

  ////////////////
  document.getElementById('curtain-image3').src =
    './images/ROMANA/BLACKOUT/romana-blackout.jpg'
  document.getElementById('caption3').innerHTML = 'Blackout'
  ////////////////
}

function setRolo(e) {
  setDefaultConfig()
  document.getElementById('curtain-title').innerHTML = 'Rolô'
  document.getElementById('curtain-subtitle').innerHTML =
    'A  rolô abre de baixo para cima, mas não acumula gomos na parte superior. Neste caso, o tecido é guardado em um rolo na parte superior da janela.é uma ótima escolha para amenizar a passagem da luz ou vedá-la totalmente (blackout). Por isso, costumamos ver bastante em o modelo em varandas e salas.'

  curtainType = 'Rolo'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/ROLO/TELASOLAR/rolo-telasolar.jpg'
  document.getElementById('caption1').innerHTML = 'Tela Solar'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/ROLO/TRANSLUCIDO/rolo-translucido.jpg'
  document.getElementById('caption2').innerHTML = 'Translúcido'
  ////////////////

  ////////////////
  document.getElementById('curtain-image3').src =
    './images/ROLO/BLACKOUT/rolo-blackout.jpg'
  document.getElementById('caption3').innerHTML = 'Blackout'
  ////////////////
}

function setDoubleVision(e) {
  setDefaultConfig()
  document.getElementById('curtain-title').innerHTML = 'Double Vision'
  document.getElementById('curtain-subtitle').innerHTML =
    'É perfeito para quem deseja o melhor controle de luz e privacidade para o ambiente. É um rolo duplo de tecido paralelo com tiras horizontais que podem se alternar, permitindo maior transparência e maior visibilidade externa, ou maior opacidade e, portanto, maior privacidade.A visão dupla proporciona o acabamento perfeito para suas janelas para deixar qualquer ambiente mais confortável e bonito.'

  curtainType = 'DoubleVision'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/DOUBLEVISION/TELASOLAR/doublevision-telasolar.jpg'
  document.getElementById('caption1').innerHTML = 'Tela Solar'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/DOUBLEVISION/TRANSLUCIDO/doublevision-translucido.jpg'
  document.getElementById('caption2').innerHTML = 'Translúcido'
  ////////////////

  ////////////////
  document.getElementById('curtain-image3').src =
    './images/DOUBLEVISION/BLACKOUT/doublevision-blackout.jpg'
  document.getElementById('caption3').innerHTML = 'Blackout'
  ////////////////
}
function setPainel(e) {
  setDefaultConfig()
  document.getElementById('curtain-title').innerHTML = 'Painel'
  document.getElementById('curtain-subtitle').innerHTML =
    'As persianas de painel são uma solução inovadora ideal para cobrir grandes janelas, pois consistem em painéis mais estreitos ou mais largos que podem se sobrepor mais ou menos a eles, dependendo de suas necessidades.Os painéis sobrepostos é fundamental para que você alcance o nível de brilho desejado para o seu ambiente'

  curtainType = 'Painel'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/PAINEL/TELASOLAR/painel-telasolar.webp'
  document.getElementById('caption1').innerHTML = 'Tela Solar'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/PAINEL/TRANSLUCIDO/painel-translucido.jpg'
  document.getElementById('caption2').innerHTML = 'Translúcido'
  ////////////////

  ////////////////
  document.getElementById('curtain-image3').src =
    './images/PAINEL/BLACKOUT/painel-blackout.jpg'
  document.getElementById('caption2').innerHTML = 'Blackout'
  ////////////////
}

function setVertical(e) {
  solar.classList.add('hidden')
  madeira.classList.add('hidden')
  pvc.classList.remove('hidden')
  alum.classList.add('hidden')
  trans.classList.remove('hidden')
  black.classList.remove('hidden')

  document.getElementById('curtain-title').innerHTML = 'Vertical'
  document.getElementById('curtain-subtitle').innerHTML =
    'Além de permitir controlar a quantidade de luz que entra no espaço, suas etapas de limpeza e manutenção não exigem muito esforço, o que faz com que muitas pessoas optem por esse modelo em detrimento de outras persianas em lojas e departamentos.'

  curtainType = 'Vertical'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/VERTICAL/TRANSLUCIDO/vertical-translucido.jpg'
  document.getElementById('caption1').innerHTML = 'Translúcido'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/VERTICAL/BLACKOUT/vertical-blackout.jpg'
  document.getElementById('caption2').innerHTML = 'Blackout'
  ////////////////
  ////////////////
  document.getElementById('curtain-image3').src =
    './images/VERTICAL/PVC/vertical-pvc.jpg'
  document.getElementById('caption3').innerHTML = 'PVC'
  ////////////////
}

function setHorizontal(e) {
  madeira.classList.remove('hidden')
  pvc.classList.remove('hidden')
  alum.classList.remove('hidden')
  solar.classList.add('hidden')
  trans.classList.add('hidden')
  black.classList.add('hidden')

  document.getElementById('curtain-title').innerHTML = 'Horizontal'
  document.getElementById('curtain-subtitle').innerHTML =
    'As persianas horizontais são as mais comuns e geralmente são usadas em quartos, cozinhas, salas e espaços dedicados ao trabalho. Para controlar a luminosidade e a inclinação das lâminas são usados bastões de acrílico. Os materiais mais comuns são de alumínio e madeira.'

  curtainType = 'Horizontal'

  ////////////////
  document.getElementById('curtain-image1').src =
    './images/HORIZONTAL/ALUMINIO/horizontal-aluminio.jpg'
  document.getElementById('caption1').innerHTML = 'Alumínio'
  ////////////////

  ////////////////
  document.getElementById('curtain-image2').src =
    './images/HORIZONTAL/MADEIRA/horizontal-madeira.jpg'
  document.getElementById('caption2').innerHTML = 'Madeira'
  ////////////////

  ////////////////
  document.getElementById('curtain-image3').src =
    './images/HORIZONTAL/PVC/horizontal-pvc.jpg'
  document.getElementById('caption3').innerHTML = 'PVC'
  ////////////////
}
