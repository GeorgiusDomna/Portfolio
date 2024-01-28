import './style.css';

interface BtnGitHubProps {
  link: string;
  name: string;
  icon: string;
}
const BtnGitHub: React.FC<BtnGitHubProps> = ({link, name, icon}) => {
  return ( 
    <a href={link} target='_blank' rel='noneferrer' className="btn-outline">
      <img className='btn-outline_logo' src={icon} alt="logo" />
      {name}
    </a>  
  );
}

export default BtnGitHub;