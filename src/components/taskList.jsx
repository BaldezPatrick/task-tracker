import styles from "../styles/taskList.module.css";

const TaskList = ({ tasks, deleteTask, editTask, filterTask }) => {
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterTask.toLowerCase())
  );
  return (
    <>
      <ul className={styles.tasksItemsWrapper}>
        {filteredTasks.length === 0 ? (
          <li className={styles.taskNoFound}>
            <p>No task was found...</p>
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id} className={styles.tasksItem}>
              {task.title}
              <div className={styles.buttonsWrapper}>
                <button onClick={() => editTask(task.id)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;
