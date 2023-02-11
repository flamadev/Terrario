const plantsElements = document.querySelectorAll('.plant');
plantsElements.forEach((plantElement) => dragElement(plantElement));

function dragElement(terrariumPlantElement) {
  let posXFinal = 0,
    posYFinal = 0,
    posXInicial = 0,
    posYInicial = 0;
  terrariumPlantElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    posXInicial = e.clientX;
    posYInicial = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }
  function elementDrag(e) {
    posXFinal = posXInicial - e.clientX;
    posYFinal = posYInicial - e.clientY;
    posXInicial = e.clientX;
    posYInicial = e.clientY;
    terrariumPlantElement.style.top =
      terrariumPlantElement.offsetTop - posYFinal + 'px';
    terrariumPlantElement.style.left =
      terrariumPlantElement.offsetLeft - posXFinal + 'px';
  }
  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
