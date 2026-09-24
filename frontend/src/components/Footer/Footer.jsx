import './Footer.scss';

function Footer() {
  return (
    <footer>
        <div className="row">
            <div className="col-12 col-md-6">
              {/* Menu des pages légales */} 
              <p> <a href="/mentions-legales"> Mentions légales </a> </p> 
              <p> <a href="/donnees-personnelles"> Données personnelles </a> </p> 
              <p> <a href="/accessibilite"> Accessibilité </a> </p> 
              <p><a href="/cookies">Cookies</a></p>
            </div>

            <div className="col-12 col-md-6">
              {/* Adresse et contacts */} 
              <p>101 cours Charlemagne</p> 
              <p>CS 20033</p> <p>69269 LYON CEDEX 02</p> 
              <p>France</p> 
              <p className="footer-phone">+33 (0)4 26 73 40 00</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;