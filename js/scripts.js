$(document).ready(function(){
  $("#select").change(function(event){
    console.log("test");
    var animal = $("#select").val().toLowerCase().replace(" ", "-");
    console.log(animal);
    $(".images").children().hide();
    $("#"+animal).show();
    event.preventDefault();
  });


})
