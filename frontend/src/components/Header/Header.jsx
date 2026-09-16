import './Header.scss';
import Logo from '../../assets/Logo-dropped.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={Logo} alt="Trouve ton artisan" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un artisan"
              aria-label="Rechercher un artisan"
            />
            <button className="btn btn-outline-primary" type="submit">
              🔍
            </button>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bâtiment
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Fabrication
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Alimentation
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Toutes les catégories
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Catégorie 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Catégorie 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Header;