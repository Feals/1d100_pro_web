import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "./actionTypes";

export const createOrUpdateSession = (token) => ({
  type: "CREATE_SESSION",
  token,
});

export const logout = () => ({
  type: "LOGOUT",
});

const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signUpSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  token,
});

const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error,
});

const signInRequest = () => ({
  type: SIGNIN_REQUEST,
});

const signInSuccess = (token) => ({
  type: SIGNIN_SUCCESS,
  token,
});

const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  error,
});

export const signUp = (userData) => {
  return async (dispatch) => {
    dispatch(signUpRequest());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      dispatch(signUpSuccess(data.token));
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };
};

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion");
      }

      const data = await response.json();
      dispatch(signInSuccess(data.token));
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
};
