
var questions = ["What symbol is this?","Whats this line called","How would you get the area under a curve?","Whats the formula for the magnitude of a line?"];
var images = ["./images/sigma.png","./images/tangent.gif","",""];
var answers = ["Sigma.","The tangent line.","Take the integral.","((x2 - x1)^2 + (y2 - y1)^2)^(1/2)"];
var words = ["", "", "...", "Think Pythagoras.."];
var count = -1;
var prep = true;
$(document).ready(function(){
	$("#next").click(changeCard);
	$("#prev").click(changeCard);
	$("#card").click(function(){
		$("#card").flip({
			direction:'tb',
			color:'white',
			onBefore: function(){
				$(".question").hide();
				$(".qImg").hide();
				$(".qBody").hide();
			},
			onEnd: function(){
				$(".answer").show();
			}
		});
	});
});

	var changeCard = function (){
		if (prep){
			var pic = $('<img>');
			pic.addClass('qImg');
			$("#card").append(pic);
			prep = false;
		}
		$(".answer").hide();
		// current question
		if ($(this).get(0) === $("#next").get(0)){
			$(".question").text(questions[++count % questions.length]);
		}
		else {
			$(".question").text(questions[--count % questions.length]);
		}
		if (count>0){
			$("#prev").show();
		}
		else {
			$("#prev").hide();
		}
		$(".question").show();
		// current qImg
		if (images[count % questions.length] !== ""){
			$(".qBody").hide();
			$(".qImg").attr("src",images[count % questions.length]);
			$(".qImg").show();
		}
		// current question description/multiple choice optinons??
		if (words[count % questions.length] !== ""){
			$(".qImg").hide();
			$(".qBody").text(words[count % questions.length]);
			$(".qBody").show();
		}
		// current answer
		$(".answer").text(answers[count % questions.length]);
		
	};