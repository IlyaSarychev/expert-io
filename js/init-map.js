function initMap() {
    var coordinates = {lat: 55.755712, lng: 37.617417},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            disableDefaultUI: true,
            scrollwheel: true
        });
}
