$(function() {
  //All JS goes within these brackets  

  $("#age-submit").click(function(){

    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 11
    if ( age >= 11 ) {
      //if age is greater than 11 show the next question
      $("#neil-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("no! you'll hurt yourself");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }

  });

  $("#neil-submit").click(function(){
    var neilAlbumsString = $("#neil-albums").val();
    var neilAlbums = parseInt(neilAlbumsString);

    if ( neilAlbums > 4 ) {
      $("#neil-form").hide();
      $("#answer").text("Buy a pair, ballerina!");
      $("#club-img").attr("src", "https://media1.giphy.com/media/r3yo8Boe1pqmY/giphy.gif");

    } else {
      $("#answer").text("no! you'll hurt yourself");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

});
