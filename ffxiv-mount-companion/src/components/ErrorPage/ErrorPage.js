import ErrorPageImage from '../ErrorPageImage/ErrorPageImage';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <main className="error-page">
      <ErrorPageImage />
      <h1 className='error-page-text'>Oops! Something went wrong, please go back.</h1>
      <Link to="/main">
        <button>Back to All Mounts</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
