import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";
import gitHub from '../../img/icons/git-btn.svg';
import vercel from '../../img/icons/vercel.svg';
import './style.css';

const Project = () => {

  const {id} = useParams();
  const project = projects [id];

  return (
    <main className="selection">
      <div className="container">
        <div className="project-details">
          <h1 className="titel-1">{project.titel}</h1>
          <img src={project.imgBig} alt="" className="project-details_cover" />
          <div className="project-details_desc">
            <p>{project.skills}</p>
          </div>
          <div className="btnsLink">
            {project.gitHubLink && <BtnGitHub name='GitHub repo' link={project.gitHubLink} icon={gitHub} />}
            {project.gitHubLink && <BtnGitHub name='Vercel deploy' link={project.vercelLink} icon={vercel} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;