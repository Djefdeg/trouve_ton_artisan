import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtisan } from '../../services/api';
import './ArtisanForm.scss';

function App() {

    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [messageConfirmation, setMessageConfirmation] = useState('');

    useEffect(() => {
    if (messageConfirmation) {
        const timer = setTimeout(() => {
            setMessageConfirmation('');
        }, 2000);

            return () => clearTimeout(timer);
        }
    }, [messageConfirmation]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

  
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/artisans/${id}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessageConfirmation(data.message);

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }

        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
        }
    };

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
                        {messageConfirmation && (
                            <div className="alert alert-success" role="alert">
                                {messageConfirmation}
                            </div>
                        )}
                        <form className='form p-3' onSubmit={handleSubmit}>
                            <h3>Contacter l'artisan</h3>
                            <input
                                className="form-control me-2"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Votre nom"
                                aria-label="Votre nom"
                                required
                            />
                            <input
                                className="form-control me-2 mt-1"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Votre Email"
                                aria-label="Votre Email"
                                required
                            />
                            <input
                                className="form-control me-2 mt-1"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Objet"
                                aria-label="Objet"
                                required
                            />
                            <textarea
                                className="form-control me-2 mt-1"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Votre message"
                                rows="6"
                                required
                            ></textarea>
                        
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