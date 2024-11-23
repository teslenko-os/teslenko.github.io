var map = L.map('map').setView([49.405186, 32.114148], 13);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

L.marker([49.405186, 32.114148]).addTo(map)
    .bindPopup('ПП Тесленко О.С.')
    .openPopup();