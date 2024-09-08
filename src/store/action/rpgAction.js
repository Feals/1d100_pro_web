import {
  ADD_RPG_SUCCESS,
  ADD_RPG_REQUEST,
  ADD_RPG_FAILURE,
  GET_ALL_RPGS_REQUEST,
  GET_ALL_RPGS_SUCCESS,
  GET_ALL_RPGS_FAILURE,
  UPDATE_RPG_SUCCESS,
  UPDATE_RPG_FAILURE,
  UPDATE_RPG_REQUEST,
  GET_RPG_BY_ID_SUCCESS,
  GET_RPG_BY_ID_FAILURE,
  GET_RPG_BY_ID_REQUEST,
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

const updateRpgSuccess = (data) => ({
  type: UPDATE_RPG_SUCCESS,
  data,
});

const updateRpgFailures = (data) => ({
  type: UPDATE_RPG_FAILURE,
  data,
});

const updateRpgRequest = () => ({
  type: UPDATE_RPG_REQUEST,
});

const getAllRpgsSuccess = (data) => ({
  type: GET_ALL_RPGS_SUCCESS,
  data,
});

const getAllRpgsFailures = (data) => ({
  type: GET_ALL_RPGS_FAILURE,
  data,
});

const getAllRpgsRequest = () => ({
  type: GET_ALL_RPGS_REQUEST,
});

const getRpgByIdSuccess = (data) => ({
  type: GET_RPG_BY_ID_SUCCESS,
  data,
});

const getRpgByIdFailure = (error) => ({
  type: GET_RPG_BY_ID_FAILURE,
  error,
});

const getRpgByIdRequest = () => ({
  type: GET_RPG_BY_ID_REQUEST,
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

export const updateRpg = (userData) => {
  return async (dispatch) => {
    dispatch(updateRpgRequest());
    const id = userData.id;
    console.log("userData", userData);
    const formData = new FormData();
    formData.append("name", userData.values.name);
    formData.append("description", userData.values.description);
    formData.append("genreIds", JSON.stringify(userData.values.genreIds));
    formData.append("file", userData.values.selectedFile);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'update d'un jdr");
      }

      const data = await response.json();
      dispatch(updateRpgSuccess(data));
    } catch (error) {
      dispatch(updateRpgFailures(error.message));
    }
  };
};

export const getAllRpgs = () => {
  return async (dispatch) => {
    dispatch(getAllRpgsRequest());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rpgs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des jdrs");
      }

      const rpgs = await response.json();
      dispatch(getAllRpgsSuccess(rpgs));
    } catch (error) {
      dispatch(getAllRpgsFailures(error.message));
    }
  };
};

export const getRpgById = (id) => {
  return async (dispatch) => {
    dispatch(getRpgByIdRequest());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgs/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du JDR");
      }

      const rpg = await response.json();
      dispatch(getRpgByIdSuccess(rpg));
    } catch (error) {
      dispatch(getRpgByIdFailure(error.message));
    }
  };
};
