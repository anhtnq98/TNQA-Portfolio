import { useTranslation } from "react-i18next";
import React from "react";
import i18n from "i18next";
import "../style/ChooseLanguage.scss";

function ChooseLanguage(props) {
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <div className="language-container">
      <select onChange={changeLanguage}>
        <option value="eng">{t("chooseLanguage.english")}</option>
        <option value="vie">{t("chooseLanguage.vietnamese")}</option>
        <option value="ja">{t("chooseLanguage.japanese")}</option>
      </select>
    </div>
  );
}

export default ChooseLanguage;
