function animate_nav(linkid, destid){
    $('#'+linkid).click(function() {
	    $('html,body').animate({
	        scrollTop: $('#'+destid).offset().top
	    }, '1600');
	});
}

function fade_page_load(){
	$('body').fadeIn('slow');
}

function toggle_extras(){
    $('#old-extra').click(function() {
	    $('#div-hide').slideToggle('slow');
	   if ($('#old-extra').text() == "Display Older Events"){
	   		$('#old-extra').text("Collapse Older Events");
	   }
	   else{
	   		$('#old-extra').text("Display Older Events")
	   }
	});
}


$(document).ready(function(){

	fade_page_load();
	animate_nav('learn-more', 'background');

	$("#div-hide").hide();
	toggle_extras();

});