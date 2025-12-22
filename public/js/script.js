const socket = io();
console.log('Client-side script loaded');

if(navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        socket.emit('send-location', { latitude, longitude });
    }, (error) => {
        console.error('Error obtaining location', error);
    },{
        enableHighAccuracy: true,
        maximumAge: 0,//no cahing 
        timeout: 5000
    });
}

const map = L.map('map').setView([0, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy;   Parshant Goyal contributors'
}).addTo(map);

const marker = {};

socket.on('receive-location', (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude],17);
    if(marker[id]) {
        marker[id].setLatLng([latitude, longitude]);
    }else{
        marker[id] = L.marker([latitude, longitude]).addTo(map)
    }

});
socket.on('user-disconnected', (id) => { 
    if(marker[id]) {
        map.removeLayer(marker[id]);
        delete marker[id];
    }
});