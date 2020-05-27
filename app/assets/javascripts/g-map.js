var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
{
    name: '堀内公園:〒444-1155 愛知県安城市堀内町安下1-1',
    lat: 34.929179,
    lng: 137.091326
}, {
    name: '交通安全センター:〒471-0001 愛知県豊田市池田町小山田494-24',
    lat: 35.104217,
    lng: 137.208143
}, {
    name: '半田運動公園:〒475-0945 愛知県半田市池田町3丁目1-1',
    lat: 34.902129,
    lng: 136.883238
}, {
    name: '鞍ケ池公園:〒471-0002 愛知県豊田市矢並町法沢714-5',
    lat: 35.098166,
    lng: 137.218072
}, {
    name: '安城デンパーク:〒446-0046 愛知県安城市赤松町梶',
    lat: 34.931072,
    lng: 137.060880
}
];
  
function initMap() {
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('g-map'), { // #sampleに地図を埋め込む
     center: mapLatLng, // 地図の中心を指定
      zoom: 10 // 地図のズームを指定
  });
  
 // マーカー毎の処理
  for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
        position: markerLatLng, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
      });
  
     infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
         content: '<div class="map">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
      });
  
     markerEvent(i); // マーカーにクリックイベントを追加
  }
  map.addListener('click', function(e) {
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
    console.log(e.latLng.toString());
    this.panTo(e.latLng);
  });
}
  
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}