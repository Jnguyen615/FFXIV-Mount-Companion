import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MainDisplay from '../MainDisplay/MainDisplay';
import ErrorPage from '../ErrorPage/ErrorPage';
import CollectedMountDisplay from '../CollectedMountsDisplay/CollectedMountsDisplay';
import LogoPage from '../LogoPage/LogoPage';
import IndividualMountCard from '../IndividualMountCard/IndividualMountCard'
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

import { retrieveMounts } from '../../ApiCall';

function App() {
  const [mounts, setMounts] = useState([]);
  const [collectedMounts, setCollectedMounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        console.log('MOUNTS:', data);
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);
  const openIndividualMountCard = id => {
    setSelectedMountId(id);
    console.log("id:", id)
    setIsModalOpen(true);
  };

  const closeIndividualMountCard = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const toggleCollectedMounts = mount => {
    const isCollected = collectedMounts.some(
      favMount => favMount.id === mount.id,
    );

    if (isCollected) {
      const updatedCollected = collectedMounts.filter(
        favMount => favMount.id !== mount.id,
      );
      setCollectedMounts(updatedCollected);
    } else {
      setCollectedMounts(prevCollected => [...prevCollected, mount]);
      console.log('Added to Favorites:', mount);
    }
  };

  return (
    <main className="app">
      <Routes>
        <Route exact path="/" element={<LogoPage />} />
        <Route
          exact
          path="/main"
          element={
            <MainDisplay
              mounts={mounts}
              openIndividualMountCard={openIndividualMountCard}
              collectedMounts={collectedMounts}
              toggleCollectedMounts={toggleCollectedMounts}
              isModalOpen={isModalOpen}
            />
          }
        />
        <Route
          exact
          path="/mount/:id"
          element={
            <IndividualMountCard
            openIndividualMountCard={openIndividualMountCard}
            closeIndividualMountCard={closeIndividualMountCard}
              selectedMountId={selectedMountId}
              mounts={mounts}
              toggleCollectedMounts={toggleCollectedMounts}
              collectedMounts={collectedMounts}
              setCollectedMounts={setCollectedMounts}
            />
          }
        />
        <Route
          exact
          path="/collectedmounts"
          element={
            <CollectedMountDisplay
              collectedMounts={collectedMounts}
              toggleCollectedMounts={toggleCollectedMounts}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
