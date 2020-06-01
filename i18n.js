/**
 * simple i18n module
 * yiannisdesp, May 2020
 */
var __i18n = (function(){

    var t = {
        lefkosia_district: {
            en: 'Lefkosia District',
            el: 'Επαρχία Λευκωσίας'
        },
        larnaka_district: {
            en: 'Larnaka District',
            el: 'Επαρχία Λάρνακας'
        },
        ammochostos_district: {
            en: 'Ammochostos District',
            el: 'Επαρχία Αμμοχώστου'
        },
        lemesos_district: {
            en: 'Lemesos District',
            el: 'Επαρχία Λεμεσού'
        },
        keryneia_district: {
            en: 'Keryneia District',
            el: 'Επαρχία Κερύνειας'
        },
        paphos_district: {
            en: 'Paphos District',
            el: 'Επαρχία Πάφου'
        }
    };

    var detectlocale = function(){
        var l = document.querySelector('html').attributes.lang;
        if (l !== 'undefined' && l !== undefined) {
            l = l.value;
            if (l.indexOf('en') > -1) return 'en';
            if (l.indexOf('el') > -1) return 'el';
            return 'en';
        }
        return 'en';
    }

    var translate = function(k, locale){
        if ( typeof locale === 'undefined' || locale === undefined ){
            locale = detectlocale();
        }
        if ( t.hasOwnProperty(k) ){
            return t[k][locale];

        } else {
            return k;
        }
    }

    return {
        detectlocale: detectlocale,
        translate: translate
    }

})();