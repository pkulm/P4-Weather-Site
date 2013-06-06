// JavaScript Document

$(document).ready(function(){

var getZip = $('input').val();
console.log('zip');


$('.btn').click(function(){ 
	$.simpleWeather({
	zipcode: getZip,
	//woeid: '2357536',
	//location: '',
	unit: 'f',
	success: function(weather) {
		html = '<h2>'+weather.city+', '+weather.region+'</h2>';
		html += '<img style="float:left;" width="125px" src="'+weather.image+'">';
		html += '<p>'+weather.temp+'&deg; '+weather.units.temp+'<br /><span>'+weather.currently+'</span></p>';
 
		$("#weather").html(html);
	},
	error: function(error) {
		$("#weather").html('<p>'+error+'</p>');
	}
});
	});

	
});
