const TaskSearch = ({ inputFilterTask, setInputFilterTask }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={inputFilterTask}
        onChange={(e) => setInputFilterTask(e.target.value)}
      />
      <button onClick={(e) => setInputFilterTask("")}>Clean search</button>
    </>
  );
};

export default TaskSearch;
