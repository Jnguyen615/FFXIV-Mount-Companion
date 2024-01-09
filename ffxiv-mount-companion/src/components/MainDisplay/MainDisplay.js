import './MainDisplay.scss'
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainDisplay = ({ mounts, collectedMounts, toggleCollectedMounts, setCollectedMounts }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const navigate = useNavigate()
  
  const openModal = mountId => {
    setSelectedMountId(mountId);
    setIsModalOpen(true);
    navigate(`/mount/${mountId}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };
 

  const handleCollectedToggle = (mount) => {
    toggleCollectedMounts(mount);
  };
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
        isCollectedPage={false}
        collectedMounts={collectedMounts}
        toggleCollectedMounts={id => toggleCollectedMounts(id)}
        mount={mount}
        onCollectedToggle={() => handleCollectedToggle(mount)}
        openModal={openModal}
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
