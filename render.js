var map,
    lang = 'en',
    kmlDataSources = {
        nicosia: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/nicosia-district-'+ lang +'.kml',
        larnaca: '',
        famagusta: '',
        limassol: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/limassol-district-'+ lang +'.kml',
        kerynia: '',
        paphos: ''
    },
    layers = {};

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(35.0983305,33.3349372),
        zoom: 10,
        mapTypeId: 'roadmap'
    });
    // render layers based on kml data
    for ( k in kmlDataSources ){
        layers[k] = new google.maps.KmlLayer(kmlDataSources[k], {
            suppressInfoWindows: false,
            preserveViewport: true,
            map: map
        });
    }
}