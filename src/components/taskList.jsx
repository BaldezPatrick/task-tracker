const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <>
      <ul className="tasks-items-wrapper">
        {tasks.map((task) => (
          <li key={task.id} className="tasks-item">
            {task.title}
            <div className="buttons-wrapper">
              <button onClick={() => editTask(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
