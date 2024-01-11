import './MountCard.scss';
import PropTypes from 'prop-types';
import CollectedMountIcon from '../CollectedMountsIcon/CollectedMountsIcon';

const MountCard = ({
  id,
  name,
  image,
  description,
  collectedMounts,
  toggleCollectedMounts,
  openModal,
}) => {
  const isCollected = collectedMounts.some(mount => mount.id === id);

  const handleImageClick = () => {
    openModal(id);
  };

  const handleToggleCollected = () => {
    toggleCollectedMounts({ id, name, image, description });
  };

  return (
    <div className="mount-card">
      <h3 className="mount-name">{name}</h3>
      <img
        id={id}
        src={image}
        alt={name}
        className="mount-card-image"
        onClick={handleImageClick}
      />
      <p className="mount-description">{description}</p>
      <CollectedMountIcon
        className="collected-mounts-icon"
        toggleCollectedMounts={handleToggleCollected}
        isCollected={isCollected}
      />
    </div>
  );
};

MountCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};
export default MountCard;
