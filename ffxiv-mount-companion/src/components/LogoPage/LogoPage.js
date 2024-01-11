import './LogoPage.scss';
import { Link } from 'react-router-dom';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import BlackChocobo from '../../Images /Chubby-chocobo.webp';

const LogoPage = () => {
  return (
    <div className="logo-page">
      <FFXIVLogo />
      <div className="logo-page-header">
        <img className="black-chocobo" src={BlackChocobo} />
        <h1 className="page-name">Save your collected mounts here!</h1>
        <Link to="/main">
          <button className="click-me">Click to Enter!</button>
        </Link>
      </div>
    </div>
  );
};

export default LogoPage;
