import './MountCard.scss';
import CollectedMountsIcon from "../CollectedMountsIcon/CollectedMountsIcon";

const MountCard = ({ id, name, image, description}) => {
  return (
    <div className="mount-card">
    <h3 className="mount-name">{name}</h3>
    <img
      id={id}
      src={image}
      alt={name}
      className="mount-card-image" 
    />
    <p className="mount-description">{description}</p>
    <CollectedMountsIcon className='collected-mounts-icon'
   />
  </div>
);
}

export default MountCard