var allDIVs = $('div');
var allULs = $('ul');

$('p').css('color', 'blue');
$('#container').css('background-color', 'red');
$('.holder').css('border', '1px solid black');

$('ul li').css('font-weight', 'bold');
$('p').not('#target').remove();
$('#container').prepend('<div>hello</div>');
$('#container').append('<div>goodbye</div>');
$('body').prepend('<div>prepend the body</div>');
$('body').append('<div>append the body</div>');
$('div.holder').first().before('<div id="first"></div>');
$('div.holder').last().after('<div id="last"></div>');

var newDetachedDiv = $('body').append('<div>Detached Div</div>');
newDetachedDiv.css('background-color', 'green');
$('body').find(allULs).css('color', '#ccc');

var parentNode = $('#target').parent();
var childrenNodes = parentNode.children();

function randomHexColor() {
    function randomHexNum() {return (Math.floor(Math.random()*255) + 1).toString(16);};
    var result = '#' + randomHexNum() + randomHexNum() + randomHexNum();
    return result;
};

setInterval(function(){
	allDIVs.css('background-color', randomHexColor);
}, 500);

