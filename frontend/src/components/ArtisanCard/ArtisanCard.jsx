import './ArtisanCard.scss';

function ArtisanCard({ artisan }) {

  const imageUrl = artisan.logo
  ? `http://localhost:3000/${artisan.logo}`
  : `http://localhost:3000/${artisan.Speciality.avatar}`;

  return (
    <article className="artisan-card">
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
        <p className="rating">{artisan.mark} / 5 ★★★★★</p>
        <p>{artisan.Speciality.name}</p>
        <p>{artisan.City.name}</p>
      </div>
    </article>

  );
}

export default ArtisanCard;