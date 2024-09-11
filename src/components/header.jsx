import { Link } from "react-router-dom";
import "../assets/css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/action/authAction";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {
    dispatch(logout());
  };
  if (token) {
    return (
      <header>
        <Link to="/">
          <div id="titre_principal">
            <div id="logo">
              <img src="/images/logo1D100.png" alt="logo de 1D100" />
              <h1>
                1D100 <br />
                CLUB DE JDR
              </h1>
            </div>
          </div>
          <div id="shadow_title"></div>
        </Link>

        <div id="partie_droite">
          <h2>{token.username}</h2>
          <button onClick={handleLogout}>Déconnexion</button>
          <input id="recherche" type="search" defaultValue="recherche" />
          <input id="GO" type="submit" defaultValue="GO" />
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <Link to="/">
          <div id="titre_principal">
            <div id="logo">
              <img src="/images/logo1D100.png" alt="logo de 1D100" />
              <h1>
                1D100 <br />
                CLUB DE JDR
              </h1>
            </div>
            <div id="shadow_title"></div>
          </div>
        </Link>

        <div id="partie_droite">
          <div id="connexion">
            <nav>
              <ul>
                <li>
                  <Link to="/signup">Inscription</Link>
                </li>
                <li>
                  <p>/</p>
                </li>
                <li>
                  <Link to="/signin">Connexion</Link>
                </li>
              </ul>
            </nav>
          </div>

          <input id="recherche" type="search" defaultValue="recherche" />
          <input id="GO" type="submit" defaultValue="GO" />
        </div>
      </header>
    );
  }
}

export default Header;
