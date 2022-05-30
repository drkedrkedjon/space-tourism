// Navegacion principal

const navegacionPrincipal = document.querySelector('.navegacion-principal')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')

mobileNavToggle.addEventListener('click', () => {
  const visibilidad = navegacionPrincipal.getAttribute('data-visible')
  if (visibilidad === 'false') {
    navegacionPrincipal.setAttribute('data-visible', true)
    mobileNavToggle.setAttribute('aria-expanded', true)
  } else {
    navegacionPrincipal.setAttribute('data-visible', false)
    mobileNavToggle.setAttribute('aria-expanded', false)
  }
})

// Navegacion tabs

const articulo = document.querySelector('#articulo')
const articuloImg = document.querySelector('#articulo--img')
const navTabs = document.querySelectorAll('[role="tab"]')
let contenido = ''

navTabs.forEach(tab => {
  tab.addEventListener('click', cambiarTab)
});


async function obtenerData() {
  const respuesta = await fetch('./data.json')
  const data = await respuesta.json()
  contenido = data
}
obtenerData()


function cambiarTab(e) {
  const selectedTab = e.target // Guardamos target tab
  const padreSelectedTab = selectedTab.parentNode // Buscamos el elemento padre de tab selecionado
  // Entre los hijos del este elemento bustar uno con aria true y cambiar por false para quitar lo subrayado
  padreSelectedTab.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
  selectedTab.setAttribute('aria-selected', true) // Añadimos subrayado al target tab

  const paginaSelecionada = padreSelectedTab.getAttribute('data-page')
  const tabSelecionado = selectedTab.getAttribute('data-indice')
  const contenidoSelecionado = contenido[paginaSelecionada][tabSelecionado]

  if (paginaSelecionada === 'destinations') {
    setTimeout(cambiarDestination, 250)
  } else if (paginaSelecionada === 'crew') {
    setTimeout(cambiarCrew, 250)
  } else if (paginaSelecionada === 'technology') {
    setTimeout(cambiarTechnology, 250)
  }

  articulo.classList.add('opacidad-off')
  articuloImg.classList.add('opacidad-off')

  function cambiarDestination() {
    articulo.innerHTML = `
      <h2 class="ff-serif fs-800 uppercase color-blanco">${contenidoSelecionado.name}</h2>
      <p>${contenidoSelecionado.description}</p>
      <div class="destination-meta flex">
      <div>
      <h3 class="color-claro fs-200 uppercase">Avg.distance</h3>
      <p class="ff-serif uppercase">${contenidoSelecionado.distance}</p>
      </div>
      <div>
      <h3 class="color-claro fs-200 uppercase">Est. travel time</h3>
      <p class="ff-serif uppercase">${contenidoSelecionado.travel}</p>
      </div>
      </div>
    `
    articuloImg.innerHTML = `
      <source srcset="${contenidoSelecionado.images.webp}" type="image/webp">
      <img src="${contenidoSelecionado.images.png}" alt="${contenidoSelecionado.name}">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }

  function cambiarCrew() {
    articulo.innerHTML = `
      <header class="flow flow--space-small">
      <h2 class="fs-600 ff-serif uppercase">${contenidoSelecionado.role}</h2>
      <p class="fs-700 uppercase ff-serif color-blanco">${contenidoSelecionado.name}</p>
      </header>
      <p>${contenidoSelecionado.bio}</p>
    `
    articuloImg.innerHTML = `
      <source srcset="${contenidoSelecionado.images.webp}" type="image/webp">
      <img src="${contenidoSelecionado.images.png}" alt="${contenidoSelecionado.name}">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }

  function cambiarTechnology() {
    articulo.innerHTML = `
      <header class="flow flow--space-small">
      <h2 class="fs-600 ff-serif uppercase">The terminology ...</h2>
      <p class="fs-700 uppercase ff-serif color-blanco">${contenidoSelecionado.name}</p>
      </header>
      <p>${contenidoSelecionado.description}</p>
    `
    articuloImg.innerHTML = `
      <source
        media="(orientation: landscape)"
        srcset="${contenidoSelecionado.images.portrait}" type="image/jpeg">
      <source
        media="(orientation: portrait)"
        srcset="${contenidoSelecionado.images.landscape}" type="image/jpeg">
      <img src="${contenidoSelecionado.images.landscape}" alt="Launch Vehicle">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }
}


