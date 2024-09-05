import {
  GET_ALL_GENRES_REQUEST,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
} from "./actionTypes";

const getAllGenresSuccess = (data) => ({
  type: GET_ALL_GENRES_SUCCESS,
  data,
});

const getAllGenresFailures = (data) => ({
  type: GET_ALL_GENRES_FAILURE,
  data,
});

const getAllGenresRequest = () => ({
  type: GET_ALL_GENRES_REQUEST,
});

export const getAllGenres = () => {
  return async (dispatch) => {
    dispatch(getAllGenresRequest());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/genres`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des genres");
      }

      const genres = await response.json();
      dispatch(getAllGenresSuccess(genres));
    } catch (error) {
      dispatch(getAllGenresFailures(error.message));
    }
  };
};
