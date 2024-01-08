import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import projects from "../assets/projects.json";
import "../style/Projects.scss";

function Projects(props) {
  // Đa ngôn ngữ
  const { t } = useTranslation();

  const projectBlock = projects.projectBlock;
  const projectDetail = projects.projectDetail;

  const handleToDetail = (id) => {
    const e = document.getElementById(`${id}`);
    if (e) {
      // 👇 Will scroll smoothly to the top of the next section
      e.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="projects-container">
      {/* Title */}
      <div id="#" className="title">
        <span>{t("navigators.my")}</span>
        <span>{t("navigators.project")}</span>
      </div>
      {/* Project Block */}
      <div className="project-block-container">
        {projectBlock.map((block) => {
          return (
            <>
              <div
                key={block.id}
                onClick={() => handleToDetail(block.id)}
                className="project-block"
              >
                <div className="time">
                  <i class="fas fa-calendar-alt"></i>
                  {t(block.time)}
                </div>
                <div className="project-image">
                  <img src={block.img} alt="" />
                </div>
                <div className="project-image-mono">
                  <img src={block.imgMono} alt="" />
                </div>
                <div className="file">
                  <img src="/images/file.png" alt="" />
                </div>
                <div className="file-mono">
                  <img src="/images/file-mono.png" alt="" />
                </div>
                <div className="name">
                  <i className="fas fa-terminal"></i>
                  {t(block.name)}
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* Scroll Image */}
      <div className="scroll" onClick={() => handleToDetail(1)}>
        <div>Click</div>
        <img src="/images/scroll.gif" alt="" />
        <div>Me</div>
      </div>
      {/* Project Detail */}
      <div className="project-detail-container">
        {/*  */}
        {projectDetail.map((detail) => {
          return (
            <>
              <div
                key={detail.id}
                id={`${detail.id}`}
                className="project-detail"
              >
                <div className="project-img">
                  <img src={detail.img} alt="" />
                </div>
                <div className="description">
                  <div className="description-title">{t(detail.name)}</div>
                  <div className="description-detail">
                    {t(detail.description)}
                  </div>
                  <div style={{ margin: "15px 0 5px 0" }}>***</div>
                  <div className="using">
                    {detail.use.map((icon) => {
                      return (
                        <>
                          <i class={icon}></i>
                        </>
                      );
                    })}
                  </div>
                  <div style={{ margin: "15px 0 5px 0" }}>***</div>
                  <div className="description-button-container">
                    <div className="description-button">
                      <span>{t("projects.detail.live")}</span>
                    </div>
                    <div className="description-button">
                      <span>{t("projects.detail.source")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
