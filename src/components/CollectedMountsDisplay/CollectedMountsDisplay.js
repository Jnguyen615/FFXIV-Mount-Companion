import './CollectedMountsDisplay.scss';
import MountCard from '../MountCard/MountCard'
import FireBird from '../../Images /firebird-mount.webp'

// import NoCollectedMountsLogo from '../NoCollectedMountsLogo/NoCollectedMountsLogo'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

const CollectedMountsDisplay = ({ collectedMounts, togglecollectedMount }) => {
  const displayCollectedMounts = collectedMounts.map(mount => (
    <MountCard
      key={`${mount.id}-${mount.name}`}
      id={mount.id}
      name={mount.name}
      image={mount.image}
      description={mount.description}
      collectedMounts={collectedMounts}
      togglecollectedMount={togglecollectedMount}
    />
  ));

  return (
    <main className="collected-mounts-page">
      <Header />
      <FFXIVLogo />
      <h1 className="collected-mounts-title">My Mounts</h1>
      <Link to="/main">
        <button className="back-to-all-btn">Back To All Mounts</button>
      </Link>
      {!displayCollectedMounts.length && (
        <div>
          <img src={FireBird} className="fire-bird" alt="firebird"></img>
          <p className="no-favorites">
            You don't have any mounts yet, add some!
          </p>
        </div>
      )}
      <div className="collected-mounts-container">
        {displayCollectedMounts}
      </div>
    </main>
  );
};

export default CollectedMountsDisplay;
