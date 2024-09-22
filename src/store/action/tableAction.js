import {
  addTableActions,
  getAllTablesActions,
  updateTableActions,
  getTableByIdActions,
} from "./actionCreator";

export const addTable = (userData) => {
  return async (dispatch) => {
    dispatch(addTableActions.request());
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgTables/add-table`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
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
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgTables`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

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
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rpgTables/${userData.tableId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
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
        `${import.meta.env.VITE_API_URL}/rpgTables/${id}`,
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
