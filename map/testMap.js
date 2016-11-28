
    
function initMap(){

    var mapId ={
	zoom: 13,
	center: new google.maps.LatLng(35.890358,136.344221)
    };

    map = new google.maps.Map(document.getElementById("map"),mapId);
}

/*公共クラウドの全国データ*/
function setMarkerTS(name,lat, lng, info, link){

    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
	position: latlng,
	map: map
    });

    var s = name; 
    if(link){
	s = '<a traget=_blank href='+link+'>'+name+'</a>';
    }
    if(info){
	s += '<div class="marker">'+info+'</div>';
    }

    var infoWindow = new google.maps.InfoWindow({
	content: s
             
    });
    
    google.maps.event.addListener(marker,'mouseover',function(){
	infoWindow.open(map, marker);
    });

    google.maps.event.addListener(marker,'mouseout',function(){
	infoWindow.close();
    });
}

/*名称と緯度・経度のみ表示*/
function setMarker(label,lat, lng, img){

    var latlng = new google.maps.LatLng(lat,lng);
/*    var image = {
	url:img,
	scaledSize : new google.maps.Size(32, 32)
	}*/
    var marker = new google.maps.Marker({
	position: latlng,
	map: map,
	icon:img
    });

    var s = label; 

    var infoWindow = new google.maps.InfoWindow({
	content: s
     });
    
    google.maps.event.addListener(marker,'mouseover',function(){
	infoWindow.open(map, marker);
    });

    google.maps.event.addListener(marker,'mouseout',function(){
	infoWindow.close();
    });

}
/*GPSの位置表示*/
function setGeoMarker(r, lat, lng){

    var latlng = new google.maps.LatLng(lat,lng);
    var image = {
	url:"img/group.jpg",
	scaledSize : new google.maps.Size(32, 32)
    }
    var marker = new google.maps.Marker({
	position: latlng,
	map: map,
	icon:image
    });
    
    google.maps.event.addListener(marker,'mouseover',function(){
        infoWindow.open(map, marker);
    });

    google.maps.event.addListener(marker,'mouseout',function(){
	infoWindow.close();
    });

    var infoWindow = new google.maps.InfoWindow({
	content: "現在地"
    });

 /*   
    new google.maps.Circle({
         map: map,
         center: latlng,
         radius: 500, // 単位はメートル
         strokeColor: '#0088ff',
         strokeOpacity: 0.8,
         strokeWeight: 1,
         fillColor: '#0088ff',
         fillOpacity: 0.2
    });
*/
}
