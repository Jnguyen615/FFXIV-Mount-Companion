import './CollectedMountsDisplay.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import PropTypes from 'prop-types';
import MountCard from '../MountCard/MountCard';
import Firebird from '../Firebird/Firebird'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

const CollectedMountsDisplay = ({
  collectedMounts,
  toggleCollectedMounts,
  openIndividualMountPage,
}) => {
  const { id } = useParams();
  const selectedMountId = parseInt(id);

  const selectedMount = collectedMounts.find(
    mount => mount.id === selectedMountId,
  );

  // useEffect(() => {
  //   localStorage.setItem('collectedMounts', JSON.stringify(collectedMounts))
    
  // }, [collectedMounts]);

  const displayCollectedMounts = collectedMounts.map(mount => (
    <MountCard
      key={`${mount.id}-${mount.name}`}
      id={mount.id}
      name={mount.name}
      image={mount.image}
      description={mount.description}
      collectedMounts={collectedMounts}
      toggleCollectedMounts={toggleCollectedMounts}
      openIndividualMountPage={openIndividualMountPage}
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
          <Firebird />
          <p className="no-favorites">
            You don't have any mounts yet, add some!
          </p>
        </div>
      )}
      <div className="collected-mounts-container">{displayCollectedMounts}</div>
    </main>
  );
};

CollectedMountsDisplay.propTypes = {
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
  openIndividualMountPage: PropTypes.func.isRequired
};

export default CollectedMountsDisplay;
