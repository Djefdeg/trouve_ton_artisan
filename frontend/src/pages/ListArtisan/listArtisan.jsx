import ArtisanCard from '../../components/ArtisanCard/ArtisanCard'
import { getArtisans, getSpecialities, getCities } from '../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './listArtisan.scss';

function App() {

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || '';
  const searchTerm = searchParams.get('search') || '';

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

    const matchesCategory = selectedCategory 
      ? artisan.Speciality.id_category === Number(selectedCategory) 
      : true;

    const matchesSpeciality = selectedSpeciality
      ? artisan.id_speciality === Number(selectedSpeciality) 
      : true;

    const matchesCity = selectedCity
      ? artisan.id_city === Number(selectedCity)
      : true;
  
    const matchesSearch = searchTerm
      ? artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.Speciality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.City.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSpeciality && matchesCity && matchesSearch;
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
          <p>{filteredArtisans.length} artisans trouvés</p>
        </div>
      </div>

      <div className='artisanResults'>
        {filteredArtisans.map(artisan => (
          <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
        ))}
      </div>
    </div>
    )
}

export default App