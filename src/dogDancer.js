var makeDogDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="gifs/dog.gif" class="dog"></img>');
  this.setPosition(top, left);
};

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
