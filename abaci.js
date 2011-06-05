/**
* abaci is a JavaScript wrapper to enable basic UI functionality for online calculators
*
*
* @author Todd Gehman (toddgehman@gmail.com)
* 
* abaci is distributed under the Do What The Fuck You Want To Public License
* http://sam.zoy.org/wtfpl/ 
*/

var abaci = {}

abaci.Calculator = function() {
  this.bindActiveHighlighting();
}

abaci.Calculator.prototype.bindActiveHighlighting = function() {
  var scope = this;
  $('form.abacus input[type=text]:not(.focused)').each(function(){
    var $input_element = $(this);
    $input_element.addClass('blurred');
    $(scope._labelFor($input_element)).addClass('blurred');
  });

  $('form.abacus input[type=text]').focus(function() {
    var $input_element = $(this);
    $input_element.addClass('focused').removeClass('blurred')
    $(scope._labelFor($input_element)).addClass('focused').removeClass('blurred');
  })

  $('form.abacus input[type=text]').blur(function() {
    var $input_element = $(this);
    $input_element.removeClass('focused').addClass('blurred');
    $(scope._labelFor($input_element)).removeClass('focused').addClass('blurred');
  })
};

abaci.Calculator.prototype._labelFor = function($input_element) {
  return $input_element.parent().find('label[for=' + $input_element.attr('name') + ']');
}

// * side effect items of item in focus should be highlighted

// * elements can be locked and unlocked
// * some elements have mutually exclusive locking
// * create example calculator using dog years
// * show results continuously in real time, with placeholders when number is incalculable, etc
// * english units show the total and also the divider that would be used to measure them (with icons)
// * fractions are handled elegantly - they do what a human would expect
