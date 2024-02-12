
function addTask() {
    var newTaskText = document.getElementById("new-task").value;

    if (newTaskText.trim() === "") {
      alert("Please Enter a task.");
      return;
    }

    var todoList = document.getElementById("todo-list");

    var li = document.createElement("li");
    li.className = "todo-item";

    var span = document.createElement("span");
    span.textContent = newTaskText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    document.getElementById("new-task").value = "";
  }