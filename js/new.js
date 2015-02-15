$(document).ready(function(){
	$("input[type='submit']").click(function(){
		$("#card").flip({
			direction:'bt',
			color:'white',
			// onBefore: function(){
			// 	$(".question").hide();
			// 	$(".qImg").hide();
			// 	$(".qBody").hide();
			// },
			// onEnd: function(){
			// 	$(".answer").show();
			// }
		});
	});
});