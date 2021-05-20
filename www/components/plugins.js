// This is a JavaScript file

$(document).on("click","#local", function(){
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

function mostraMapa(lat, long){
  L.mapquest.key = 'rmXLIm5Fxj9gzsbd0L4q42aQhviiNZMg';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 18
        });

        map.addControl(L.mapquest.control());
}