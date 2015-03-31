var makeDogDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="dancer"><img src="images/dog.gif" class="dog"><img src="images/bloodOnce.gif" class="blood"></img></img></div');
  this.setPosition(top, left);
};

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
