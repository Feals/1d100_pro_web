import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllTables } from "../store/action/tableAction";
import { useDispatch, useSelector } from "react-redux";

const GetAllTables = () => {
  const dispatch = useDispatch();
  const { tables, loading, error } = useSelector((state) => state.tables);

  useEffect(() => {
    dispatch(getAllTables());
  }, [dispatch]);
  console.log("tables", tables);

  return (
    <div>
      <h2>Les Tables :</h2>
      {loading ? (
        <p>Chargement des Tables de JDR...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : tables && tables.length > 0 ? (
        tables.map((table) => (
          <div key={table.id}>
            <p>nom: {table.name}</p>
            <p>description: {table.description}</p>
            <p>genres :</p>
            {table.Rpg.Genres
              ? table.Rpg.Genres.map((genre) => (
                  <div key={genre.id}>
                    <p>{genre.genre}</p>
                  </div>
                ))
              : null}
            <p>nombres de joueurs Maximum : </p>
            {table.nb_players}
            <p>nombres d&apos;inscrit :</p>
            {table.registered.length} / {table.nb_players}
            <p>inscrit :</p>
            {table.registeredUsers.length > 0
              ? table.registeredUsers.map((registeredUser) => (
                  <div key={registeredUser.id}>
                    <p>
                      {registeredUser.firstname} {registeredUser.lastname}
                    </p>
                  </div>
                ))
              : null}
            <p>images:</p>
            <img src={`http://localhost:1500/${table.Rpg.images}`} alt="rpg" />
            <p>
              auteur: {table.User.firstname} {table.User.lastname}
            </p>
            <Link to={`/rpg/${table.id}`}>Voir les détails</Link>
          </div>
        ))
      ) : (
        <p>Aucune table de JDR n&apos;a été trouvée.</p>
      )}
    </div>
  );
};

export default GetAllTables;
