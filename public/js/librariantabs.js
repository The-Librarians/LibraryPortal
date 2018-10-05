var $button1 = $('.button-user');
var $button2 = $('.button-book');
var $button3 = $('.button-media');

var $div1 = $('#userInput');
var $div2 = $('#bookInput');
var $div3 = $('#mediaInput');

var toggleDivs = function () {
    $div1.fadeToggle();
    $div2.fadeToggle();
    $div2.fadeToggle();
};

$button1.click(toggleDivs);
$button2.click(toggleDivs);
$button3.click(toggleDivs);