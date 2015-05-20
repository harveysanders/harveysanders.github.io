$( document ).ready(function(){
            
            
            var pixelSize;
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
                    pixelSize = gridSize/ resolution;
                } else {
                    gridSize = gridSize;
                    pixelSize = gridSize / resolution;
                }
                for (var i=0; i< Math.pow(resolution,2); i++ ) {
                    $('.sketch_grid').append('<div class="pixel"></div>\n');
                }
                console.log(resolution, " x ", resolution, " grid created.");
                $('.sketch_grid').css({"height": stringify(gridSize), "width": stringify(gridSize)});
                $(".pixel").css({
                "height": stringify(pixelSize), 
                "width": stringify(pixelSize),
                "backgroundColor": randomHexColor(),// original color: "#91e869",
                "float": "left",
                });
            };
            

            var changePixelOnHoverToRandom = function() {
                $('.pixel').mouseenter(function() {
                    $( this ).css({'backgroundColor': randomHexColor()});
                });
            }

            createGrid(16);
            changePixelOnHoverToRandom();
            
            $('#ppResInput').on('input', function() {
                if ($('#ppResInput').val() > 100) {
                    $('#ppResInput').val(100);
                }
            });      
            
            $('#ppResolutionSetButton').click(function() {
                var resolution = $("#ppResInput").val();
                $('.sketch_grid').html("");
                createGrid(resolution);
                changePixelOnHoverToRandom();
            });

              
            
       	});