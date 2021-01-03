
//create map
const map = L.map('mapid').setView([-27.22026,-49.6458531], 15);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);


//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng} = orphanage) {
    
    //create popup overlay
    const popup = L.popup({
        clouseButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"<a>`);

    //}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

    //create and add marker
    L.marker([lat, lng], {icon})
        .addTo(map)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach( (span) => {
    if(span.dataset.lat != undefined && span.dataset.lng != undefined && span.dataset.lat != "" && span.dataset.lng != ""){
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
        };

        addMarker(orphanage);
    }
});

