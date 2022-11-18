function iniciarMap() {
    var lat_string = document.getElementById('lat').value;
    var long_string = document.getElementById('long').value;

    var lat = parseFloat(lat_string);
    var long = parseFloat(long_string);

    var coord = { lat: 19.4554358, lng: -99.1840779 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
}

function mark() {
    var lat_string = document.getElementById('lat').value;
    var long_string = document.getElementById('long').value;

    var lat = parseFloat(lat_string);
    var long = parseFloat(long_string);

    var coord = { lat: lat, lng: long };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

function aviso() {
    Swal.fire({
        title: 'Informacion',
        text: 'Ingresa latitud y longitud para ver un punto en el mapa, o bien, selecciona algún lugar de interes',
        confirmButtonText: 'Lo tengo',
        icon: 'success'
    })
}

function places() {
    var coord = document.getElementById("lugares").value;
    var array = coord.split(',');

    var lat = parseFloat(array[0]);
    var long = parseFloat(array[1]);

    var lat_input = document.getElementById("lat").value = lat;
    var long_input = document.getElementById("long").value = long;
}