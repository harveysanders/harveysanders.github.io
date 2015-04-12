$( document ).ready(function(){
            
            
            var squareSize;
            var randomHexColor = function() {
                var randomHexNum = function() {return (Math.floor(Math.random()*255) + 1).toString(16);};
                var result = '#' + randomHexNum() + randomHexNum() +randomHexNum();
                return result;
            };
            
            var stringify = function(n) {
                return (n.toString()) + "px";
            };

            var createGrid = function(resolution, gridSize) {
                
                if (resolution == null) {
                    resolution = 16;
                } else if (resolution > 100) {
                    resolution = 100;
                }else {
                    resolution = resolution; 
                }
                if (gridSize == null) {
                    gridSize = 400;
                    squareSize = gridSize/ resolution;
                } else {
                    gridSize = gridSize;
                    squareSize = gridSize / resolution;
                }
                for (var i=0; i< Math.pow(resolution,2); i++ ) {
                    $('.sketch_grid').append('<div class="square"></div>\n');
                }
                console.log(resolution, " x ", resolution, " grid created.");
                $('.sketch_grid').css({"height": stringify(gridSize), "width": stringify(gridSize)});
                $(".square").css({
                "height": stringify(squareSize), 
                "width": stringify(squareSize),
                "backgroundColor": randomHexColor(),// original color: "#91e869",
                "float": "left",
                });
            };
            
            var changeSquareOnHover = function() {
                $('.square').mouseenter(function() {
                    $( this ).css({'backgroundColor': randomHexColor()});
                });
            }

            createGrid(16);
            changeSquareOnHover();
                
            $('#resetButton').click(function() {
                var resolution = parseInt(prompt("How many squares per side would you like?\n(Max:100)"));
                $('.sketch_grid').html("");
                createGrid(resolution);
                changeSquareOnHover();
            });    
            
       	});