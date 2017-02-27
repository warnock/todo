function ToDoList(task) {
  this.task = task;
}
$(document).ready(function() {
  $("form#newTask").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#task").val();
    var newTask = new ToDoList(inputtedTask);
    $("ul#taskAdded").append("<li>" + inputtedTask + "</li>");
    $("input#task").val("");
  });
});
