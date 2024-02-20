import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BtnGitHub from "../../../components/btnGitHub/BtnGitHub";
import Slider from "../../../components/slider/Slider";

import { projects } from "../../../helpers/projectList";
import { IProject } from "../../../interfaces/IProject";

import gitHub from '../../../assets/icons/git-btn.svg';
import vercel from '../../../assets/icons/vercel.svg';
import './style.css';

const Project: React.FC = () => {
  const { t } = useTranslation();
  const {id} = useParams();
  const project: IProject = projects[Number(id)];

  return (
    <main className="selection">
      <div className="container">
        <div className="project-details">
          <h1 className="titel-1">{t(project.titel)}</h1>
          <Slider sliderList={project.imgBig} />
          {project.stackFront &&
            <div className="project-details_desc">
            <h3 className="project-details_desc-title">Frontend:</h3>
            <p>{project.stackFront}</p>
          </div>}
          {project.stackBack &&
            <div className="project-details_desc">
            <h3 className="project-details_desc-title">Backend:</h3>
            <p>{project.stackBack}</p>
          </div>}
          <div className="btnsLink">
            {project.gitHubLink && <BtnGitHub name='GitHub repo' link={project.gitHubLink} icon={gitHub} />}
            {project.vercelLink && <BtnGitHub name='Vercel deploy' link={project.vercelLink} icon={vercel} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;