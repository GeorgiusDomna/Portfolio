import { NavLink } from 'react-router-dom';
import './style.css';

interface IPreviewProjectProps {
  index: number;
  titel: string;
  img: string;
}

const PreviewProject: React.FC<IPreviewProjectProps> = ({index, titel, img}) => {
  
  return (
    <NavLink className='linkProject' to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt="Project preview" className="project_img" />
        <h3 className="project_titel">{titel}</h3>
      </li>
    </NavLink>
  );
}
 
export default PreviewProject;