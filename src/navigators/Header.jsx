import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/Header.scss";

function Header(props) {
  const { t } = useTranslation("translation");

  // Giá trị class của chữ
  const [logoTextClass, setLogoTextClass] = useState([
    "t-none",
    "n-none",
    "q-none",
    "a-none",
  ]);

  // Giá trị class chủ deco
  const [decoHeader, setDecoHeader] = useState("deco-container-none");

  // Giá trị class của border
  const [logoBoderClass, setLogoBorderClass] = useState("logo");

  const [naviClass, setNaviClass] = useState("navi-none");

  // Hiện liên animation của logo mỗi khi tải trang
  useEffect(() => {
    setTimeout(() => {
      setLogoTextClass(["t-appear", "n-none", "q-none", "a-none"]);
      setNaviClass("navi-container");
    }, 700);
    setTimeout(() => {
      setLogoTextClass(["t-appear", "n-appear", "q-none", "a-none"]);
    }, 1400);
    setTimeout(() => {
      setLogoTextClass(["t-appear", "n-appear", "q-appear", "a-none"]);
    }, 2100);
    setTimeout(() => {
      setLogoTextClass(["t-appear", "n-appear", "q-appear", "a-appear"]);
      setDecoHeader("deco-container");
    }, 2800);
    setTimeout(() => {
      setLogoBorderClass("logo-mid-yellow");
    }, 3500);
    setTimeout(() => {
      setLogoBorderClass("logo-all-white");
    }, 4200);
  }, []);

  return (
    <div className="header-container">
      {/* Logo */}
      <div className={logoBoderClass}>
        <div className={logoTextClass[0]}>T</div>
        <div className={logoTextClass[1]}>N</div>
        <div className={logoTextClass[2]}>Q</div>
        <div className={logoTextClass[3]}>A</div>
      </div>
      {/* Phần ảnh */}
      <div className={decoHeader}>
        <img width={"99%"} height={"155px"} src="/images/heart.gif" alt="" />
      </div>
      {/* Phần điều hướng */}
      <div className={naviClass}>
        {/* Trang chủ */}
        <NavLink to={"/"} className="home-page">
          <div className="home-page-circle">
            <img src="/images/circle1.gif" alt="" />
          </div>
          <div className="home-page-text">
            <div>{t("navigators.home")}</div>
            <div>{t("navigators.page")}</div>
          </div>
        </NavLink>
        {/* Dự án */}
        <NavLink to={"/projects"} className="projects">
          <div className="projects-line">
            <img src="/images/line.gif" alt="" />
          </div>
          <div className="projects-text">
            <div>{t("navigators.my")}</div>
            <div>{t("navigators.project")}</div>
          </div>
        </NavLink>
        {/* Liên hệ */}
        <NavLink to={"/contact"} className="contact">
          <div className="contact-circle">
            <img src="/images/circle2.gif" alt="" />
          </div>
          <div className="contact-text">
            <div>{t("navigators.contact")}</div>
            <div>{t("navigators.me")}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
