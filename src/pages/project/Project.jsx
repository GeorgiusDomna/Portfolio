import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";
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
          {project.gitHubLink && <BtnGitHub link={project.gitHubLink}/>}
        </div>
      </div>
    </main>
  );
}

export default Project;