var makeFoxDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "fox";
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeFoxDancer.prototype = Object.create(Dancer.prototype);
makeFoxDancer.prototype.constructor = makeFoxDancer;

makeFoxDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
