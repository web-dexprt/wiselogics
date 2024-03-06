// ServiceDataContext.js
// ServiceDataContext.jsx (rename the file to use the .jsx extension)

import React, { createContext, useContext } from "react";
import serviceData from "./serviceData"; // Adjust the import path as needed

const ServiceDataContext = createContext();

export const ServiceDataProvider = ({ children }) => {
  return (
    <ServiceDataContext.Provider value={serviceData}>
      {children}
    </ServiceDataContext.Provider>
  );
};

export const useServiceData = () => useContext(ServiceDataContext);
