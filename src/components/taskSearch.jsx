const TaskSearch = ({ inputFilterTask, setInputFilterTask }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={inputFilterTask}
          onChange={(e) => setInputFilterTask(e.target.value)}
        />
        <button onClick={(e) => setInputFilterTask("")}>Clean search</button>
      </form>
    </>
  );
};

export default TaskSearch;
