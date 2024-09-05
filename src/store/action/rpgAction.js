import {
  ADD_RPG_SUCCESS,
  ADD_RPG_REQUEST,
  ADD_RPG_FAILURE,
} from "./actionTypes";

const addRpgSuccess = (data) => ({
  type: ADD_RPG_SUCCESS,
  data,
});

const addRpgFailures = (data) => ({
  type: ADD_RPG_FAILURE,
  data,
});

const addRpgRequest = () => ({
  type: ADD_RPG_REQUEST,
});

export const addRpg = (userData) => {
  console.log("userData", userData);
  return async (dispatch) => {
    dispatch(addRpgRequest());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/add-rpg`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la création d'un jdr");
      }

      const data = await response.json();
      dispatch(addRpgSuccess(data));
    } catch (error) {
      dispatch(addRpgFailures(error.message));
    }
  };
};
