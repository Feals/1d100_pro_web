import { signUpActions, signInActions } from "./actionCreator";
import { jwtDecode } from "jwt-decode";

export const signUp = (userData) => {
  return async (dispatch) => {
    dispatch(signUpActions.request());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      dispatch(signUpActions.success(data.token));
    } catch (error) {
      dispatch(signUpActions.failure(error.message));
    }
  };
};

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(signInActions.request());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion");
      }

      const data = await response.json();
      const decodedToken = jwtDecode(data.token);
      dispatch(signInActions.success(decodedToken));
    } catch (error) {
      dispatch(signInActions.failure(error.message));
    }
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

export const createOrUpdateSession = (token) => ({
  type: "CREATE_SESSION",
  token,
});
