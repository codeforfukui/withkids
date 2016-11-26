var map;
    
function initMap(){

    var mapId ={
	zoom: 12,
	center: new google.maps.LatLng(35.890358,136.344221)
    };

    map = new google.maps.Map(document.getElementById("map"),mapId);
}

/*公共クラウドの全国データ*/
function setMaker(name,lat, lng, info, link){

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

/*自販機マーカー用*/
function setMakerVM(location,lat, lng){

    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
	position: latlng,
	map: map
    });

    var s = location; 

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
/*ガソリンスタンドマーカー用*/
function setMarkerSS(label,lat, lng){

    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
	position: latlng,
	map: map
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
/*バス停マーカー用*/
function setMarkerBR(label,lat, lng){

    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
	position: latlng,
	map: map
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
