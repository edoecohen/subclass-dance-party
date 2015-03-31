var makeDogDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "dog";
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeDogDancer.prototype = Object.create(Dancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
