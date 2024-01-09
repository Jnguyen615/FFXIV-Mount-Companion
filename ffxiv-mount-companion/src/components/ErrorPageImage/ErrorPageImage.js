import './ErrorPage.scss';
import Hydra from '../../Images/hydra.png'

const ErrorPageLogo = () => {
  return (
    <div className="error-logo-container">
      <img className="hydra-logo" src={Hydra} alt="hydra" />
    </div>
  )
}

export default ErrorPageLogo