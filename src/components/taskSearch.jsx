const TaskSearch = ({ inputFilterTask, setInputFilterTask, cleanUpSearch }) => {
  return (
    <>
      <form onSubmit={cleanUpSearch}>
        <input
          type="text"
          placeholder="Search"
          value={inputFilterTask}
          onChange={(e) => setInputFilterTask(e.target.value)}
        />
        <button type="submit">Clean search</button>
      </form>
    </>
  );
};

export default TaskSearch;
