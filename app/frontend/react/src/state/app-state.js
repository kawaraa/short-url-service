import React, { createContext, useState } from "react";
import Request from "../utility/request";

export const AppContext = createContext();

export default (props) => {
  const [progress, setProgress] = useState({ loading: false, error: "" });
  const [query, setQuery] = useState({ offset: 0, limit: 20 });
  const [urls, setUrls] = useState([]);

  const updateProgress = (state) => setProgress({ ...progress, ...state });

  const state = { Request, progress, updateProgress, query, setQuery, urls, setUrls };
  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};
