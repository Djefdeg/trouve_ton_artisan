import ArtisanCard from '../../components/ArtisanCard/ArtisanCard'
import { getArtisans, getSpecialities, getCities } from '../../services/api';
import { useEffect, useState } from 'react';
import './listArtisan.scss';

function App() {

  const [artisans, setArtisans] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getArtisans().then(data => {
      setArtisans(data.artisans);
    });

    getSpecialities().then(data => {
      setSpecialities(data.specialities);
    });

    getCities().then(data => {
      setCities(data.cities);
    });

  }, []);

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSpeciality = selectedSpeciality
      ? artisan.id_speciality === Number(selectedSpeciality)
      : true;

    const matchesCity = selectedCity
      ? artisan.id_city === Number(selectedCity)
      : true;

    return matchesSpeciality && matchesCity;
  });

  return (
    <div className='list_artisan'>

      <div >
        <h1 className='title'>Les artisans</h1>
      </div>

      <div className='search'>
        <div className='searchAndFilter'>
          <div>
            <select
                    id="speciality"
                    value={selectedSpeciality}
                    onChange={(event) => setSelectedSpeciality(event.target.value)}
                  >
              <option value="">Toutes les spécialités</option>
              {specialities.map(speciality => (
                <option key={speciality.id_speciality} value={speciality.id_speciality}>
                  {speciality.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
                    id="city"
                    value={selectedCity}
                    onChange={(event) => setSelectedCity(event.target.value)}
                  >
              <option value="">Toutes les villes</option>
              {cities.map(city => (
                <option key={city.id_city} value={city.id_city}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='resultCount'>
          {/* <p>04 artisans trouvés</p> */}
          <p>{artisans.length} artisans trouvés</p>
        </div>
      </div>

      <div className='artisanResults'>
        {/* {artisans[0] && <ArtisanCard artisan={artisans[0]} />} */}
        {filteredArtisans.map(artisan => (
          <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
        ))}
        {/* <ArtisanCard />
        <ArtisanCard />
        <ArtisanCard /> */}
      </div>
    </div>
    )
}

export default App