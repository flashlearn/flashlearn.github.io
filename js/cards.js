
var questions = ["Who is this?","What is this duck's name?","Where did the duck go?","The ducks went on a picnic..."];
var images = ["./images/duck1.jpg","./images/duck2.jpg","",""];
var answers = ["Mr. Duck!","Henry!","He went swimming in Lake McMaster.","Kraft Dinner."];
var words = ["", "", "...", "...specifically, Mr.Duck and Henry. If Henry brought peanut butter and jelly sandwiches, what did Mr. Duck bring?"];
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