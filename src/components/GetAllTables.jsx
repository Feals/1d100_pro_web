import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTables } from "../store/action/tableAction";
import { getDatesWhereUserRegistered } from "../store/action/userRegistrationsAction";
import { setModalData } from "../store/action/modalAction";

import SubscribeButton from "./bouton/subscribeButton";
import UnsubscribeButton from "./bouton/unsubscribeButton";
import {
  addUserToTable,
  removedUserToTable,
} from "../store/action/userRegistrationsAction";
import EditTableModal from "./modal/editTableModal";
import "../assets/css/tableAndRpg.css";

const GetAllTables = () => {
  const dispatch = useDispatch();
  const { tables, loading, error } = useSelector((state) => state.tables);
  const { token } = useSelector((state) => state.auth);
  const { userRegistrations } = useSelector((state) => state.userRegistrations);
  const [selectedTableId, setSelectedTableId] = useState(null);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getAllTables());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedTableId(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (token && token.userId) {
      dispatch(getDatesWhereUserRegistered(token.userId));
    }
  }, [dispatch, token]);

  const handleSubscribe = async (tableId, userId, tableDate) => {
    try {
      dispatch(addUserToTable(tableId, userId, tableDate));
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const handleUnsubscribe = async (tableId, userId) => {
    try {
      dispatch(removedUserToTable(tableId, userId));
    } catch (error) {
      console.error("Erreur lors de la désinscription :", error);
    }
  };

  const handleEditClick = (tableId) => {
    if (!isOpen) {
      setSelectedTableId(tableId);
    }
  };

  useEffect(() => {
    dispatch(setModalData());
  }, [dispatch]);
  return (
    <div className="container">
      <h2>Les Tables :</h2>
      {loading ? (
        <p>Chargement des Tables de JDR...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : tables && tables.length > 0 ? (
        tables.map((table) => {
          const isRegistered = userRegistrations?.registrationDates?.includes(
            table.session_date
          );
          const isTableIdRegistered = userRegistrations?.tableIds?.includes(
            table.id
          );

          return (
            <div key={table.id} className={`container_table_and_rpg`}>
              <div className="composents_positions">
                {!isRegistered &&
                  !isTableIdRegistered &&
                  token.userId !== table.author &&
                  table.registeredUsers.length < table.nb_players && (
                    <SubscribeButton
                      onJoin={() =>
                        handleSubscribe(
                          table.id,
                          token.userId,
                          table.session_date
                        )
                      }
                    />
                  )}
                {isTableIdRegistered && (
                  <UnsubscribeButton
                    onLeave={() => handleUnsubscribe(table.id, token.userId)}
                  />
                )}

                <div onClick={() => handleEditClick(table.id)}>
                  <EditTableModal tableId={selectedTableId} />
                </div>
              </div>

              <div className="composents_positions">
                <div>
                  <div className="info-row">
                    <h5>Nom :</h5>
                    <p>{table.name}</p>
                  </div>
                  <div className="info-row">
                    <h5>Description :</h5>
                    <p>{table.description}</p>
                  </div>
                  <div className="info-row">
                    <h5>Genres :</h5>

                    {table.Rpg?.Genres?.length ? (
                      table.Rpg.Genres.map((genre) => (
                        <div key={genre.id}>
                          <p>{genre.genre}</p>
                        </div>
                      ))
                    ) : (
                      <p>Aucun genre</p>
                    )}
                  </div>
                  <div className="info-row">
                    <h5>Nombres de joueurs Maximum :</h5>
                    <p> {table.nb_players}</p>
                  </div>
                  <div className="info-row">
                    <h5>Nombres d&apos;inscrits : </h5>
                    <p>
                      {table.registeredUsers?.length || 0} / {table.nb_players}
                    </p>
                  </div>
                  <div className="info-row">
                    <h5>Inscrit:</h5>

                    {table.registeredUsers?.length ? (
                      table.registeredUsers.map((registeredUser) => (
                        <div key={registeredUser.id}>
                          <p>
                            {registeredUser.firstname} {registeredUser.lastname}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p>Aucun inscrit</p>
                    )}
                  </div>
                </div>
                <div className="image-container">
                  <img
                    src={`http://localhost:1500/${table.Rpg?.images || ""}`}
                    alt="rpg"
                  />
                </div>
              </div>
              <h5>Auteur:</h5>
              <p>
                {table.User?.firstname || "Inconnu"}{" "}
                {table.User?.lastname || "Inconnu"}
              </p>
              <Link to={`/rpg/${table.id}`} className="link">
                Voir les détails
              </Link>
            </div>
          );
        })
      ) : (
        <p>Aucune table de JDR n&apos;a été trouvée.</p>
      )}
    </div>
  );
};

export default GetAllTables;
