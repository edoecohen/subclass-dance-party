var makeHannahDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="dancer"><img src="images/hannah.gif" class="hannah"><image src="images/blood.png" class="blood"/></img></img></div');
  this.setPosition(top, left);
};

makeHannahDancer.prototype = Object.create(makeDancer.prototype);
makeHannahDancer.prototype.constructor = makeHannahDancer;

makeHannahDancer.prototype.step = function() {

};
