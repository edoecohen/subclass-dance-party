var makeFoxDancer = function(top, left, timeBetweenSteps) {
  this.imageName = "fox";
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

makeFoxDancer.prototype = Object.create(Dancer.prototype);
makeFoxDancer.prototype.constructor = makeFoxDancer;

makeFoxDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.animate({top: '+=100px'});
  if(this.$node.position().top > $(window).height()){
    clearTimeout(this.stop);
    $(this.$node).hide();
  };
  console.log(this.$node.position().top);
};
