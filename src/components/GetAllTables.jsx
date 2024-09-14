import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTables,
  addUserToTable,
  removedUserToTable,
} from "../store/action/tableAction";
import SubscribeButton from "./bouton/subscribeButton";
import UnsubscribeButton from "./bouton/unsubscribeButton";

const GetAllTables = () => {
  const dispatch = useDispatch();
  const { tables, loading, error } = useSelector((state) => state.tables);

  const [registrationStatus, setRegistrationStatus] = useState({});

  useEffect(() => {
    dispatch(getAllTables());
  }, [dispatch]);

  const handleSubscribe = async (tableId) => {
    try {
      await dispatch(addUserToTable(tableId));
      setRegistrationStatus((prevState) => ({
        ...prevState,
        [tableId]: true,
      }));
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const handleUnsubscribe = async (tableId) => {
    try {
      await dispatch(removedUserToTable(tableId));
      setRegistrationStatus((prevState) => ({
        ...prevState,
        [tableId]: false,
      }));
    } catch (error) {
      console.error("Erreur lors de la désinscription :", error);
    }
  };

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
            {registrationStatus[table.id] ? (
              <UnsubscribeButton onLeave={() => handleUnsubscribe(table.id)} />
            ) : (
              <SubscribeButton onJoin={() => handleSubscribe(table.id)} />
            )}
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
            <p>nombres de joueurs Maximum : {table.nb_players}</p>
            <p>
              nombres d&apos;inscrit : {table.registered.length} /{" "}
              {table.nb_players}
            </p>
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
