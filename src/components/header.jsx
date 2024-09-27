import { Link } from "react-router-dom";
import "../assets/css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/action/authAction";
import Nav from "../components/nav";
import SearchField from "./searchField";
import logoutIcon from "../../public/images/logoutIcon.png";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSearch = (search) => {};

  return (
    <header>
      <div className="horizontale">
        <div id="main_title">
          <Link to="/">
            <div id="logo">
              <img src="/images/logo1D100.png" alt="logo de 1D100" />
              <h1>
                1D100 <br />
                CLUB DE JDR
              </h1>
            </div>
            <div id="title_shadow"></div>
          </Link>
        </div>

        <div id="header_right">
          {token ? (
            <>
              <div className="horizontale">
                <h4>
                  {token.firstname} {token.lastname}
                </h4>
                <button onClick={handleLogout}>
                  <img id="logout" src={logoutIcon} alt="Logout" />
                </button>
              </div>
            </>
          ) : (
            <div id="login_section">
              <nav>
                <ul>
                  <li>
                    <Link to="/signup">{"S'inscrire"}</Link>
                  </li>
                  <li>
                    <p className="display_none">/</p>
                  </li>
                  <li>
                    <Link to="/signin">Se connecter</Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          <section className="display_none">
            <SearchField onSearch={handleSearch} />
          </section>
        </div>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
