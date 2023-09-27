import { useTranslation } from "react-i18next";

const TaskSearch = ({ inputFilterTask, setInputFilterTask, cleanUpSearch }) => {
  const { t } = useTranslation();

  const handleButtonInfo = () => {
    if (!inputFilterTask) {
      return t("taskForm.buttonSearchText");
    } else {
      return "X";
    }
  };

  const buttonInfo = handleButtonInfo();

  return (
    <>
      <form onSubmit={cleanUpSearch}>
        <input
          type="text"
          placeholder={t("taskForm.placeholderSearch")}
          value={inputFilterTask}
          onChange={(e) => setInputFilterTask(e.target.value)}
        />
        <button type="submit">{buttonInfo}</button>
      </form>
    </>
  );
};

export default TaskSearch;
