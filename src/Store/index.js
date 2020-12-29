import React, { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext();
//learning ---> log and check this part
export const useStoreValues = () => useContext(StoreContext);

export const StoreProvider = ({ reducer, initialState, children }) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
};
