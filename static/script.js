/* Initial Selected Elements */

let taskInput = document.getElementById("new-task"); // new task

let addButton = document.getElementById("addButton"); // first button

let incompleteTasks = document.getElementById("incomplete-tasks"); // incomplete tasks

let completedTasks = document.getElementById("completed-tasks"); // completed tasks

let clearButton = document.getElementById("clear");

let dark_mode_button = document.getElementById("dark_mode");

/* Add To Do */

let addTask = function() {
    if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
    let listItem = createNewTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
   
}

addButton.addEventListener("click", addTask);


/* Create New Task Function */

let createNewTask = function(taskName) {
    // create List item
    let listItem = document.createElement("li");
    // input checkBox 
    let checkBox = document.createElement("input");
    // label
    let label = document.createElement("label");
    // input (text)
    let editInput = document.createElement("input");
    // button.edit
    let editButton = document.createElement("button");
    // button.delete
    let deleteButton = document.createElement("button");

    // Each element needs modified
    checkBox.type = "checkBox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}


/* Bind Task Events Function */

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    // select list items children
    let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");


    // bind editTask top edit button
    editButton.onclick = editTask;
    // bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    // bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}


/* Edit Task */

let editTask = function() {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");

    // if the listItem element contains the editMode class
    if (containsClass) {
        // Switch from .editMode
        // input value becomes the label's value
        label.innerText = editInput.value;
    } else {
        // Switch to .editMode
        // input value becomes the label's text
        editInput.value = label.innerText;
    }
    // Toggle .editMode class on and off
    listItem.classList.toggle("editMode");
}


/* Delete Tasks */

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem)
}


/* Mark a Task As Completed */

let taskCompleted = function() {
    // When the Checkbox is checked
    // Append the task list item to the #completed-tasks ul
    let listItem = this.parentNode;
    completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}


/* Mark a Task As Incompelte */

let taskIncomplete = function() {
    // When the checkbox is unchecked appendTo #incomplete-tasks
    let listItem = this.parentNode;
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

/* Clear All The Tasks */

let clear = function() {
    incompleteTasks.innetHTML = "";
    completedTasks.innerHTML = "";
}
clearButton.addEventListener('click', clear);

let dark_mode = function(){
    var element = document.body;
    element.classList.toggle("dark_mode");
}
dark_mode_button.addEventListener('click', dark_mode);

