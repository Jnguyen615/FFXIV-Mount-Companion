import './MainDisplay.scss';
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import Search from '../Search/Search';
import ScrollFollowButton from '../ScrollFollowButton/ScrollFollowButton';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Moogle from '../../Images /moggle3.png'
const MainDisplay = ({
  mounts,
  collectedMounts,
  toggleCollectedMounts,
  setFilteredMounts,
  openIndividualMountPage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
    setFilteredMounts(term);
  };

  const filteredMounts = mounts.filter(mount =>
    mount.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
      <ScrollFollowButton />
      <Search
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {filteredMounts.length > 0 ? (
        <div className="mounts-container">{mountCards}</div>
      ) : (
        <div className="no-mounts-container">
        <h1 className="no-mounts-message">No mounts found! Search again!</h1>
        <img className='moogle' src={Moogle} alt='moogle image'/>
        </div>
      )}
  
    </main>
  );
};

MainDisplay.propTypes = {
  mounts: PropTypes.array.isRequired,
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
  setFilteredMounts: PropTypes.func.isRequired,
  openIndividualMountPage: PropTypes.func.isRequired,
};

export default MainDisplay;
