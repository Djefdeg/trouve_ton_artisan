import './ArtisanForm.scss';
import ImgProfil from './../../assets/logo_traiteur.jpg';

function App() {
  return (
        <div className='artisan_form'>
            <section className='presentation'>
                <div className='image'>
                    <img className="artisan-card-image" src={ImgProfil} alt="Image de l'artisan" />
                </div>
                <div className='info'>
                    <h3>Traiteur Truchon</h3>
                    <p className="rating">3 / 5 ★★★★★</p>
                    <span>Spécialité: </span>
                    <span>Traiteur</span> <br />
                    <span>Ville:</span>
                    <span>Lyon</span>
                </div>
            </section>

            <section className='section_form'>
                <div className="row justify-content-between row-gap-3"> 
                    <div className="col-12 col-md-6">
                        <div className='details'>
                            <div className='about p-3'>
                                <h3>A propos</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa 
                                    fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. 
                                </p>
                            </div>
                            <div className='contact p-3'>
                                <h3>Coordonnées</h3>
                                <span>Email: </span>
                                <span>contact@truchon-traiteur.fr</span> <br />
                                <span>Website:</span>
                                <span>https://truchon-traiteur.fr</span>
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
                            <textarea className="form-control me-2 mt-1" name="" id="" placeholder="Votre message" rows="3"></textarea>
                        
                            <div class="d-flex justify-content-center mt-2">
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