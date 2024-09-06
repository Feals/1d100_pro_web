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
  return async (dispatch) => {
    dispatch(addRpgRequest());

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("description", userData.description);
    formData.append("genreIds", JSON.stringify(userData.genreIds));
    formData.append("file", userData.selectedFile);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/add-rpg`,
        {
          method: "POST",
          body: formData,
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
