//create map
const map = L.map('mapid').setView([-27.22026,-49.6458531], 15);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);


//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);


  /* L.marker([lat, lng], {icon}).addTo(map) */
});


//create and add marker
/* L.marker([-27.22026,-49.6458531], {icon})
    .addTo(map)
    .bindPopup(popup) */
    
//adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldsContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldsContainer.children[0]

    if(input.value == ""){
        return;
    }
    //limpar o campo ante de adicionar ao container de imagens
    input.value = "";

    //adicionar o clone ao container de #imagens
    container.appendChild(newFieldsContainer)
}

//function deleteField(event) {}
function deleteField(event) {
    const span = event.currentTarget;
  
    const fieldsContainer = document.querySelectorAll(".new-upload");
  
    if (fieldsContainer.length <= 1) {
      span.parentNode.children[0].value = "";
      return;
    }
  
    span.parentNode.remove();
}
  


//select yer or not
function toggleSelect(event) {

    //retirar a class active (dos botoes)
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'));

    //colocar a class active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden como valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

/* function validate(event) {

     //validar se lat e lng estão preenchidos
  const needsLatAndLng = true
  if(needsLatAndLng) {
      event.preventDefault()
      alert('Selecione um ponto no mapa')
  }
} */

 
