const inputTask = document.querySelector("#task");
const sendTask = document.querySelector("#send-task");
const listTask = document.querySelector(".tasks-items-wrapper");

const createDeleteButton = (li) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("class", "delete");
  deleteButton.setAttribute("title", "Delete task");
  li.appendChild(deleteButton);
};

const createListItem = () => {
  const li = document.createElement("li");
  li.classList.add("tasks-item");
  return li;
};

const cleanUpInput = () => {
  inputTask.value = "";
  inputTask.focus();
};

const createTask = (textValue) => {
  const li = createListItem();
  li.textContent = textValue;
  listTask.appendChild(li);
  cleanUpInput();
  createDeleteButton(li);
  saveTasks();
};

const saveTasks = () => {
  const liTask = listTask.querySelectorAll("li");
  const listOfTasks = [];
  for (let task of liTask) {
    let taskText = task.innerText;
    taskText = taskText.replace("Delete", "").trim();
    listOfTasks.push(taskText);
  }

  const taskJSON = JSON.stringify(listOfTasks);
  localStorage.setItem("tasks", taskJSON);
};


sendTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

