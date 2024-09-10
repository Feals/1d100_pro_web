import {
  addRpgActions,
  getAllRpgsActions,
  updateRpgActions,
  getRpgByIdActions,
} from "./actionCreator";

export const addRpg = (userData) => {
  return async (dispatch) => {
    dispatch(addRpgActions.request());

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
        throw new Error("Erreur lors de la création d'un JDR");
      }

      const data = await response.json();
      dispatch(addRpgActions.success(data));
    } catch (error) {
      dispatch(addRpgActions.failure(error.message));
    }
  };
};

export const getAllRpgs = () => {
  return async (dispatch) => {
    dispatch(getAllRpgsActions.request());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rpgs`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des JDRs");
      }

      const rpgs = await response.json();
      dispatch(getAllRpgsActions.success(rpgs));
      console.log("erer", rpgs);
    } catch (error) {
      dispatch(getAllRpgsActions.failure(error.message));
    }
  };
};

export const updateRpg = (userData) => {
  return async (dispatch) => {
    dispatch(updateRpgActions.request());

    const formData = new FormData();
    formData.append("name", userData.values.name);
    formData.append("description", userData.values.description);
    formData.append("genreIds", JSON.stringify(userData.values.genreIds));
    formData.append("file", userData.values.selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/${userData.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour d'un JDR");
      }

      const data = await response.json();
      dispatch(updateRpgActions.success(data));
    } catch (error) {
      dispatch(updateRpgActions.failure(error.message));
    }
  };
};

export const getRpgById = (id) => {
  return async (dispatch) => {
    dispatch(getRpgByIdActions.request());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du JDR");
      }

      const rpg = await response.json();
      dispatch(getRpgByIdActions.success(rpg));
    } catch (error) {
      dispatch(getRpgByIdActions.failure(error.message));
    }
  };
};
