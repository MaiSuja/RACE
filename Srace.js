$(document).ready(function() {

  var meters = 20;
    function Animal (name, speed, focus) {
      this.name = name;
      this.speed = speed;
      this.focus = focus;
      this.position = 0;
      this.finalPosition = meters;
      this.isFocused = function () {
        return Math.floor (Math.random () * 10) < this.focus;
          }
      this.advance = function () {
        if (this.isFocused()) { 
          this.position += this.speed;
          }
        }
      this.progressReport = function () {
        if (this.position < this.finalPosition) { 
          return this.name + " is at: " + this.position;
            }
        else { 
          return this.name + " has won!";
          }  
        }
      };

  $('button').click(function() {
    $('.race').slideDown();
  });

  $('.rabbit,.turtle,.wolf').click(function() {
  var rabbit = new Animal ("Rocky the Bunny", 8, 4);
  var turtle = new Animal ("Myrtle the Turtle", 3, 7);
  var wolf = new Animal ("Big Bad Wolf", 6, 8);
  var meters = 20;
  var timerId = setInterval (function() {

    if (rabbit.position < meters && turtle.position < meters && wolf.position < meters) {
      rabbit.advance();
      turtle.advance(); 
      wolf.advance();
      $('.rabbit').css('right', rabbit.position + 'px');
      $('.turtle').css('right', turtle.position + 'px');    
      $('.wolf').css('right', wolf.position + 'px');
      }
    else {
      clearInterval(timerId);
        }
    } , 1000);
})
});
