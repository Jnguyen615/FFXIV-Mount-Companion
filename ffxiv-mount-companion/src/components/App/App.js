import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <main className="app">
      <Header />
      <FFXIVLogo />
      <Routes>
        <Route exact path="/" element={<AllMountsDisplay />} />
        <Route exact path="/mount/:id" element={<MountCardPage />} />
        <Route
          exact
          path="/collectedmounts"
          element={<collectedMountsPage />}
        />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </main>
  );
}

export default App;
