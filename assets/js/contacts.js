$(document).ready(function () {

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

});