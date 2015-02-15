var catagories = ["Duck 1","Duck 2","Duck 3","Duck 4"];
var catImages = ["./images/duck1.jpg","./images/duck2.jpg","./images/duck3.jpg","./images/duck4.jpg"];
$(document).ready(function(){
	for (var i = 0; i <catagories.length; ++i){
		var newCat = $('<div></div>');
		newCat.addClass('cat');
		var pic = $('<img>');
		pic.addClass('catPic');
		pic.attr("src",catImages[i]);
		newCat.append(pic);
		var name = $('<p></p>');
		name.addClass('catname');
		name.text(catagories[i]);
		newCat.append(name);
		$('#catContainer').append(newCat);
	}
});