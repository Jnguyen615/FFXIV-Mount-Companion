import './LogoPage.scss';
import { Link } from 'react-router-dom';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import BlackChocobo from '../../Images /Chubby-chocobo.webp';
const LogoPage = () => {
  return (
    <div className="logo-page">
      <header className="logo-page-header">
        <FFXIVLogo />
        <h1 className="page-name">Mount Companion Site</h1>
        <img className="black-chocobo" src={BlackChocobo} />
        <Link to="/main">
          <button className="click-me">Click to Enter!</button>
        </Link>
      </header>
    </div>
  );
};

export default LogoPage;
