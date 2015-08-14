$(function(){
	
	$('#container').attr({
		'margin' : '10px',
		'padding' : '10px',
	});


	function printProducts(products){
		var productsToShow = [];

		$.map(products, function(product, index) {
			var $productDiv = $('<div>').attr({
				'class' : 'phone text-left row',
			});
			var $productImgDiv = $('<div>').attr({
				'class':'phone-photo',
				'class' : 'col-sm-2 text-center',
			});
			$productImgDiv.append($('<img>').attr({
				'src' : 'img/product/thumbs/' + product.image,
				'height' : '100px',
			}));
			var $productInfo = $('<div>').attr({
				'class' : 'col-sm-10',
			});
			var $desc = $('<h4>').text(product.desc);
			var $price = $('<h6>').text('$' + product.price).css({
				'color' : 'rgb(33,33,200)',
			});
			var $qty = $('<h6>').text('Qty in stock: ' + product.stock);

			productsToShow.push($productDiv.append($productImgDiv, $desc, $price, $qty));
			
		});
		$('.products').html(productsToShow);
	}

	function searchHandler(query, products){
		var query = query.toLowerCase();
		var results = products.filter(function(product){
			var productKeywords = _.words(product.desc.toLowerCase());
			
			// returns true if a word in desc begins with the query
			var booleanVals = [];
			_.forEach(productKeywords, function(word){
				booleanVals.push(_.startsWith(word, query));
			});
			return (_.some(booleanVals));
			

			//returns true if query complete matches a word in the product desc
			//OR if search input is empty
			// return _.indexOf(productKeywords, query) !== -1 || !query;  
		});
		return results;
	}

	$.getJSON('data/product.json', function(products){
		printProducts(products);

		$('#searchInput').on('input', function(){
			var query = $('#searchInput').val();
			printProducts(searchHandler(query, products));
		});

	});

	
	
});