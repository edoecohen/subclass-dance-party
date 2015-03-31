var makeFoxDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="gifs/fox.gif" class="dog"></img>');
  this.setPosition(top, left);
};

makeFoxDancer.prototype = Object.create(makeDancer.prototype);
makeFoxDancer.prototype.constructor = makeFoxDancer;

makeFoxDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
