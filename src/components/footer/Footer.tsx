import vk from '../../assets/icons/VK.svg';
import inst from '../../assets/icons/inst.svg';
import git from '../../assets/icons/Git.svg';
import './style.css';

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="footer_wrapper">    
        <ul className="social">
          <li className="solcial_item">
            <a className='linkBio' target='_blank' rel='noreferrer' href="https://vk.com/domaning"><img src={vk} alt="link" /></a>
          </li>
          <li className="solcial_item">
            <a className='linkBio' target='_blank' rel='noreferrer' href="https://www.instagram.com/viceversa_oqecald/"><img src={inst} alt="link" /></a>
          </li>
          <li className="solcial_item">
            <a className='linkBio' target='_blank' rel='noreferrer' href="https://github.com/GeorgiusDomna"><img src={git} alt="link" /></a>
          </li>
        </ul>
        <div className="copyright">
          <a className='linkBio' target='_blank' rel='noreferrer' href="https://github.com/GeorgiusDomna">created by GeorgiusDomna</a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;