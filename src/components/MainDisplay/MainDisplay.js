import './MainDisplay.scss'
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainDisplay = ({ mounts, collectedMounts, toggleCollectedMounts, setSelectedMountId }) => {

  const navigate = useNavigate()
  
  const openModal = (mountId) => {
    setSelectedMountId(mountId);
    navigate(`/mount/${mountId}`);
  };
  
  const mountCards = mounts.map(mount => (
    <div
      key={`${mount.id}-${mount.name}`}
    >
      <MountCard
        id={mount.id}
        mount={mount}
        name={mount.name}
        image={mount.image}
        description={mount.description}
        collectedMounts={collectedMounts}
        toggleCollectedMounts={id => toggleCollectedMounts(id)}
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
