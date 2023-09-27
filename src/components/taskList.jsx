import { useMemo, useRef } from "react";
import styles from "../styles/taskList.module.css";
import { useTranslation } from "react-i18next";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  filterTask,
  saveEditedTask,
  setInputTaskEdit,
  inputTaskEdit,
  editingTask,
}) => {
  const { t } = useTranslation();
  const filterTaskToLowerCase = filterTask.toLowerCase();
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(filterTaskToLowerCase)
    );
  }, [tasks, filterTaskToLowerCase]);

  return (
    <>
      <ul className={styles.tasksItemsWrapper}>
        {filteredTasks.length === 0 ? (
          <li className={styles.taskNoFound}>
            <p>
              {tasks.length === 0
                ? t("taskList.infoFirstTask")
                : t("taskList.infoTaskNotFound")}
            </p>
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id} className={styles.tasksItem}>
              {editingTask && editingTask.id === task.id ? (
                <>
                  <form
                    onSubmit={saveEditedTask}
                    className={styles.taskEditForm}
                  >
                    <input
                      type="text"
                      value={inputTaskEdit}
                      onChange={(e) => setInputTaskEdit(e.target.value)}
                    />
                    <button id="send-task" type="submit">
                      {t("taskList.saveButton")}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  {task.title}
                  <div className={styles.buttonsWrapper}>
                    <button onClick={() => editTask(task.id)}>
                      {t("taskList.editButton")}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                      {t("taskList.deleteButton")}
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;
