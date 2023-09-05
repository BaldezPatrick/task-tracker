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
