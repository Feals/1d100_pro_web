import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllRpgs } from "../store/action/rpgAction";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/tableAndRpg.css";

const GetAllRpgs = () => {
  const dispatch = useDispatch();
  const { rpgs, loading, error } = useSelector((state) => state.rpgs);

  useEffect(() => {
    dispatch(getAllRpgs());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Les JDRs :</h2>
      {loading ? (
        <p>Chargement des JDRs...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : rpgs && rpgs.length > 0 ? (
        rpgs.map((rpg) => (
          <div key={rpg.id} className={`container_table_and_rpg`}>
            <div className="composents_positions">
              <div>
                <div className="info-row">
                  <h5>Nom :</h5>
                  <p> {rpg.name}</p>
                </div>
                <div className="info-row">
                  <h5>description :</h5>
                  <p> {rpg.description}</p>
                </div>
                <div className="info-row">
                  <h5>genres :</h5>
                  <p> :</p>
                  {rpg.Genres
                    ? rpg.Genres.map((genre) => (
                        <div key={genre.id}>
                          <p>{genre.genre}</p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div className="image-container">
                <img src={`http://localhost:1500/${rpg.images}`} alt="rpg" />
                <Link to={`/rpg/${rpg.id}`}>Voir les détails</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun JDR trouvé.</p>
      )}
    </div>
  );
};

export default GetAllRpgs;
