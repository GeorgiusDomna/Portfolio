import React from 'react';
import PreviewProject from '../../components/PreviewProject/PreviewProject';
import { projects } from '../../helpers/projectList';
import './style.css';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectsList = projects.map((project, index) => {
    return <PreviewProject
      key={index}
      index={index}
      titel={project.titel}
      img={project.imgPreview}
    />
  })
  
  return ( 
    <main className="selection">
      <div className="container">
        <h2 className="titel-1">{t('Projects')}</h2>
        <ul className="profects">
          {projectsList}
        </ul>
      </div>
    </main>
  );
}

export default Projects;