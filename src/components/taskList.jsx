const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      <ul className="tasks-items-wrapper">
        {tasks.map((task) => (
          <li key={task.id} className="tasks-item">
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
