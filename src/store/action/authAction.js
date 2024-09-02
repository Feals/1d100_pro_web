export const createOrUpdateSession = (token) => ({
  type: "CREATE_SESSION",
  token,
});

export const logout = () => ({
  type: "LOGOUT",
});
