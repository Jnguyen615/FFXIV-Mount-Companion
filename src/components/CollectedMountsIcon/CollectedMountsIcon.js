import PropTypes from 'prop-types';


const CollectedMountIcon = ({ toggleCollectedMounts, isCollected }) => {
  
 
  const handleClick = (id) => {
    toggleCollectedMounts();
  };

  return (
    <div className='collected-mount-icon' onClick={handleClick}>
      {isCollected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path
            fill="#FFD700" 
            d="M12 17.27l5.74 3.5-1.46-6.4L22 9.24l-6.38-.58L12 2 9.38 8.67 3 9.24l4.72 4.13L6.26 20.77z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            d="M12 17.27l5.74 3.5-1.46-6.4L22 9.24l-6.38-.58L12 2 9.38 8.67 3 9.24l4.72 4.13L6.26 20.77z"
          />
        </svg>
      )}
    </div>
  );
};

CollectedMountIcon.propTypes = {
  toggleCollectedMounts: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
};

export default CollectedMountIcon;
