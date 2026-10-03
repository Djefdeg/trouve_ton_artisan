import './Error404.scss';
import Img404 from './../../assets/Error404.jpg';

function App() {
  return (
    <div className='error404'>
      <section className='errorSection p-4'>
        <div className='image'>
          <img className="error-image" src={Img404} alt="Image de route barrée" />
        </div>
        <div className='error-explanation'>
          <h1>404</h1>
          <h2>Page introuvable</h2>
          <p>La page que vous recherchez n'existe pas ou a été deplacée</p>
          <button className="btn btn-outline-primary"> Retour à l'accueil </button>
        </div>
      </section>
    
    </div>

    
)
}

export default App