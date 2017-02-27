

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#task1").val();
    $("ul#completedTaskList").append("<li>" + inputtedTask + "</li>");
  });
});
