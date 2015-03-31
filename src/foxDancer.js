var makeFoxDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "fox";
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeFoxDancer.prototype = Object.create(makeDancer.prototype);
makeFoxDancer.prototype.constructor = makeFoxDancer;

makeFoxDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
