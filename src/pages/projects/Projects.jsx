import Project from '../../components/project/Project';
import { projects } from '../../helpers/projectList';
import './style.css';

const Projects = () => {

  let projectsList = projects.map((project, index) => {
    return <Project
      key={index}
      index={index}
      titel={project.titel}
      img={project.imgPreview}
    />
  })
  
  return ( 
    <main className="selection">
      <div className="container">
        <h2 className="titel-1">Projects</h2>
        <ul className="profects">
          {projectsList}
        </ul>
      </div>
    </main>
  );
}

export default Projects;