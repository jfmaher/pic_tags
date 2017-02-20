$(document).ready(function() {
	$(".hover-tagged, .tag-group").hover(function(){
		$(".pic-tag", $(this).parent()).toggle();
	});

	$(".pic-tag").hover(function(){
		$("~ .tag-text", this).toggle();
	});
	$(".side-link").hover(function(){
		$("#"+$(this).attr("target")+" .pic-tag").toggle();
	});
	$(".move-button").click(function(){
		$(".image-container").addClass("pos");
	});
});