// v0.1

// MAIN
var app = {
  // inixzializzazione di phonegap
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function(){
    document.addEventListener("deviceready", app.onDeviceReady, false);
  },
  onDeviceReady: function(){
    navigator.geolocation.getCurrentPosition(app.onSuccessGeo, fail)
  },
  // chiamata quando la posizione è stata letta
  onSuccessGeo: function(position){
    // aggiorna le coordinate
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var latlng = new google.maps.LatLng( lat, lng);
    
    var mapOptions = {
      center: latlng,
      zoom: 16,
      myTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
}


app.initialize();
