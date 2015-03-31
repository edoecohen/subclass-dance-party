$(document).ready(function(){

  window.dancers = [];

  var fb = new Firebase("https://fiery-fire-7499.firebaseio.com/Highscores");

  var highscores;
  var lowestHighscore = 1000;

  fb.on('value', function(dataSnapshot) {
    highscores = dataSnapshot.val();
  });

  var score = 0;
  var timer = 5;

  var makers = [ 'makeDogDancer', 'makeFoxDancer', 'makeCalvinDancer', 'makeHannahDancer' ];

  var timerId;
  var countDown = function(){
    timerId = setInterval(function(){
      timer--;
      $('.timer').text(timer);
      if (timer === 0) {
        alert('game over!');
        clearInterval(timerId);
        clearInterval(populate);


        for(var key in highscores){
          if (highscores[key] < lowestHighscore) {
            lowestHighscore = highscores[key];
            lowestHighscoreKey = key;
          }
        }
        if (score > lowestHighscore){
          fb.push({ "Jimmy": score });
        }

        console.log(lowestHighscoreKey + ": " + lowestHighscore);




      }
    }, 1000);
  };
  countDown();

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
  var populate = setInterval(autoPopulate, 600);


  var onTarget = function(){
    $(document).on('click', '.dancer', function(e){
      score++;
      $('.score').html(score);
      console.log(score);
      $(this).parent().find('.blood').show();
      setTimeout(function(){
        $('.blood').fadeOut();
      }, 2000);

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

