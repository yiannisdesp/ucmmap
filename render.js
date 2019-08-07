var ucmmap = (function(){
    var map,
    languageDetection = function(){
        var l = document.querySelector('html').attributes.lang;
        if ( l !== 'undefined' && l !== undefined ) {
            l = l.value;
            if ( l.indexOf('en') > -1 ) return 'en';
            if ( l.indexOf('el') > -1 ) return 'el';
            return 'en';
        } else {
            return 'en';
        }
    },
    lang = languageDetection(),
    local = (window.location.hostname).indexOf('local') > -1 ? true : false,
    dBaseUrl = local ? 'https://raw.githubusercontent.com/yiannisdesp/ucmmap/master/kml/' : document.getElementById('map').dataset.kmlbase,
    kmlDataSources = {
        lefkosia: dBaseUrl + 'lefkosia-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
        larnaka: dBaseUrl + 'larnaka-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
        ammochostos: dBaseUrl + 'ammochostos-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
        lemesos: dBaseUrl + 'lemesos-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
        keryneia: dBaseUrl + 'keryneia-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
        paphos: dBaseUrl + 'paphos-district-'+ lang +'.kml?t=' + ( local ? Date.now() : 'v1' ),
    },
    layers = {},
    districts = {
        lefkosia: {
            latlng: {lat: 35.0698226, lng: 33.2483525},
            name: {
                en: 'Lefkosia District',
                el: 'Επαρχία Λευκωσίας'
            }
        },
        larnaka: {
            latlng: {lat: 34.9081331, lng: 33.3187845},
            name: {
                en: 'Larnaka District',
                el: 'Επαρχία Λάρνακας'
            }
        },
        ammochostos: {
            latlng: {lat: 35.3088792, lng: 33.8641198},
            name: {
                en: 'Ammochostos District',
                el: 'Επαρχία Αμμοχώστου'
            }
        },
        lemesos: {
            latlng: {lat: 34.7970721, lng: 32.8136594},
            name: {
                en: 'Lemesos District',
                el: 'Επαρχία Λεμεσού'
            }
        },
        keryneia: {
            latlng: {lat: 35.3155988, lng: 33.1554084},
            name: {
                en: 'Keryneia District',
                el: 'Επαρχία Κερύνειας'
            }
        },
        paphos: {
            latlng: {lat: 34.9751672, lng: 32.5058976},
            name: {
                en: 'Paphos District',
                el: 'Επαρχία Πάφου'
            }
        }
    },
    legendHTML = '',
    showDistrict = function(lat, lng){
        var center = new google.maps.LatLng(lat, lng);
        map.panTo(center);
        map.setZoom(10);
    },
    render = function(){
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
            // generate legend html
            legendHTML += '<div class="item"><a href="#" class="maplink" data-lat="'+ districts[k].latlng.lat +'" data-lng="'+ districts[k].latlng.lng +'">'+ districts[k].name[lang] +'</a></div>';
        }
        // render generated legend markup
        document.getElementById('legend').innerHTML = legendHTML;
        // bind generated links with click event
        setTimeout(function(){
            for ( k2 in document.querySelectorAll('a.maplink') ){
                document.querySelectorAll('a.maplink')[k2].addEventListener('click', function(e){
                    showDistrict(this.dataset.lat, this.dataset.lng);
                });
            }
        }, 500);
    };
    return {init: render};
})();

function initMap(){
    ucmmap.init();
}