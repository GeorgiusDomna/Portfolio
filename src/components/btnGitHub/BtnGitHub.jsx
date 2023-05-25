import './style.css';

const BtnGitHub = ({link, name, icon}) => {
  return ( 
    <a href={link} target='_blank' rel='noneferrer' className="btn-outline">
      <img className='btn-outline_logo' src={icon} alt="logo" />
      {name}
    </a>  
  );
}

export default BtnGitHub;