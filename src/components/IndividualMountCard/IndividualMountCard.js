import NavBar from '../NavBar/NavBar';
import './IndividualMountCard.scss';
import CollectedMountsIcon from '../CollectedMountsIcon/CollectedMountsIcon';
import Header from '../Header/Header';

import { useParams, Link } from 'react-router-dom';

const IndividualMountCard = ({
  mounts,
  collectedMounts,
  toggleCollectedMounts,
}) => {
  const { id } = useParams();
  const mountId = parseInt(id);

  const mount = mounts.find(mount => mount.id === mountId);
  const isCollected = collectedMounts.some(favMount => favMount.id === mountId);

  const handleToggleFavorite = () => {
    toggleCollectedMounts(mount);
  };

  return (
    <div className="mount-page">
      <Header />
      <NavBar />
      <div className="wrapper">
        <CollectedMountsIcon
          id={id}
          isCollected={isCollected}
          toggleFavoriteMount={handleToggleFavorite}
          mount={mount}
          collectedMounts={collectedMounts || []}
          className="favorite-icon"
          toggleCollectedMounts={toggleCollectedMounts}
        />

        <Link to="/main">
          <button className="close-btn">x</button>
        </Link>
      </div>
      {mount && (
        <div className="mount-container">
          <h3 className="mount-name">{mount.name}</h3>
          <img src={mount.image} alt={mount.name} className="modal-image" />
          <p className="enhanced-description">{mount.enhanced_description}</p>
          <div className="mount-info">
            <p classname="movement-type">Movement-Type: {mount.movement}</p>
            <p className="order">Order: {mount.order}</p>
            <p className="patch">Patch: {mount.patch}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualMountCard;
