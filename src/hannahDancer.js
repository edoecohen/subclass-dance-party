var makeHannahDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "hannah";
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeHannahDancer.prototype = Object.create(makeDancer.prototype);
makeHannahDancer.prototype.constructor = makeHannahDancer;

makeHannahDancer.prototype.step = function() {

};
