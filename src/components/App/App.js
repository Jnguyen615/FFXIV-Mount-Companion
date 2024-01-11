import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainDisplay from '../MainDisplay/MainDisplay';
import ErrorPage from '../ErrorPage/ErrorPage';
import CollectedMountDisplay from '../CollectedMountsDisplay/CollectedMountsDisplay';
import LogoPage from '../LogoPage/LogoPage';
import IndividualMountCard from '../IndividualMountCard/IndividualMountCard';
import { retrieveMounts } from '../../ApiCall';

function App() {
  const [mounts, setMounts] = useState([]);
  const [collectedMounts, setCollectedMounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const [filteredMounts, setFilteredMounts] = useState([]); // New state for filtered mounts

  const navigate = useNavigate();

  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        setFilteredMounts(data)
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);
  // console.log('collectedMounts', collectedMounts)

  const toggleCollectedMounts = (mount) => {
    const isNowCollected = collectedMounts.some(favMount => favMount.id === mount.id
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
  
  const openIndividualMountCard = (id) => {
    setSelectedMountId(id);
  };

  const handleSearch = (term) => {
    // Filter mounts based on the search term
    const filtered = mounts.filter((mount) =>
      mount.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMounts(filtered);
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
              setSelectedMountId={setSelectedMountId}
              handleSearch={handleSearch}
            />
          }
        />
        <Route
          exact
          path="/mount/:id"
          element={
            <IndividualMountCard
              openIndividualMountCard={openIndividualMountCard}
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
              openIndividualMountCard={openIndividualMountCard}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
