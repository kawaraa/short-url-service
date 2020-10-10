import React, { createContext, useState } from "react";
import Request from "../utility/request";

export const AppContext = createContext();

export default (props) => {
  const [progress, setProgress] = useState({ loading: false, error: "" });
  const [urls, setUrls] = useState([]);

  const updateProgress = (state) => setProgress({ ...progress, ...state });

  const state = { Request, progress, updateProgress, urls, setUrls };
  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};
