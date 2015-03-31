$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  });

  var blood = new Image();
  blood.src = "images/bloodOnce.gif";

  $(document).on('click', '.hannah', function(e){
    $(this).parent().find('.blood').show();

    setTimeout(function(){
        $(this).parent().find('.blood').fade();
      },1000);
    
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


});

