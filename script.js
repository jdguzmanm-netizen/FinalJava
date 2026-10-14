// Proyecto final: interactividad accesible con JavaScript.
// El HTML NO contiene tabindex; se agrega aquí mediante un bucle.

document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('.galeria img');

  // Bucle que agrega tabindex y los eventos a cada imagen
  for (let i = 0; i < imagenes.length; i++) {
    const img = imagenes[i];
    const figura = img.closest('figure');

    // tabindex agregado por JavaScript (permite enfocar con la tecla Tab)
    img.setAttribute('tabindex', '0');

    const activar = () => figura.classList.add('resaltada');
    const desactivar = () => figura.classList.remove('resaltada');

    // Usuarios de teclado
    img.addEventListener('focus', activar);
    img.addEventListener('blur', desactivar);

    // Usuarios de mouse (mismo efecto visual)
    img.addEventListener('mouseover', activar);
    img.addEventListener('mouseout', desactivar);
  }
});
