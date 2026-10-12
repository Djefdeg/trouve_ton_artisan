import { Link } from 'react-router-dom';
import { API_URL } from '../../services/api';
import './ArtisanCard.scss';

function ArtisanCard({ artisan }) {

  const imageUrl = artisan.logo
  ? `${API_URL}/${artisan.logo}`
  : `${API_URL}/${artisan.Speciality.avatar}`;

  return (
    <Link
      to={`/contact/${artisan.id_artisan}`}
      className="artisan-card"
    >
      <div className="artisan-card-image">
        {/* Logo de l'artisan */}
        <img
          className="artisan-card-image"
          alt="Image de l'artisan"
          src={imageUrl}
        />
      </div>

      <div className="artisan-card-info">
        {/* Informations de l'artisan */}
        <h3>{artisan.name}</h3>
        <p className="rating">
          {artisan.mark} / 5 {'★'.repeat(Math.round(artisan.mark))}
          {'☆'.repeat(5 - Math.round(artisan.mark))}
        </p>
        <p>{artisan.Speciality.name}</p>
        <p>{artisan.City.name}</p>
      </div>
    </Link>

  );
}

export default ArtisanCard;