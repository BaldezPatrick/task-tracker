const TaskForm = ({ addTask, newTask, setNewTask }) => {
  return (
    <>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="send-task" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default TaskForm;
