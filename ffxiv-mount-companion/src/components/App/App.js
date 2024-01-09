import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

function App() {
  return (
    <main className="app">
      <Header />
      <FFXIVLogo />
      {/* <Routes>
        <Route exact path="/" element={<MainDisplay />} />
        <Route exact path="/mount/:id" element={<MountCardPage />} />
        <Route
          exact
          path="/collectedmounts"
          element={<collectedMountsPage />}
        />
        <Route path="*" element={<ErrorPage/>} />
      </Routes> */}
    </main>
  );
}

export default App;