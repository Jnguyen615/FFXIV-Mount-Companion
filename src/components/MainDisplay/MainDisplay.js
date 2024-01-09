import './MainDisplay.scss'
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

const MainDisplay = ({ mounts }) => {
  const mountCards = mounts.map(mount => (
    <div
      key={`${mount.id}-${mount.name}`}
      // onClick={() => handleCardClick(mount.id)}
    >
      <MountCard
        id={mount.id}
        name={mount.name}
        image={mount.image}
        description={mount.description}
      />
    </div>
  ));

  return (
    <main className="main-display">
      <Header />
      <FFXIVLogo />
      <NavBar />
      <div className="mounts-container">{mountCards}</div>
    </main>
  );
};

export default MainDisplay;
