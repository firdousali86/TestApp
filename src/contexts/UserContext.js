import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext({
  state: {},
  actions: {},
});

export function UserContextProvider({userObject, setUserObject, children}) {
  //   const [data, setData] = useState(username);

  //   useEffect(() => {
  //     setData(username);
  //   }, [username]);

  const value = {
    state: {userObject},
    actions: {setUserObject},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
