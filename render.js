var map,
    lang = 'el',
    kmlDataSources = {
        nicosia: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/nicosia-district-'+ lang +'.kml?t=' + Date.now(),
        larnaca: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/larnaca-district-'+ lang +'.kml?t=' + Date.now(),
        ammochostos: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/ammochostos-district-'+ lang +'.kml?t=' + Date.now(),
        limassol: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/limassol-district-'+ lang +'.kml?t=' + Date.now(),
        keryneia: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/keryneia-district-'+ lang +'.kml?t=' + Date.now(),
        paphos: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/paphos-district-'+ lang +'.kml?t=' + Date.now(),
    },
    layers = {},
    districtMarkers = {
        nicosia: {},
        larnaca: {},
        ammochostos: {
            latlng: {lat: 35.185567, lng: 33.745410},
            obj: {},
            path: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/svgs/ammochostos-' + lang + '.svg'
        },
        limassol: {},
        keryneia: {},
        paphos: {}
    };

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(35.0983305,33.3349372),
        zoom: 10,
        mapTypeId: 'roadmap'
    });
    for ( k in kmlDataSources ){
        // render layer
        layers[k] = new google.maps.KmlLayer(kmlDataSources[k], {
            suppressInfoWindows: false,
            preserveViewport: true,
            map: map
        });
        // add district text as a marker
        districtMarkers[k].obj = new google.maps.Marker({
            position: districtMarkers[k].latlng,
            map: map,
            icon: {
                url: districtMarkers[k].path,
                size: new google.maps.Size(32, 32),
                scaledSize: new google.maps.Size(20, 20)
            }
        });
    }
}