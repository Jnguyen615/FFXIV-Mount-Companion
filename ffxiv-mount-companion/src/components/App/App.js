import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from '../Header/Header';
import MainDisplay from "../MainDisplay/MainDisplay"
import ErrorPage from '../ErrorPage/ErrorPage'
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import { retrieveMounts } from '../../ApiCall'

function App() {
  const [mounts, setMounts] = useState([]);

  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        console.log("MOUNTS:", data);
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);

  return (
    <main className="app">
      <Header />
      <FFXIVLogo />
      <Routes>
        <Route exact path="/" element={<MainDisplay mounts={mounts}/>} />
        {/* <Route exact path="/mount/:id" element={<MountCardPage />} /> */}
        {/* <Route */}
          {/* exact */}
          {/* path="/collectedmounts" */}
          {/* element={<collectedMountsPage />} */}
        {/* /> */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </main>
  );
}

export default App;
