import './FFXIVLogo.scss';
import logo from '../../Images /FFXIVOnline.png'

const FFXIVLogo = () => {
  return (
    <div className="ff-logo-container">
      <img className="ffxiv-logo" src={logo} alt="final fantasy logo" />
    </div>
  )
}

export default FFXIVLogo