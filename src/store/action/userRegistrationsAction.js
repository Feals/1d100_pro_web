import {
  getDatesWhereUserRegisteredActions,
  addUserToTableActions,
  removedUserToTableActions,
} from "./actionCreator";

export const getDatesWhereUserRegistered = (id) => {
  return async (dispatch) => {
    dispatch(getDatesWhereUserRegisteredActions.request());

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/userRegistrations/user-registrations/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du JDR");
      }

      const datesWhereUserRegistered = await response.json();
      dispatch(
        getDatesWhereUserRegisteredActions.success(datesWhereUserRegistered)
      );
    } catch (error) {
      dispatch(getDatesWhereUserRegisteredActions.failure(error.message));
    }
  };
};
export const addUserToTable = (tableId, userId, sessionDate) => {
  return async (dispatch) => {
    dispatch(addUserToTableActions.request());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/userRegistrations/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tableId, userId, sessionDate }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour de la table de JDR");
      }

      const data = await response.json();
      dispatch(addUserToTableActions.success(data));
    } catch (error) {
      dispatch(addUserToTableActions.failure(error.message));
    }
  };
};

export const removedUserToTable = (tableId, userId) => {
  return async (dispatch) => {
    dispatch(removedUserToTableActions.request());
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/userRegistrations/unsubscribe/`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tableId, userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour d'une table de JDR");
      }

      const data = await response.json();
      dispatch(removedUserToTableActions.success(data));
    } catch (error) {
      dispatch(removedUserToTableActions.failure(error.message));
    }
  };
};
