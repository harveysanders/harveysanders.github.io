$(function(){
	var avengers, 
		avengersLIs
		;

	avengers = ['Iron Man', 'Thor', 'Hulk', 'Ant Man', 'Wasp'];
	
	//Code goes here!

	function buildHtmlListItems(array){
		var result = [];
		result = array.map(function(item){
			return ($('<li>' + item + '</li>').attr('class', item.toLowerCase().replace(' ', '-')));
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

	function addHulk(time) {
		$('#hulk').fadeIn(time);
	}

	$('body').css({
		'color' : 'rgb(175,175,175',
		'font-family' : '"Oswald", sans-serif;',
		'background-color' : 'rgb(0,0,0)'
	});
	$('.container').remove();

	$('body').prepend('<middle/>'); // renamed from <main/> because to get around default bootstrap settings
	$('body').prepend('<header/>');
	//$('header').append('<img id="logo" src="img/avengers_logo.png">');
	$('middle').append('<div id="container"/>');
	$('#container').addClass('container-fluid');
	$('#container').prepend($('<div/>').attr('class', 'row')); 
	//same as ^^^ $('#container').prepend('<div class="row"/>'); 
	
	$('.row').append('<div id="iron_man"/>');
	$('.row').append('<div id="capt_america"/>');
	$('.row').append('<div id="character_list"/>');
	$('.row').append('<div id="hulk"/>');
	$('.row').append('<div id="thor"/>');
	$('#character_list').append('<img id="logo" src="img/avengers_logo.png">');
	$('#character_list').append('<ul id="avengers"/>');
	$('#character_list').append('<div id="buttons">');
	$('#buttons').append('<button id="move_button">Move to Bottom</button>');
	$('#buttons').append('<button id="sort_button">Sort List</button>');
	$('#iron_man').append('<img src ="img/iron_man.png">');
	$('#capt_america').append('<img src ="img/capt_america.png">');
	$('#thor').append('<img src ="img/thor.png">');
	$('#hulk').append('<img src ="img/hulk.png">');
	$('#hulk').hide();

	//example
	//$("<ul>").append($('<li>').attr('class','iron_man'));

	
	//Bootstrap Classes
	$('.row').addClass('text-bottom');
	$('#iron_man').addClass('col-xs-2 pull-down');
	$('#capt_america').addClass('col-xs-2 pull-down');
	$('#character_list').addClass('col-xs-4 text-center');
	$('#hulk').addClass('col-xs-2 text-left');
	$('#thor').addClass('col-xs-2 pull-down');
	$('#buttons').addClass('btn-group');
	$('button').addClass('btn-sm');

	//align characters to bottom

	//Exercise 3 setup 
	$('.pull-down').css('margin-top', '100px');
	$('#iron_man').hide().fadeIn(2000, addHulk(2000));
	
	$('#thor').css({
		'z-index' : '-10'
	});

	$('.btn-group').css({
		'font-family' : '"Oswald"',
		'color' : 'rgb(30,30,30)'
	});

	$("#character_list img").css({
		'margin-top' : '30px',
		'width':'250px'
	});

	$('#avengers').css({
		'font-family' : '"Bangers", sans-serif',
		'list-style-type' : 'none',
		'font-size' : '30px',
		'padding' : '0px',
		'margin' : '50px 0px 50px 0px',
		'min-height' : '170px' 
	});


	$('#iron_man').fadeIn();

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