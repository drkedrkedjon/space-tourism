const nav = document.querySelector('.primary-navigation')
const navTogle = document.querySelector('.mobile-nav-toggle')

navTogle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')
  if(visibility === 'false') {
    nav.setAttribute('data-visible', 'true')
  } else {
    nav.setAttribute('data-visible', 'false')
  }
})