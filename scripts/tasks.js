const inputTask = document.querySelector("#task");
const sendTask = document.querySelector("#send-task");
const listTask = document.querySelector(".tasks-items-wrapper");


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
