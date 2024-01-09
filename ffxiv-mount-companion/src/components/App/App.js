import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MainDisplay from '../MainDisplay/MainDisplay';
import ErrorPage from '../ErrorPage/ErrorPage';
import CollectedMountDisplay from '../CollectedMountsDisplay/CollectedMountsDisplay';
import LogoPage from '../LogoPage/LogoPage';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

import { retrieveMounts } from '../../ApiCall';

function App() {
  const [mounts, setMounts] = useState([]);
  const [collectedMounts, setcollectedMounts] = useState([]);
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

  const togglecollectedMounts = mount => {
    const isFavorited = collectedMounts.some(
      favMount => favMount.id === mount.id,
    );

    if (isFavorited) {
      const updatedFavorites = collectedMounts.filter(
        favMount => favMount.id !== mount.id,
      );
      setcollectedMounts(updatedFavorites);
    } else {
      setcollectedMounts(prevFavorites => [...prevFavorites, mount]);
      console.log('Added to Favorites:', mount);
    }
  };

  return (
    <main className="app">
      <Routes>
        <Route exact path="/" element={<LogoPage />} />
        <Route exact path="/main" element={<MainDisplay mounts={mounts} />} />
        {/* <Route exact path="/mount/:id" element={<MountCardPage />} /> */}
        <Route
          exact
          path="/collectedmounts"
          element={
            <CollectedMountDisplay
              collectedMounts={collectedMounts}
              togglecollectedMounts={togglecollectedMounts}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
