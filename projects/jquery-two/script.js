$(function(){
	var avengers, 
		avengersLIs
		;

	avengers = ['Iron Man', 'Thor', 'Hulk', 'Ant Man', 'Wasp'];
	
	//Code goes here!

	function buildHtmlListItems(array){
		var result = [];
		result = array.map(function(item){
			var id = item.toLowerCase().replace(" ", "-");
			return '<li id="' + id + '">' + item + '</li>';
		});
		return result;
	}

	function appendListItems(array, target) {
		for (var i=0; i<array.length; i++) {
			$(target).append(array[i]);
		}
	}
	
	function appendListWithTimeout(array, target, millisecs){
		var i = 0;
		function appendWithTimer(){
			setTimeout(function() {
				$(target).append(array[i]);
				i++;
				if (i<array.length) {
					appendWithTimer();
				}
			},millisecs);
		}
		appendWithTimer();
	}

	(function(){
		avengers.splice(3,2,'Captain America');
	}());

	//centering function
	// jQuery.fn.center = function () {
	//     this.css("position","absolute");
	//     this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
	//                                                 $(window).scrollTop()) + "px");
	//     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
	//                                                 $(window).scrollLeft()) + "px");
	//     return this;
	// };


	$('body').css({
		'color' : 'rgb(175,175,175',
		'font-family' : '"Oswald", sans-serif;',
		'background-color' : 'rgb(0,0,0)'
	});
	$('.container').remove();

	$('body').append('<middle/>'); // renamed from <main/> because to get around default bootstrap settings
	$('body').prepend('<header/>');
	$('middle').append('<div id="container"/>');
	$('#container').append('<ul id="avengers"/>');
	$('#container').append('<div id="buttons">');
	$('#buttons').append('<button id="move_button">Move to Bottom</button>');
	$('#buttons').append('<button id="sort_button">Sort List</button>');
	

	//Exercise 3 setup 
	$('middle').css('max-width', '600px');
	$('#container').css({
		//'min-height' : '150px'
	});
	$('button').css({
		'border-radius' : '5px',
		'display' : 'block',
		'margin' : '10px',
		'color' : 'rgb(30,30,30)',
		'font-family' : '"Bangers", cursive;'
	});
	//$('#container').center();
	$('header').append('<img id="logo" src="img/avengers_logo.png">');
	$('#logo').css({
		'display' : 'block',
		'margin' : '0 auto',
		'width' :'250px'
	});
	$('#avengers').css({
		'font-family' : '"Bangers", sans-serif',
		'list-style-type' : 'none',
		'font-size' : '30px',
		'text-align' : 'center',
		'min-height' : '170px' 
	});

	$('#move_button').on('click', function(){
		var $item = $('#avengers li').first();
		$item.remove();
		$('#avengers').append($item);
	});

	$('#sort_button').on('click', function(){
		$('#avengers li').remove();
		avengersLIs.sort();
		appendListItems(avengersLIs, '#avengers');
	});

	avengersLIs = buildHtmlListItems(avengers);
	avengers.sort();
	appendListWithTimeout(avengersLIs, '#avengers', 500);

});