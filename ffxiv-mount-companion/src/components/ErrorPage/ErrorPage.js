import ErrorPageImage from '../ErrorPageImage/ErrorPageImage';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <main className="error-page">
      <ErrorPageImage /> 
      <h1>Oops! Something went wrong, please go back.</h1>
      <button>Back to All Mounts</button>
    </main>
  );
};

export default ErrorPage;
