import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllRpgs } from "../store/action/rpgAction";
import { useDispatch, useSelector } from "react-redux";

const GetAllRpgs = () => {
  const dispatch = useDispatch();
  const { rpgs, loading, error } = useSelector((state) => state.rpgs);

  useEffect(() => {
    dispatch(getAllRpgs());
  }, [dispatch]);
  console.log("rpgs", rpgs);
  return (
    <div>
      <h2>JDRs :</h2>
      {loading ? (
        <p>Chargement des JDRs...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : rpgs && rpgs.length > 0 ? (
        rpgs.map((rpg) => (
          <div key={rpg.id}>
            <p>nom: {rpg.name}</p>
            <p>description: {rpg.description}</p>
            <p>genres :</p>
            {rpg.Genres
              ? rpg.Genres.map((genre) => (
                  <div key={genre.id}>
                    <p>{genre.genre}</p>
                  </div>
                ))
              : null}
            <p>images:</p>
            <img src={`http://localhost:1500/${rpg.images}`} alt="rpg" />
            <Link to={`/rpg/${rpg.id}`}>Voir les détails</Link>
          </div>
        ))
      ) : (
        <p>Aucun JDR trouvé.</p>
      )}
    </div>
  );
};

export default GetAllRpgs;
