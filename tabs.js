const navTabs = document.querySelectorAll('[role="tab"]')


navTabs.forEach( tab => {
  tab.addEventListener('click', cambiarTab )
});

function cambiarTab(e) {
  const selectedTab = e.target // Guardamos target tab
  const padreSelectedTab = selectedTab.parentNode // Buscamos el elemento padre de tab selecionado
  // Entre los hijos del este elemento bustar uno con aria true y cambiar por false para quitar lo subrayado
  padreSelectedTab.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false) 
  selectedTab.setAttribute('aria-selected', true) // Añadimos subrayado al target tab

  console.log(padreSelectedTab)
}