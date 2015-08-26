var every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    return collection.length === 0 || collection === {} ? true : "not empty";
    // _.reduce(collection, function(isTrue, item) {
    //   return iterator(item) ? true : false;
    // });
  };

  console.log