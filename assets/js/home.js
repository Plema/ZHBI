$(document).ready(function () {
    //section-number

    function countup(className) {
        var countBlockTop = $("." + className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;

                $('.' + className).spincrement({
                    from: 1,
                    thousandSeparator: "",
                });
            }
        })
    }


    $(function () {
        countup("count", $(".section-advantages .count").text());
    });

    //end

    //Map
    var mapContainer = $('#map');
    var myLat = +mapContainer.attr('data-lat');
    var myLng = +mapContainer.attr('data-lng');
    var myZoom = +mapContainer.attr('data-zoom');


    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [myLat, myLng],
            zoom: myZoom,
        }, {
            suppressObsoleteBrowserNotifier: true,
            yandexMapDisablePoiInteractivity: true,
            suppressMapOpenBlock: true
        });

        var myPlacemark = new ymaps.Placemark(
            [myLat, myLng], {
                //properties here
            }, {
                // iconContentOffset: [15, -200],
                // iconContentLayout: MyIconContentLayout
            }
        );

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
    }
    //end

})