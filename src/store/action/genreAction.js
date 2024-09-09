import { getAllGenresActions } from "./actionCreator";

export const getAllGenres = () => {
  return async (dispatch) => {
    dispatch(getAllGenresActions.request());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/genres`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des genres");
      }

      const genres = await response.json();
      dispatch(getAllGenresActions.success(genres));
    } catch (error) {
      dispatch(getAllGenresActions.failure(error.message));
    }
  };
};
