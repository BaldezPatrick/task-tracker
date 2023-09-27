import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const handleLanguage = (e) => {
    const languageOption = e.target.value;
    console.log(languageOption);
    i18n.changeLanguage(languageOption);
  };

  return (
    <>
      <select onChange={handleLanguage} value={i18n.language}>
        <option value="en">{t("selectedLanguage.en")}</option>
        <option value="pt">{t("selectedLanguage.pt")}</option>
      </select>
    </>
  );
};

export default LanguageSelector;
