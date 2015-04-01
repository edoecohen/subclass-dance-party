// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<div class="dancer_con"><img src="images/' + this.imageName + '.gif" class="' + this.imageName + ' dancer"><image src="images/blood.png" class="blood"/></img></img></div>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){

  // Requires an extra clock step
  this.stop = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.step.bind(this) --> returns a function that is bound to the keyword this
  // this.step.bind(this) --> happens before we invoke setTimeout

  // does not require an extra clock step
  // var context = this; --> to reference the right context of this
  // setTimeout(function(){ context.step() }, this.timeBetweenSteps);
  // Lookup happens after invoking setTimeout
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
