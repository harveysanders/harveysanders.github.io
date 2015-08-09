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

	avengersLIs = buildHtmlListItems(avengers);
	avengers.sort();
	appendListWithTimeout(avengersLIs, '#avengers', 500);

	$('body').append('<div id="container"/>');
	$('#container').append('<ul id="avengers"/>');
	$('#container').append('<button id="move_button">Move to Bottom</button>');
	$('#container').append('<button id="sort_button">Sort List</button>');

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

});