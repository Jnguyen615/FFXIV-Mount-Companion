import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard'

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
    <main className="nav-bar">
      <NavBar />
      {mountCards}
      {/* <MountCardPage />  */}
    </main>
  );
};

export default MainDisplay
