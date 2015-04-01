var makeHannahDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "hannah";
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeHannahDancer.prototype = Object.create(Dancer.prototype);
makeHannahDancer.prototype.constructor = makeHannahDancer;

makeHannahDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.find('.dancer').toggle();
};
