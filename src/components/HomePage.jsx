import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/HomePage.scss";
import icons from "../assets/icons.json";
import { NavLink } from "react-router-dom";

function HomePage(props) {
  // About me
  const [homeSecretCode, setHomeSecretCode] = useState("home-secret-code-none");
  const [myName, setmyName] = useState("my-name-none");
  const [myJob, setMyJob] = useState("my-job-none");
  const [myJobDetail, setMyJobDetail] = useState("my-job-detail-none");
  const [avatar, setAvatar] = useState("avatar-none");
  const [button, setButton] = useState("button-none");

  // Skills
  const [skillTitle, setSkillTitle] = useState("home-skill-title-none");
  const [skillLine, setSkillLine] = useState("skill-line-none");
  const [mySkillContainer, setMySkillContainer] = useState(
    "my-skill-container-none"
  );
  // icons
  const skills = icons.skills;
  const otherSkills = icons.otherSkills;

  // My Picture
  const [myPicture, setMyPicture] = useState("my-picture-none");
  const [textP, setTextP] = useState("text-p-none");
  const [arrow, setArrow] = useState("arrow-none");

  // Đa ngôn ngữ
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setHomeSecretCode("home-secret-code-container");
    }, 700);
    setTimeout(() => {
      setmyName("my-name");
      setAvatar("avatar");
    }, 1400);
    setTimeout(() => {
      setMyJob("my-job");
    }, 2100);
    setTimeout(() => {
      setMyJobDetail("my-job-detail");
    }, 2800);
    setTimeout(() => {
      setButton("button");
    }, 3600);

    // Xử lý hiệu ứng kéo chuột
    const handleScroll = () => {
      // Skill title
      if (window.scrollY > 250) {
        setSkillTitle("home-skill-title");
      } else {
        setSkillTitle("home-skill-title-none");
      }

      // Skill line
      if (window.scrollY > 550) {
        setSkillLine("skill-line");
        setMySkillContainer("my-skill-container");
      } else {
        setSkillLine("skill-line-none");
        setMySkillContainer("my-skill-container-none");
      }

      // My picture
      if (window.scrollY > 1350) {
        setMyPicture("my-picture");
        setTextP("text-p");
        setArrow("arrow");
      } else {
        setMyPicture("my-picture-none");
        setTextP("text-p-none");
        setArrow("arrow-none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click để chuyển đến vị trí của skill-title
  const skillRef = useRef(null);
  const handleToSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Click để chuyển đến vị trí của skill-title
  const codingSkillRef = useRef(null);
  const handleToCodingSkill = () => {
    codingSkillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home-container">
        {/* Giới thiệu bản thân */}
        <div className="home-about-container">
          {/* Secret code */}
          <div className={homeSecretCode}>
            <h3>{"<tn_❀>"}</h3>
            <h3>{t("homePage.secretCode.code")}</h3>
            <h3>{"</qa_✿>"}</h3>
            <div className="code-question">
              <img src="images/star.gif" alt="" />
              <h4>{t("homePage.secretCode.whatIsThisCode")}</h4>
            </div>
          </div>
          {/* About me */}
          <div className="about-me-container">
            <div className="greeting">
              <div className={myName}>
                <span>{t("homePage.aboutMe.greeting.hello")}</span>
                <span>{t("homePage.aboutMe.greeting.myName")}</span>
              </div>
              <div className={myJob}>
                {t("homePage.aboutMe.greeting.myJob")}
              </div>
              <div className={myJobDetail}>
                {t("homePage.aboutMe.greeting.myJobDetail")}
              </div>
              <div onClick={handleToSkill} className={button}>
                <span>{t("homePage.aboutMe.greeting.nextStop")}</span>
              </div>
            </div>

            <div className={avatar} title={t("homePage.aboutMe.avatar")}>
              <img src="images/avatar.png" alt="" />
            </div>
          </div>
        </div>
        {/* Kỹ năng */}
        <div className="home-skill-container">
          <div
            onClick={handleToCodingSkill}
            ref={skillRef}
            className={skillTitle}
            title={t("clickMe")}
          >
            <span>// </span>
            <span> _</span>
            <span>{t("homePage.skills.title")}</span>
            <span>_ </span>
            <span> \\</span>
          </div>
          {/* Coding Skill */}
          <div ref={codingSkillRef} className={skillLine}>
            <i class="fas fa-code"></i> {t("homePage.skills.codingSkills")}
          </div>
          <div className={mySkillContainer}>
            {skills.map((skill) => {
              return (
                <>
                  <div className="my-skill">
                    <i className="fas fa-paperclip"></i>
                    <i className={skill.i}></i>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                </>
              );
            })}
          </div>
          {/* Other Skills */}
          <div className={skillLine}>
            <i class="fas fa-laptop"></i> {t("homePage.skills.otherSkills")}
          </div>
          <div className={mySkillContainer}>
            {otherSkills.map((skill) => {
              return (
                <>
                  <div className="my-skill">
                    <i className="fas fa-paperclip"></i>
                    <i className={skill.i}></i>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Dự án */}
        <div className="my-picture-container">
          <div className={myPicture}>
            <div className="mono">
              <img src="/images/mono.png" alt="" />
            </div>
            <div className="color">
              <img src="/images/color.jpg" alt="" />
            </div>
          </div>
          <div className="text">
            <div className={textP}>{t("homePage.myPicture")}</div>
            <div className={arrow}>
              <img src="/images/down-arrow.gif" alt="" />
            </div>
          </div>
        </div>
        <NavLink to={"/projects"} className="to-project">
          <span>{t("homePage.toProjects")}</span>
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
