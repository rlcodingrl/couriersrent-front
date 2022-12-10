export const logout = (setUser) => {
  console.log("logout func work");
  localStorage.setItem("jwt", "");
  console.log(setUser);
  setUser("");
};
