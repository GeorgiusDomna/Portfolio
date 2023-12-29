import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";
import gitHub from '../../img/icons/git-btn.svg';
import vercel from '../../img/icons/vercel.svg';
import './style.css';

const Project = () => {

  const {id} = useParams();
  const project = projects[id];

  return (
    <main className="selection">
      <div className="container">
        <div className="project-details">
          <h1 className="titel-1">{project.titel}</h1>
          <img src={project.imgBig} alt="" className="project-details_cover" />
          {project.stackFront && <div className="project-details_desc">
            <h3 className="project-details_desc-title">Frontend:</h3>
            <p>{project.stackFront}</p>
          </div>}
          {project.stackBack && <div className="project-details_desc">
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