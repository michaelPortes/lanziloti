let nav = document.querySelector('#header nav')
let toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

let links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina quando der o scroll//
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
/*===================Scrollreveal====================*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .cards,
#services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/*===================Botão de voltar ao inicio===================*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
/*=============================Active menu in page's=======================*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


// Criando um novo objeto Date
var dataAtual = new Date();

// Obtendo o ano atual
var anoAtual = dataAtual.getFullYear();

// Selecionando o parágrafo pelo id
var paragrafoAnoAtual = document.getElementById("ano-atual");
console.log(anoAtual)
// Atualizando o conteúdo do parágrafo com o ano atual
paragrafoAnoAtual.textContent += anoAtual;