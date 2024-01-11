// // import './MainDisplay.scss'
// // import NavBar from '../NavBar/NavBar';
// // import MountCard from '../MountCard/MountCard';
// // import Header from '../Header/Header';
// // import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
// // import Search from '../Search/Search'
// // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // const MainDisplay = ({ mounts, collectedMounts, toggleCollectedMounts, setSelectedMountId }) => {

// //   const [searchTerm, setSearchTerm] = useState('');

// //   const handleSearch = (e) => {
// //     const term = e.target.value;
// //     setSearchTerm(term);
// //     onSearch(term);
// //   };

// //   const navigate = useNavigate()
  
// //   const openModal = (mountId) => {
// //     setSelectedMountId(mountId);
// //     navigate(`/mount/${mountId}`);
// //   };
  
// //   const mountCards = mounts.map(mount => (
// //     <div
// //       key={`${mount.id}-${mount.name}`}
// //     >
// //       <MountCard
// //         id={mount.id}
// //         mount={mount}
// //         name={mount.name}
// //         image={mount.image}
// //         description={mount.description}
// //         collectedMounts={collectedMounts}
// //         toggleCollectedMounts={id => toggleCollectedMounts(id)}
// //         openModal={openModal}
// //       />
// //     </div>
// //   ));

// //   return (
// //     <main className="main-display">
// //       <Header />
// //       <FFXIVLogo />
// //       <NavBar />
// //       <div className="mounts-container">{mountCards}</div>
// //     </main>
// //   );
// // };

// // export default MainDisplay;

// import './MainDisplay.scss';
// import NavBar from '../NavBar/NavBar';
// import MountCard from '../MountCard/MountCard';
// import Header from '../Header/Header';
// import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
// import Search from '../Search/Search';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MainDisplay = ({ mounts, collectedMounts, toggleCollectedMounts, setSelectedMountId , handleSearch}) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   // const handleSearch = (term) => {
//   //   setSearchTerm(term);
//   //   // You can implement the search logic here if needed
//   //   // For now, we'll just log the search term
//   //   console.log('Search Term:', term);
//   // };

//   const openModal = (mountId) => {
//     setSelectedMountId(mountId);
//     navigate(`/mount/${mountId}`);
//   };

//   const mountCards = mounts.map((mount) => (
//     <div key={`${mount.id}-${mount.name}`}>
//       <MountCard
//         id={mount.id}
//         mount={mount}
//         name={mount.name}
//         image={mount.image}
//         description={mount.description}
//         collectedMounts={collectedMounts}
//         toggleCollectedMounts={(id) => toggleCollectedMounts(id)}
//         openModal={openModal}
//       />
//     </div>
//   ));

//   return (
//     <main className="main-display">
//       <Header />
//       <FFXIVLogo />
//       <NavBar />
//       <Search onSearch={handleSearch} />
//       <div className="mounts-container">{mountCards}</div>
//     </main>
//   );
// };

// export default MainDisplay;

// MainDisplay.js
import './MainDisplay.scss';
import NavBar from '../NavBar/NavBar';
import MountCard from '../MountCard/MountCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import Search from '../Search/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainDisplay = ({ mounts, collectedMounts, toggleCollectedMounts, setSelectedMountId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const openModal = (mountId) => {
    setSelectedMountId(mountId);
    navigate(`/mount/${mountId}`);
  };

  const filteredMounts = mounts.filter((mount) =>
    mount.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const mountCards = filteredMounts.map((mount) => (
    <div key={`${mount.id}-${mount.name}`}>
      <MountCard
        id={mount.id}
        mount={mount}
        name={mount.name}
        image={mount.image}
        description={mount.description}
        collectedMounts={collectedMounts}
        toggleCollectedMounts={(id) => toggleCollectedMounts(id)}
        openModal={openModal}
      />
    </div>
  ));

  return (
    <main className="main-display">
      <Header />
      <FFXIVLogo />
      <NavBar />
      <Search onSearch={handleSearch} />
      <div className="mounts-container">{mountCards}</div>
    </main>
  );
};

export default MainDisplay;
