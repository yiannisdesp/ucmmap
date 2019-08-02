var map,
    lang = 'en',
    kmlDataSources = {
        lefkosia: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/lefkosia-district-'+ lang +'.kml?t=' + Date.now(),
        larnaka: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/larnaka-district-'+ lang +'.kml?t=' + Date.now(),
        ammochostos: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/ammochostos-district-'+ lang +'.kml?t=' + Date.now(),
        lemesos: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/lemesos-district-'+ lang +'.kml?t=' + Date.now(),
        keryneia: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/keryneia-district-'+ lang +'.kml?t=' + Date.now(),
        paphos: 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/paphos-district-'+ lang +'.kml?t=' + Date.now(),
    },
    layers = {},
    districtMarkers = {
        lefkosia: {},
        larnaka: {},
        ammochostos: {
            latlng: {lat: 35.185567, lng: 33.745410},
            obj: {},
            paths: {
                en: 'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.82 42.58"><defs><style>.cls-1{font-size:36px;font-family:Arial;}.cls-2{letter-spacing:-0.02em;}</style></defs><title>ammochostos-en</title><text class="cls-1" transform="translate(0.06 30.89)">AMMOCHOSTOS</text></svg>',
                el: 'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.82 42.58"><defs><style>.cls-1{font-size:36px;font-family:Arial;}.cls-2{letter-spacing:-0.02em;}</style></defs><title>ammochostos-el</title><text class="cls-1" transform="translate(0.06 30.89)">ΑΜΜΟΧΩΣ<tspan class="cls-2" x="185.17" y="0">Τ</tspan><tspan x="206.51" y="0">ΟΣ</tspan></text></svg>'
            }
        },
        lemesos: {},
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
        if ( districtMarkers[k].hasOwnProperty('latlng') ){
            districtMarkers[k].obj = new google.maps.Marker({
                position: districtMarkers[k].latlng,
                map: map,
                icon: {
                    url: districtMarkers[k].paths[lang],
                    size: new google.maps.Size(150, 23),
                    scaledSize: new google.maps.Size(150, 23),
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                }
            });
        }
    }
}