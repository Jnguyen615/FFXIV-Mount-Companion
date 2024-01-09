import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/collectedmounts">
        <button>My Mounts</button>
      </Link>
    </div>
  );
};

export default NavBar;

//will import in the allMountsDisplay component
