// Check off specific to-dos by clicking
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$('ul').on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').keypress(function() {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append("<li><span>X</span> " + todoText + "</li>");
  }
});
