import {
  addTableActions,
  getAllTablesActions,
  updateTableActions,
  getTableByIdActions,
} from "./actionCreator";

export const addTable = (userData) => {
  return async (dispatch) => {
    dispatch(addTableActions.request());

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("description", userData.description);
    formData.append("genreIds", JSON.stringify(userData.genreIds));
    formData.append("file", userData.selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tables/add-table`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la création d'une table de JDR");
      }

      const data = await response.json();
      dispatch(addTableActions.success(data));
    } catch (error) {
      dispatch(addTableActions.failure(error.message));
    }
  };
};

export const getAllTables = () => {
  return async (dispatch) => {
    dispatch(getAllTablesActions.request());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rpgs`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des tables de JDR");
      }

      const tables = await response.json();
      dispatch(getAllTablesActions.success(tables));
    } catch (error) {
      dispatch(getAllTablesActions.failure(error.message));
    }
  };
};

export const updateTable = (userData) => {
  return async (dispatch) => {
    dispatch(updateTableActions.request());

    const formData = new FormData();
    formData.append("name", userData.values.name);
    formData.append("description", userData.values.description);
    formData.append("genreIds", JSON.stringify(userData.values.genreIds));
    formData.append("file", userData.values.selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tables/${userData.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour d'une table de JDR");
      }

      const data = await response.json();
      dispatch(updateTableActions.success(data));
    } catch (error) {
      dispatch(updateTableActions.failure(error.message));
    }
  };
};

export const getTableById = (id) => {
  return async (dispatch) => {
    dispatch(getTableByIdActions.request());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tables/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération d'une table de JDR");
      }

      const table = await response.json();
      dispatch(getTableByIdActions.success(table));
    } catch (error) {
      dispatch(getTableByIdActions.failure(error.message));
    }
  };
};
