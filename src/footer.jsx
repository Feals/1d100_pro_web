import { Link } from "react-router-dom";
import "../src/css/footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div id="footer">
          <div id="adresse">
            <h3>1D100 CLUB DE JDR</h3>
            <p>3 rue des blablablas</p>
            <p> 59242 Templeuve</p>
            <p> jdr1D100.templeuve@gmail.com</p>
            <p> 0600000000</p>
          </div>

          <div id="réseau"></div>

          <div id="newsletter">
            <h3>NEWSLETTER</h3>
            <p>
              Inscris toi à la Newsletter pour recevoir toutes nos informations
              !
            </p>
            <input type="text" name="Nom et Prénom" value="Nom et Prénom" />
            <input id="onglet" type="email" name="email" value="email" />
            <input id="inscription" type="submit" value="S'INSCRIRE" />
          </div>
        </div>

        <div id="mentions_legal">
          <Link to="/mentionsLegales">Mentions légales</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
