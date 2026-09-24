import './ArtisanCard.scss';
import ImgProfil from './../../assets/logo_traiteur.jpg';

function ArtisanCard() {
  return (
    <article className="artisan-card">
      <div className="artisan-card-image">
        {/* Logo de l'artisan */}
        <img className="artisan-card-image" src={ImgProfil} alt="Image de l'artisan" />
      </div>

      <div className="artisan-card-info">
        {/* Informations de l'artisan */}
        <h3>Traiteur Truchon</h3>
        <p className="rating">3 / 5 ★★★★★</p>
        <p>Traiteur</p>
        <p>Lyon</p>
      </div>
    </article>

  );
}

export default ArtisanCard;