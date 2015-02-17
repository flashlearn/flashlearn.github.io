$(document).ready(function(){
	$("form").on("submit",function(){
	var catCards = {};
	var catName = JSON.parse(localStorage.currCat);
	var form = document.forms["cardForm"];
	if (!localStorage.hasOwnProperty(catName)){
		console.log("Initializing: " + catName);
		catCards.questions = [form["question"].value];
		catCards.body = [form["body"].value];
		catCards.answers = [form["answer"].value];
		catCards.images = [form["image"].value];
	}else{
		console.log("Updating: " + catName);
		var oldCards = JSON.parse(localStorage[catName]);
		oldCards.questions = oldCards.questions.concat(form["question"].value);
		oldCards.body = oldCards.body.concat(form["body"].value);
		oldCards.answers = oldCards.answers.concat(form["answer"].value);
		oldCards.images = oldCards.images.concat(form["image"].value);
		catCards = oldCards;
	}
	localStorage[catName] = JSON.stringify(catCards);
	});
});