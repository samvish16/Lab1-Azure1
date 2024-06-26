<script>
    // Function to add a new task
    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskList = document.getElementById("taskList");
        var taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        var taskItem = document.createElement("div");
        taskItem.classList.add("task");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            var taskTextElement = this.nextElementSibling;
            if (this.checked) {
                taskTextElement.style.textDecoration = "line-through";
            } else {
                taskTextElement.style.textDecoration = "none";
            }
        });

        var taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            var taskItem = this.parentNode;
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
</script>
