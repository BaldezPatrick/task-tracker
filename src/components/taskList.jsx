import { useMemo, useRef } from "react";
import styles from "../styles/taskList.module.css";

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
                ? "Tell us your first task"
                : "No task was found..."}
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
                      Save
                    </button>
                  </form>
                </>
              ) : (
                <>
                  {task.title}
                  <div className={styles.buttonsWrapper}>
                    <button onClick={() => editTask(task.id)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
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
