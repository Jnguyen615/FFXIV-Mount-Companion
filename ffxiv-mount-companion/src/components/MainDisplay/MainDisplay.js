import './MainDisplay.scss';
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import Search from '../Search/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainDisplay = ({
  mounts,
  collectedMounts,
  toggleCollectedMounts,
  setFilteredMounts,
  openIndividualMountPage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = term => {
    setSearchTerm(term);
    setFilteredMounts(term);
  };

  const filteredMounts = mounts.filter(mount =>
    mount.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
  );

  const mountCards = filteredMounts.map(mount => (
    <div key={`${mount.id}-${mount.name}`}>
      <MountCard
        id={mount.id}
        mount={mount}
        name={mount.name}
        image={mount.image}
        description={mount.description}
        collectedMounts={collectedMounts}
        toggleCollectedMounts={id => toggleCollectedMounts(id)}
        openIndividualMountPage={openIndividualMountPage}
      />
    </div>
  ));

  return (
    <main className="main-display">
      <Header />
      <FFXIVLogo />
      <NavBar />
      <Search
        onSearch={handleSearch}
        mounts={mounts}
        setFilteredMounts={setFilteredMounts}
      />
      <div className="mounts-container">{mountCards}</div>
    </main>
  );
};

MainDisplay.propTypes = {
  mounts: PropTypes.array.isRequired,
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
  setSelectedMountId: PropTypes.func.isRequired,
  setFilteredMounts: PropTypes.func.isRequired,
  openIndividualMountPage: PropTypes.func.isRequired,
};

export default MainDisplay;
