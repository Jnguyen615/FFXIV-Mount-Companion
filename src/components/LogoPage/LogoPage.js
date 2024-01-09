import "./LogoPage.scss"
import { useNavigate } from 'react-router-dom'
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo'
import BlackChocobo from '../../Images /Chubby-chocobo.webp'
const LogoPage = () => {
  const navigate = useNavigate()

  const clickToEnter = () => {
    navigate('/main')
  }
  return (
    <div className="logo-page">
      <header className="logo-page-header">
        <FFXIVLogo /> 
        <h1 className="page-name">Mount Companion Site</h1>
        <img className='black-chocobo' src={BlackChocobo}/>
        <button onClick={clickToEnter} className="click-me">
          Click to Enter!
        </button>
      </header>
    </div>
  );
}

export default LogoPage