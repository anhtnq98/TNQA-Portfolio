import React from "react";
import { useTranslation } from "react-i18next";
import "../style/BackToTop.scss";

function BackToTop(props) {
  const { t } = useTranslation();
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top" onClick={handleBackToTop}>
      <div>↑</div>
      <div className="back-to-top-text">
        <span>{t("backToTop.back")}</span>
        <span>{t("backToTop.to")}</span>
        <span>{t("backToTop.top")}</span>
      </div>
    </div>
  );
}

export default BackToTop;
