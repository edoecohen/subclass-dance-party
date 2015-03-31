var makeCalvinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="gifs/calvin.gif" class="calvin"></img>');
  this.setPosition(top, left);
};

makeCalvinDancer.prototype = Object.create(makeDancer.prototype);
makeCalvinDancer.prototype.constructor = makeCalvinDancer;

makeCalvinDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
