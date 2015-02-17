
var questions;
var images;
var answers;
var body;
var count = -1;
var prep = true;
$(document).ready(function(){
	if (localStorage.hasOwnProperty(JSON.parse(localStorage.currCat))){
		var loadedCards = JSON.parse(localStorage[JSON.parse(localStorage.currCat)]);
		questions = loadedCards.questions;
		body = loadedCards.body;
		answers = loadedCards.answers;
		images = loadedCards.images;
	}else{
		console.log("Couldnt load cards");
	}
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
		if (body[count % questions.length] !== ""){
			$(".qImg").hide();
			$(".qBody").text(body[count % questions.length]);
			$(".qBody").show();
		}
		// current answer
		$(".answer").text(answers[count % questions.length]);
		
	};