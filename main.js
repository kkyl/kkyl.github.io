/* external JavaScript/JQuery for index.html */
/* author: Kristy Lin */
/* not as much javascript code as html/css files, only added what added effect to the website without extraneous elements */


/* have screen move to given destination id section */
function animate_nav(linkid, destid){
    $('#'+linkid).click(function() {
	    $('html,body').animate({
	        scrollTop: $('#'+destid).offset().top
	    }, 1100);
	});
}

/* load page with fade in */
function fade_page_load(){
	$('body').fadeIn('slow');
}

/* toggle showing older extracurriculars in "extra experiences" section */
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




function directToFindings() {
    window.location.href = "/findings.html";
}

function directToStories() {
    window.location.href = "/index.html";
}
/* run when documents is ready*/
$(document).ready(function(){

	fade_page_load();

	/* move to background section when user clicks the learn more button */
	animate_nav('learn-more', 'background');

	/* hide the old extracurriculars first, show/hide will be toggled by a button */
	$("#div-hide").hide();
	toggle_extras();

	document.getElementById("findings").onclick = function() {directToFindings()};
	document.getElementById("stories").onclick = function() {directToStories()};

});