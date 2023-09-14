const TaskSearch = ({
  inputFilterTask,
  setInputFilterTask,
  cleanUpSearch,
  handleBlur,
}) => {
  return (
    <>
      <form onSubmit={cleanUpSearch}>
        <input
          type="text"
          placeholder="Search task..."
          value={inputFilterTask}
          onChange={(e) => setInputFilterTask(e.target.value)}
          onBlur={handleBlur}
        />
        <button type="submit">Clean search</button>
      </form>
    </>
  );
};

export default TaskSearch;
