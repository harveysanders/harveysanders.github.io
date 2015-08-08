$(function(){
	var avengers = ['Iron Man', 'Thor', 'Hulk', 'Ant Man', 'Wasp'];

	//Code goes here!
	function addList(array){
		
		var elements = [];
		$('body').append('<ul id="avengers"/>');
		
		elements = array.map(function(item){
			var id = item.toLowerCase().replace(" ", "-");
			return '<li id="' + id + '">' + item + '</li>';
		});
		
		// for (var i=0; i<elements.length; i++) {
		// 	$('#avengers').append(elements[i]);
		// }
	
		var i = 0;
		function appendWithTimer(){
			setTimeout(function() {
				$('#avengers').append(elements[i]);
				i++;
				if (i<elements.length) {
					appendWithTimer();
				}
			},1000);
		}
		appendWithTimer();

	}

	(function(){
		avengers.splice(3,2,'Captain America');
	}());

	avengers.sort();
	addList(avengers);

	$('body').append('<div id="container"/>');
	$('#container').append('<button id="move_button">Move to Bottom</button>');
	$('#container').append('<button id="sort_button">Sort List</button>');

	$('#move_button').on('click', function(){
		var $item = $('#avengers li').first();
		$item.remove();
		$('#avengers').append($item);
	});

	$('#sort_button').on('click', function(){
		$('#avengers li').remove();
		elements.sort();
		for (var i=0; i<elements.length; i++) {
			$('#avengers').append(elements[i]);
		}
	

	});

});