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
	jQuery.fn.center = function () {
	    this.css("position","absolute");
	    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
	                                                $(window).scrollTop()) + "px");
	    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
	                                                $(window).scrollLeft()) + "px");
	    return this;
	}


	$('body').css({
		'color' : 'rgb(175,175,175',
		'font-family' : '"Bangers", cursive;',
		'background-color' : 'rgb(0,0,0)'
	});
	$('.container').remove();

	$('body').append('<main/>');
	$('body').prepend('<header/>');
	$('main').append('<div id="container"/>');
	$('#container').append('<ul id="avengers"/>');
	$('#container').append('<button id="move_button">Move to Bottom</button>');
	$('#container').append('<button id="sort_button">Sort List</button>');
	
	//Exercise 3 setup 
	$('main').css('width', '60%');
	$('#container').center();
	$('header').append('<img id="logo" src="img/avengers_logo.png">');
	$('#logo').css({
		'display' : 'block',
		'margin' : '0 auto',
		'width' :'250px'
	});
	$('#avengers').css({
		'font-family' : '"Oswald", sans-serif',
		'list-style-type' : 'none',
		'font-size' : '20px',
		'text-align' : 'center' 
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