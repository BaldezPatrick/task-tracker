const inputTask = document.querySelector("#task");
const sendTask = document.querySelector("#send-task");
const listTask = document.querySelector(".tasks-items-wrapper");
const notifications = document.querySelector(".notifications");

const messages = ["No task to add", "Task added", "Task removed"];

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

const createNotification = (textValue, messageNotification) => {
  const notification = document.createElement("p");
  notification.classList.add("notification");
  if (messageNotification === 0 || messageNotification === 2) {
    notification.style.color = "red";
  } else {
    notification.style.color = "green";
  }
  notification.innerText = textValue;
  notifications.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2000);
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

const addSavedTasks = () => {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    const listOfTasks = JSON.parse(tasks);

    for (let task of listOfTasks) {
      createTask(task);
    }
  }
};

addSavedTasks();

sendTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputTask.value) {
    createNotification(messages[0], 0);
    return;
  }
  createTask(inputTask.value);
  createNotification(messages[1], 1);
});

document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
    createNotification(messages[2], 2);
    saveTasks();
  }
});
