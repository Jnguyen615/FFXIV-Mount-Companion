import './Header.scss';
import './Header.scss';
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header className='header'>
    <h1 className='app-title'>FFXIV Mount Companion</h1>
    <Logo /> 
    </header>
  )
}

export default Header