function initMap() {
  let mapPosition = {lat: 35.098166, lng: 137.218072};
  let mapArea = document.getElementById('kuragaike-map');
  let mapOptions = {
    center: mapPosition,
    zoom: 16,
  };
  let map = new google.maps.Map(mapArea, mapOptions);
  let markerOptions = {
    map: map,
    position: mapPosition,
  };
  let marker = new google.maps.Marker(markerOptions);
}

// (function(){
//   var latlng = new google.maps.LatLng(35.098166,137.218072);
//   var myOptions = {
//   zoom: 15,
//   center: latlng,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map_01 = new google.maps.Map(
//   document.getElementById("kuragaike-map"),  //一つ目の地図のIDを指定
//   myOptions
//   );
//   var marker = new google.maps.Marker({
//   position: latlng,
//   map: map_01,
//   // icon: 'img/pin.png',   //ピンの画像のディレクトリを指定
//   });
//   20
//   //二つ目の地図
//   var latlng = new google.maps.LatLng(35.104250, 137.208194);
//   var myOptions = {
//   zoom: 15,
//   center: latlng,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map_02 = new google.maps.Map(
//   document.getElementById("koutu-map"),  //二つ目の地図のIDを指定
//   myOptions
//   );
//   var marker = new google.maps.Marker({
//   position: latlng,
//   map: map_02,
//   // icon: 'img/pin02.png',   //ピンの画像のディレクトリを指定
//   });
// }());
  