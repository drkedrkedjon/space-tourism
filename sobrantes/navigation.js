const navegacionPrincipal = document.querySelector('.navegacion-principal')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')

mobileNavToggle.addEventListener('click', () => {
  const visibilidad = navegacionPrincipal.getAttribute('data-visible')
  if(visibilidad === 'false') {
    navegacionPrincipal.setAttribute('data-visible', true)
    mobileNavToggle.setAttribute('aria-expanded', true)
  } else {
    navegacionPrincipal.setAttribute('data-visible', false)
    mobileNavToggle.setAttribute('aria-expanded', false)
  }
})