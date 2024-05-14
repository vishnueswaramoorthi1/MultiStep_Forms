import { useState } from "react";
import DetailContext from "./DetailContext";

export const DetailProvider = ({ children }) => {
    const [details, setDetails] = useState({});
  
    return (
      <DetailContext.Provider value={{ details, setDetails }}>
        {children}
      </DetailContext.Provider>
    );
  };