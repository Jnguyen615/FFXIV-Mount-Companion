import './CollectedMountsDisplay.scss';
import MountCard from '../MountCard/MountCard'
import FireBird from '../../Images /firebird-mount.webp'

// import NoCollectedMountsLogo from '../NoCollectedMountsLogo/NoCollectedMountsLogo'
import { Link } from 'react-router-dom';

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
      <Link to="/main">
        <button className="back-to-all-btn">Back To Mounts</button>
      </Link>
      <h1 className="collected-mounts-title">My Mounts</h1>
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
        {/* <NoCollectedMountsLogo */}
      </div>
    </main>
  );
};

export default CollectedMountsDisplay;
