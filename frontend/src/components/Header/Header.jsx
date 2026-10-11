import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import './Header.scss';
import Logo from '../../assets/Logo-dropped.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    navigate(`/artisans?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    getCategories().then(data => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img className="navbar-logo" src={Logo} alt="Trouve ton artisan" />
        </Link>

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

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un artisan"
              aria-label="Rechercher un artisan"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              🔍
            </button>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/artisans?category=2">
                Bâtiment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artisans?category=4">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artisans?category=3">
                Fabrication
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artisans?category=1">
                Alimentation
              </Link>
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
                  <Link className="dropdown-item" to="/artisans">
                    Tous les artisans
                  </Link>
                </li>

                {categories.map(category => (
                  <li key={category.id_category}>
                    <Link 
                      className="dropdown-item" to={`/artisans?category=${category.id_category}`} > {category.name} 
                    </Link>
                  </li>
                ))}
              </ul>

            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Header;