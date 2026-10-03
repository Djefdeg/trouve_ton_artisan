import ArtisanCard from '../../components/ArtisanCard/ArtisanCard'
import { getArtisans } from '../../services/api';
import { useEffect, useState } from 'react';
import './listArtisan.scss';

function App() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
  getArtisans().then(data => {
    setArtisans(data.artisans);
    console.log(data.artisans);
  });
  }, []);

  return (
    <div className='list_artisan'>

      <div >
        <h1 className='title'>Les artisans</h1>
      </div>

      <div className='search'>
        <div className='searchAndFilter'>
          <div>
            <select id="speciality">
              <option value="specialities">Toutes les spécialités</option>
              <option value="boulanger">Boulanger</option>
              <option value="coiffeur">Coiffeur</option>
              <option value="traiteur">Traiteur</option>
            </select>
          </div>
          <div>
            <select id="city">
              <option value="Cities">Toutes les villes</option>
              <option value="lyon">Lyon</option>
              <option value="evian">Evian</option>
              <option value="vienne">Vienne</option>
            </select>

          </div>
        </div>
        <div className='resultCount'>
          {/* <p>04 artisans trouvés</p> */}
          <p>{artisans.length} artisans trouvés</p>
        </div>
      </div>

      <div className='artisanResults'>
        <ArtisanCard artisan={{ name: 'Traiteur Truchon' }} />
        {/* <ArtisanCard />
        <ArtisanCard />
        <ArtisanCard /> */}
      </div>
    </div>
    )
}

export default App