const TaskList = ({ tasks, deleteTask, editTask, filterTask }) => {
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterTask.toLowerCase())
  );
  return (
    <>
      <ul className="tasks-items-wrapper">
        {filteredTasks.length === 0 ? (
          <li className="task-noFound">
            <p>No task was found...</p>
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id} className="tasks-item">
              {task.title}
              <div className="buttons-wrapper">
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
