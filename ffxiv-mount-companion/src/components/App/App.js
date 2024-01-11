import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainDisplay from '../MainDisplay/MainDisplay';
import ErrorPage from '../ErrorPage/ErrorPage';
import CollectedMountDisplay from '../CollectedMountsDisplay/CollectedMountsDisplay';
import LogoPage from '../LogoPage/LogoPage';
import IndividualMountPage from '../IndividualMountPage/IndividualMountPage';
import { retrieveMounts } from '../../ApiCall';

function App() {
  const [mounts, setMounts] = useState([]);
  const [collectedMounts, setCollectedMounts] = useState([]);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const [filteredMounts, setFilteredMounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        setFilteredMounts(data);
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('collectedMounts', JSON.stringify(collectedMounts))
    
  }, [collectedMounts]);
  
  useEffect(() => {
    const storedCollectedMounts = localStorage.getItem('collectedMounts');
    if (storedCollectedMounts) {
      setCollectedMounts(JSON.parse(storedCollectedMounts));
    }
  }, []);


  const openIndividualMountPage = mountId => {
    setSelectedMountId(mountId);
    navigate(`/mount/${mountId}`);
  };

  const toggleCollectedMounts = mount => {
    const isNowCollected = collectedMounts.some(
      favMount => favMount.id === mount.id,
    );

    if (isNowCollected) {
      const updatedCollected = collectedMounts.filter(
        favMount => favMount.id !== mount.id,
      );
      setCollectedMounts(updatedCollected);
    } else {
      setCollectedMounts(prevCollected => [...prevCollected, mount]);
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
              collectedMounts={collectedMounts}
              toggleCollectedMounts={toggleCollectedMounts}
              setSelectedMountId={setSelectedMountId}
              setFilteredMounts={setFilteredMounts}
              openIndividualMountPage={openIndividualMountPage}
            />
          }
        />
        <Route
          exact
          path="/mount/:id"
          element={
            <IndividualMountPage
              mounts={mounts}
              toggleCollectedMounts={toggleCollectedMounts}
              collectedMounts={collectedMounts}
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
              openIndividualMountPage={openIndividualMountPage}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
