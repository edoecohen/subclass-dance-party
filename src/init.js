$(document).ready(function(){

  window.dancers = [];

  var fb = new Firebase("https://fiery-fire-7499.firebaseio.com/Highscores");

  var highscores;
  var lowestHighscore = 1000;

  var query = fb.orderByValue();
  query.on('value', function(dataSnapshot) {
    highscores = dataSnapshot.val();
    // console.log(highscores);
    // for (var key in highscores) {
    //   console.log(highscores[key] + ': ' + key)
    // }
    // dataSnapshot.forEach(function(e) {
    //   console.log(e.val());
    // })
  });

  var score = 0;
  var timer = 20;

  var makers = ['makeDogDancer', 'makeFoxDancer', 'makeCalvinDancer', 'makeHannahDancer' ];

  var timerId;
  var countDown = function(){

    // TIMER
    timerId = setInterval(function(){
      timer--;
      $('.timer').text(timer);

      // TIMER REACHES ZERO
      if (timer === 0) {

        $('#gameover').show();

        clearInterval(timerId);
        clearInterval(populate);

        var username;
        // NEW HIGHSCORE
        for (var key in highscores){

          if (highscores[key] < lowestHighscore) {
            lowestHighscore = highscores[key];
            lowestHighscoreKey = key;
          }
        }
        if (score > lowestHighscore) {
          $('.newHighscore').show();
          $('.yourScore').text(score);

          $('.newHighscore form').submit(function(event){
            event.preventDefault();
            username = $(this).find('input').val();
            console.log(username);
            $('.newHighscore').hide();

            delete highscores[lowestHighscoreKey];
            highscores[username] = score;
            highscores = sortHighscores();
            appScores();
            fb.set(highscores);
          });
        }
        else {
          highscores = sortHighscores();
          appScores();
        }

        function appScores(){
          for (var key in highscores){
            $('.highScores').append('<li>' + key +
              '<span class="scoreBoard">' + highscores[key] +
              '</span></li>');
          }
        }
        function sortHighscores() {
          var newHighscores = {};

          while (Object.keys(highscores).length > 0) {
            var highestScore = -1;
            var highestKey = -1;
            for(var key in highscores) {
              if (highscores[key] > highestScore) {
                highestScore = highscores[key];
                highestKey = key;
              }
            }
            newHighscores[highestKey] = highestScore;
            delete highscores[highestKey];
          }
          return newHighscores;
        };
      };
    }, 1000);
  };
  countDown();

  var autoPopulate = function(){

    var dancerMakerFunctionName = makers[Math.floor(Math.random() * makers.length)];

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.8 + $("body").height() * 0.1,
      $("body").width() * Math.random() * 0.8 + $("body").width() * 0.1,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    var dancer =  makeDogDancer;

  };

  var popSpeed = 1000;
  var populate = setInterval(autoPopulate, popSpeed);


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

