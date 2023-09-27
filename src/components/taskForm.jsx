import { useTranslation } from "react-i18next";

const TaskForm = ({ addTask, setNewTask, newTask }) => {
  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder={t("taskForm.placeholderSend")}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="send-task" type="submit">
          {t("taskForm.buttonSendText")}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
