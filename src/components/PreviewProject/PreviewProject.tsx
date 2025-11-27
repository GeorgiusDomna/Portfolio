import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import './style.css';

interface IPreviewProjectProps {
  index: number;
  titel: string;
  img: StaticImageData;
}

const PreviewProject: React.FC<IPreviewProjectProps> = ({ index, titel, img }) => {
  
  return (
    <Link className='linkProject' href={`/projects/${index}`}>
      <li className="project">
        <Image 
          src={img} 
          alt="Project preview" 
          className="project_img" 
        />
        <h3 className="project_titel">{titel}</h3>
      </li>
    </Link>
  );
}
 
export default PreviewProject;