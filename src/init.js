$(document).ready(function(){
  window.dancers = [];

  var makers = [ 'makeDogDancer', 'makeFoxDancer', 'makeCalvinDancer', 'makeHannahDancer' ];

  var autoPopulate = function(){

    var dancerMakerFunctionName = makers[Math.floor(Math.random() * makers.length)];

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    var dancer =  makeDogDancer;
  };
  setInterval(autoPopulate, 600);


  var onTarget = function(){
    $(document).on('click', '.dancer', function(e){
      $(this).parent().find('.blood').show();
      setTimeout(function(){
        $('.blood').fadeOut();
      }, 2000)

      var interval = null;
      var counter = 0;
      var $this = $(this);
      clearInterval(interval);

      interval = setInterval(function(){
          if (counter != -360) {
              counter -= 1;
              $this.css({
                  MozTransform: 'rotate(-' + -counter + 'deg)',
                  WebkitTransform: 'rotate(' + -counter + 'deg)',
                  transform: 'rotate(' + -counter + 'deg)'
              }).animate({left: '+=' + counter + 'px'}, 0.10);
          }
      }, 0.001);
    });
  }

  onTarget();
});

