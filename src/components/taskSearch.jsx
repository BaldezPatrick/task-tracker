const TaskSearch = ({ inputFilterTask, setInputFilterTask, cleanUpSearch }) => {
  const handleButtonInfo = () => {
    if (!inputFilterTask) {
      return "Search";
    } else {
      return "Reset";
    }
  };

  const buttonInfo = handleButtonInfo();

  return (
    <>
      <form onSubmit={cleanUpSearch}>
        <input
          type="text"
          placeholder="Search task..."
          value={inputFilterTask}
          onChange={(e) => setInputFilterTask(e.target.value)}
        />
        <button type="submit">{buttonInfo}</button>
      </form>
    </>
  );
};

export default TaskSearch;
