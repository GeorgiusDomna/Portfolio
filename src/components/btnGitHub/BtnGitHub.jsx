import iconGitHub from './git-btn.svg';
import './style.css';

const BtnGitHub = ({link}) => {
  return ( 
    <a href={link} target='_blank' rel='noneferrer' className="btn-outline">
      <img src={iconGitHub} alt="" />
      GitHub repo
    </a>  
  );
}

export default BtnGitHub;