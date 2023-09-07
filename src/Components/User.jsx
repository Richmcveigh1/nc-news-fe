import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider
      value={{
        username: "weegembump",
        name: "Gemma Bump",
        avatar_url:
          "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
