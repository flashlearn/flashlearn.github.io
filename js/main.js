var catagories = ["Math","History","Geography","Chemistry"];
var catImages = ["./images/math.gif","./images/history.gif","./images/geo.gif","./images/chem.gif"];
var subcatagories = [["Calculus","Trig"],["World War 2","American History"],["Techtonics","Mountain Ranges"],["Organic Chemistry","","Bio Chemistry","Electro Chemistry"]];
var catClicked = false;
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
		var newSubCats = $('<div></div>');
		newSubCats.addClass('subcat');
		var list = $('<ul></ul>');
		list.attr("id","left");
		var list2 = $('<ul></ul>');
		list2.attr("id","right");
		for (var k = 0; k <subcatagories[i].length;++k){
			var listItem = $('<li></li>');
			var link = $('<a></a>');
			link.attr("href", "./cards.html");
			link.data("catID",catagories[i] + "_" + subcatagories[i][k]);
			link.text(subcatagories[i][k]);
			listItem.append(link);
			if (k % 2 === 0){
				list.append(listItem);
			} else{
				list2.append(listItem);
			}
		}
		newSubCats.css("display","none");
		newSubCats.append(list);
		newSubCats.append(list2);
		$('#catContainer').append(newSubCats);
	}
	$('.cat').on('click',function(){
		var mySubCat = $(this).next('.subcat');
		var thisCat = $(this);
		if (!catClicked){
			$('.cat').fadeOut(600,function(){
				$('#catContainer').css({"text-align":"center"});
				thisCat.fadeIn(600);
				mySubCat.slideDown(600);
			});
		}else{
			mySubCat.slideUp(600);
			thisCat.fadeOut(600, function(){
				$('#catContainer').css({"text-align":"left"});
				$('.cat').fadeIn(600);
			});
		}
		catClicked = !catClicked;
	});
	$('a').on('click', function(){
		localStorage.currCat = JSON.stringify($(this).data("catID"));
	});

});