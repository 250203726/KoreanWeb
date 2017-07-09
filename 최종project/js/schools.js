// JavaScript Document
//snu
$(document).ready(function(e) {
    $("#snubtn").click(function(){
		$("#snuInfo").slideToggle();
	});
});

function snuMap() {
	var snu=new google.maps.LatLng(37.45905327379554,126.95320129394531);
	var mapOptions1 = {
		center: snu,
		zoom: 14,
		disableDefaultUI: true,
	}
	var map1 = new google.maps.Map(document.getElementById("snumap"), mapOptions1);
	var marker1 = new google.maps.Marker({
			  position: snu,
			  map: map1
	});
}


///ku
$(document).ready(function(e) {
    $("#kubtn").click(function(){
		$("#kuInfo").slideToggle();
	});
});
function kuMap() {
	var ku=new google.maps.LatLng(37.591077300214096,127.02718734741211);
	var mapOptions = {
		center: ku,
		zoom: 15,
		disableDefaultUI: true,
	}
	var map = new google.maps.Map(document.getElementById("kumap"), mapOptions);
	var marker = new google.maps.Marker({
			  position: ku,
			  map: map
	});
}

////yu
$(document).ready(function(e) {
    $("#yubtn").click(function(){
		$("#yuInfo").slideToggle();
	});
});
function yuMap() {
	var yu=new google.maps.LatLng(37.564718402873794,126.93942546844482);
	var mapOptions = {
		center: yu,
		zoom: 15,
		disableDefaultUI: true,
	}
	var map = new google.maps.Map(document.getElementById("yumap"), mapOptions);
	var marker = new google.maps.Marker({
			  position: yu,
			  map: map
	});
}

/////cbnu
$(document).ready(function(e) {
    $("#cbnubtn").click(function(){
		$("#cbnuInfo").slideToggle();
	});
});
function cbnuMap() {
	var cbnu=new google.maps.LatLng(36.62830613199939,127.45659828186035);
	var mapOptions = {
		center: cbnu,
		zoom: 15,
		disableDefaultUI: true,
	}
	var map = new google.maps.Map(document.getElementById("cbnumap"), mapOptions);
	var marker = new google.maps.Marker({
			  position: cbnu,
			  map: map
	});
}