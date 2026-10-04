import { useEffect, useState } from 'react';
import ArtisanCard from '../../components/ArtisanCard/ArtisanCard';
import { getTopArtisans } from '../../services/api';

import './Home.scss';

function App() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    getTopArtisans().then(data => {
      setTopArtisans(data.artisans);
    });
  }, []);

  return (
    <div className='home'>
      <section className="explanation ">
        <h2>Comment trouver mon artisan</h2>
        <p>Pour pouvoir trouver votre artisan sélectionnez d'abord la catégorie à laquelle appartient sa spécialité puis choisissez 
          votre artisan. En le sélectionnant, vous aurez le pouvoir de voir sa carte artisan, de lui envoyer un message a travers un 
          formulaire. Ne pas oublier de lui communiquer un moyen de contact comme votre email ou votre numéro de téléphone. 
          Une réponse vous sera alors apportée au bout de 48 heures.</p>

      </section>

      <section className="cards">
        <h2>Les artisans du mois</h2>
        <div className="artisan-cards">
            {topArtisans.map(artisan => (
              <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
            ))}
        </div>
      </section>

    </div>
  )
}

export default App
