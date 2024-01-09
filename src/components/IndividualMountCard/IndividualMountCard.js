import NavBar from '../NavBar/NavBar';
import './IndividualMountCard.scss';
import NavBar from '../NavBar/NavBar';
import CollectedMountsIcon from '../CollectedMountsIcon/CollectedMountsIcon';

const IndividualMountCard = () => {
  return (
    <main className="individual-mount-card">
      <NavBar />
      <CollectedMountsIcon />
      <button className='close-btn'></button>
    </main>
  );
};

export default IndividualMountCard;
