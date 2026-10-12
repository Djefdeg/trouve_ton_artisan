import './Error404.scss';
import { Helmet } from 'react-helmet-async';
import Img404 from './../../assets/Error404.jpg';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page introuvable (404) – Trouve ton artisan</title>
        <meta
          name="description"
          content="La page recherchée est introuvable. Retournez à l'accueil de Trouve ton artisan pour découvrir les professionnels référencés."
        />
      </Helmet>
      <div className='error404'>
        <section className='errorSection p-4'>
          <div className='image'>
            <img className="error-image" src={Img404} alt="Image de route barrée" />
          </div>
          <div className='error-explanation'>
            <h1>404</h1>
            <h2>Page introuvable</h2>
            <p>La page que vous recherchez n'existe pas ou a été deplacée</p>
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
              Retour à l'accueil
            </button>
          </div>
        </section>
      
      </div>
   </> 
)
}

export default App