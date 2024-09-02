// Catch Varibles
let input = document.querySelector(".input");
let add = document.querySelector(".plus");
let tasks_content = document.querySelector(".taskContent");
let clear = document.querySelector(".clear");
let completed = document.querySelector(".completed-tasks span");
let count = document.querySelector(".count-tasks span");
let tasks = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];

window.onload = function () {
  input.focus();
};

// get tasks from local storage
createTask(tasks);

checkStatusClearButton();

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  if (input.value != "") {
    // function that add task to array
    addTaskToArray(input.value);

    // function that create task
    createTask(tasks);

    // empty input
    input.value = "";
    input.focus();
  }
};

function createTask(tasks) {
  tasks_content.innerHTML = "";
  tasks.forEach((ele) => {
    // Create span with class task & delete button
    let task = document.createElement("span");
    task.className = "task";
    task.textContent = ele.title;
    task.setAttribute("data-id", ele.id);

    // Create delete button
    let del_task = document.createElement("span");
    del_task.appendChild(document.createTextNode("delete"));
    del_task.className = "delete";
    task.appendChild(del_task);
    tasks_content.appendChild(task);

    // check status
    if(ele.complete){
      task.className = "task done";
    }
  });

  // update count tasks
  CountTasks();

  checkStatusClearButton();
}

function addTaskToArray(taskVal) {
  const task = {
    id: Date.now(),
    title: taskVal,
    complete:false
  };
  tasks.push(task);
  // add tasks to local storage
  addToLocalStorage(tasks);
}

function addToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

tasks_content.addEventListener("click", function (e) {
  // action on delete button => (Remove Task)
  if (e.target.classList.contains("delete")) {
    // Get the data-id attribute of the task element
    let taskId = e.target.parentNode.getAttribute("data-id");
    // Remove the task from the tasks array and update local storage
    tasks = tasks.filter((task) => task.id != taskId);
    addToLocalStorage(tasks);
    // Remove the task 
    e.target.parentNode.remove();
  }

  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    // status of the task
    toggleStatus(e.target.getAttribute("data-id"));
  }

  // update count of tasks
  CountTasks();
  
  checkStatusClearButton();
});

function toggleStatus(taskId){
  for(let i = 0; i < tasks.length; i++){
    if(tasks[i].id == taskId){
      tasks[i].complete == true ? (tasks[i].complete = false) : (tasks[i].complete = true);
    }
  }
  // update data in local storage
  addToLocalStorage(tasks);
}
function CountTasks(){
  count.innerHTML = document.querySelectorAll(".todo .tasks .task").length;
  completed.innerHTML = document.querySelectorAll(".tasks .done").length;
}

// Clear All data
clear.addEventListener("click", function () {
  localStorage.clear();
  tasks_content.innerHTML = "";
  tasks = [];
  // remove clear All button
  this.style.display = "none" ;
  // update count of tasks
  CountTasks();

  checkStatusClearButton();
});

function checkStatusClearButton() {
  if(count.innerHTML == 0) clear.style.display = "none";
  else clear.style.display = "block";

}
