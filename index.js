let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 28.0345 ,
                lng:  -16.6397,
            },
            map,
            title: "Guargacho",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 41.87194,
                lng: 12.56738,
            },
            map,
            title: "Italia",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 40.4165,
                lng: -3.70256,
            },
            map,
            title: "Madrid",
        })
    );
}
