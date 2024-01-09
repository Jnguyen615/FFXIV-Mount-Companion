import './MountCard.scss';
import CollectedMountsIcon from "../CollectedMountsIcon/CollectedMountsIcon";

const MountCard = ({ id, name, image, description, collectedMounts, toggleCollectedMounts, openModal}) => {
  const isNowCollected = collectedMounts.some(collectMount => collectMount.id === id);

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
    <CollectedMountsIcon className='collected-mounts-icon'
    id={id}
    toggleCollectedMoutns={handleToggleCollected}
   />
  </div>
);
}

export default MountCard