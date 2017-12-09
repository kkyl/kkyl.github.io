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




function directTo(id, route) {
	$("#"+id).click(function() {
  		window.open(route,"_blank");
	});
}

function allButtons(){
	directTo("findings", "/findings.html");
	directTo("interviews", "https://drive.google.com/open?id=1SuffZNwistQ9tVHJUs8avDW9eUx6v79mlzYUnIJI8cU");
	directTo("competitors", "https://drive.google.com/open?id=19lAbY7_jslVOv6jfReksxPk7Rhm2US-KOIqxTkOAAKY");
	directTo("feature_matrix", "https://drive.google.com/open?id=1CTw-m5wmO32PBF0q-rJIbXytDMI57VshYJZ8SXsqLbo");
	directTo("prioritization", "https://drive.google.com/open?id=1YR_Jlci-fm6gvBu6qJnf4okBXrHIIGEHIIQWtob5iv4");
	directTo("stories", "https://drive.google.com/open?id=1RpNsxdzCXqMODr84NXSIGzFmWn9Gmpnr2X6nlDmVTG4");
	directTo("cog_walk", "https://drive.google.com/open?id=1y_0MUzCxE3MnfkqKeGvPEo24Z-g781WPKMva1gkUni0");
	directTo("navtest", "https://usabilityhub.com/tests/728cf7599990/results/b306120d84bd");
	directTo("sectest", "https://usabilityhub.com/tests/5568d5f9d6e/results/53a6216821ae");
}

/* run when documents is ready*/
$(document).ready(function(){

	fade_page_load();

	/* move to background section when user clicks the learn more button */
	animate_nav('learn-more', 'background');

	/* hide the old extracurriculars first, show/hide will be toggled by a button */
	$("#div-hide").hide();
	toggle_extras();
	
	allButtons();

});