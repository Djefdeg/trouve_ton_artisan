import './ArtisanForm.scss';
import ImgProfil from './../../assets/logo_traiteur.jpg';

function App() {
  return (
        <div className='artisan_form'>
            <div className='presentation'>
                <div className='image'>
                    <img className="artisan-card-image" src={ImgProfil} alt="Image de l'artisan" />
                </div>
                <div className='info'>

                </div>

            </div>

            <div className='details'>
                <div className='about'>

                </div>
                <div className='contact'>

                </div>

            </div>

            <div className='form'>

            </div>

        </div>
    )
}

export default App