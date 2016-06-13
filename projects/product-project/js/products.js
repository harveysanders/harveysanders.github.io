(function(){
  const searchInput = document.querySelector('#searchInput');
  

  $.getJSON('data/product.json', data => {
    const $productImgs = createThumbnails(data);
    
    searchInput.addEventListener('input', () => {
      displayProducts(
        createThumbnails(
          handleSearch(data, searchInput.value)
        )
      )
    })

    showAll(data);
  });

  function handleSearch(products, query) {
    return products.filter(product => {
      return product.desc.toLowerCase().includes(query.toLowerCase())
    });
  }

  function createThumbnails(products) {
    return products.map(product => {
      const id = product.image.split('.')[0];
      const thumbUrl = `img/product/thumbs/${product.image}`;
      const prodName = product.desc.split(',')[0];
      const prodDesc = product.desc.split(',').slice(1).join('\n');
      return $('<div>')
        .attr({'id': id, 'class': 'col-md-4'})
        .append(
          $('<div>')
          .addClass('product')
          .append(
            $('<img>')
            .attr('src', thumbUrl)
          ).append(
            $('<div>')
            // .addClass('caption')
            .append( $('<h5>').text(prodName) )
            .append( $('<p>').text(prodDesc) )
            .append( 
              $('<p>')
              .append(
                $('<a>').addClass('btn btn-primary')
                .attr('href', '#')
                .text('Add to Cart')
              )
            )
          )
        )
    });
  }

  function displayProducts(products) {
    $('#products').html(products);
  }

  function showAll(products) {
    displayProducts(createThumbnails(products));
  }
})();