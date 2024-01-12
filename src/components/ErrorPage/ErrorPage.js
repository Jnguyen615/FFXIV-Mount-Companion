import ErrorPageImage from '../ErrorPageImage/ErrorPageImage';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1 className='error-page-text'>Oops! Something went wrong, please go back.</h1>
      <ErrorPageImage />
      <Link to="/main">
        <button className='back-from-error-page'>Back to All Mounts</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
