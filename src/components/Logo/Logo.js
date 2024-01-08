import './Logo.scss';
import Chocobo from '../../Images /Chocobo.png';

const Logo = () => {
  return (
    <div className="icon">
      <img src={Chocobo} className="chocobo-icon" alt="chocobo-image" />
    </div>
  );
};

export default Logo 
