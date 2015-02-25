console.log('This would be the main JS file.');
$(function(){
	$("#info-btn").click(function(){
		$("#about-sitepool").addClass("flow");
		console.log('This would be the main JS file.');
	});
	$("#hide").click(function(){
		$("#about-sitepool").removeClass("flow");
		console.log('This would be the main JS file.');
	});
});

