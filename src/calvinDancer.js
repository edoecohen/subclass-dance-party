var makeCalvinDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "calvin";
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeCalvinDancer.prototype = Object.create(Dancer.prototype);
makeCalvinDancer.prototype.constructor = makeCalvinDancer;

makeCalvinDancer.prototype.step = function() {

  // makeDancer.prototype.step.call(this);

};
