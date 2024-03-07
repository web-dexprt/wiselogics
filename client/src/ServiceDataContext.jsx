import React, { createContext, useContext } from "react";
import { serviceData, homeData } from "./serviceData"; // Adjust the import path as needed

const ServiceDataContext = createContext();

export const ServiceDataProvider = ({ children }) => {
  return (
    <ServiceDataContext.Provider value={{ serviceData, homeData }}>
      {children}
    </ServiceDataContext.Provider>
  );
};

export const useServiceData = () => useContext(ServiceDataContext);
