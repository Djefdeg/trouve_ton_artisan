import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtisan } from '../../services/api';
import './ArtisanForm.scss';

function App() {

  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
  getArtisan(id).then(data => {
    setArtisan(data.artisan);
  });
  }, [id]);

  if (!artisan) {
    return <p>Chargement...</p>;
  }

  const imageUrl = artisan.logo
  ? `http://localhost:3000/${artisan.logo}`
  : `http://localhost:3000/${artisan.Speciality.avatar}`;

  return (
        <div className='artisan_form'>
            <section className='presentation'>
                <div className='image'>
                    <img className="artisan-card-image" alt="Image de l'artisan" src={imageUrl} />
                </div>
                <div className='info'>
                    <h3>{artisan.name}</h3>
                    <p className="rating">{artisan.mark} / 5 ★★★★★</p>
                    <span>Spécialité: </span>
                    <span>{artisan.Speciality.name}</span> <br />
                    <span>Ville:</span>
                    <span>{artisan.City.name}</span>
                </div>
            </section>

            <section className='section_form'>
                <div className="row justify-content-between row-gap-3"> 
                    <div className="col-12 col-md-6">
                        <div className='details'>
                            <div className='about p-3'>
                                <h3>A propos</h3>
                                <p>{artisan.about}</p> 
                            </div>
                            <div className='contact p-3'>
                                <h3>Coordonnées</h3>
                                <span>Email: </span>
                                <span>{artisan.email}</span> <br />
                                <span>Website:</span>
                                <span>{artisan.website}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <form  className='form p-3'>
                            <h3>Contacter l'artisan</h3>
                            <input className="form-control me-2" placeholder="Votre nom" 
                            aria-label="Rechercher un artisan"/>
                            <input className="form-control me-2 mt-1" type="email" placeholder="Votre Email" 
                            aria-label="Rechercher un artisan"/>
                            <input className="form-control me-2 mt-1" placeholder="Objet" 
                            aria-label="Objet"/>
                            <textarea className="form-control me-2 mt-1" name="" id="" placeholder="Votre message" rows="6"></textarea>
                        
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-outline-primary" type="submit"> Envoyer ✉️</button>
                            </div>
                        </form>     
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App