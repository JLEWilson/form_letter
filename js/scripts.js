$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const personName = $("input#person").val();

    $(".person").text(personName);

    $("#letter").show();
  });
});