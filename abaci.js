/**
* abaci is a JavaScript wrapper to enable basic UI functionality for online calculators
*
*
* @author Todd Gehman (toddgehman@gmail.com)
* 
* abaci is distributed under the Do What The Fuck You Want To Public License
* http://sam.zoy.org/wtfpl/ 

// Rough development plan:
// 0.2.0 side effect items of item in focus should be highlighted
// 0.3.0 elements can be locked and unlocked
// 0.4.0 some elements have mutually exclusive locking
// 0.5.0 show results continuously in real time, with placeholders when number is incalculable, etc
// 0.6.0 english units show the total and also the divider that would be used to measure them (with icons)
// 0.7.0 fractions are handled elegantly - they do what a human would expect
// 0.8.0 dependencies can be assigned individually or as chains
// 0.9.0 chains can be directional and "bounce" based on locking
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

