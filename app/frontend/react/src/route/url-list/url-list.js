import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../state/app-state";
import Url from "./url";
import Pagination from "./pagination";
import "./url-list.css";

export default (props) => {
  const { Request, updateProgress, urls, setUrls } = useContext(AppContext);
  const [offset, setOffset] = useState(0);
  const [buttons, setButtons] = useState(0);
  const limit = 20;

  const getUrls = async () => {
    try {
      updateProgress({ loading: true });
      const response = await Request.fetch(`/api/urls?offset=${offset}`);
      setUrls(response.urls);
      setButtons(response.total > limit ? Math.round(response.total / limit) : 0);
      updateProgress({ loading: false, error: "" });
    } catch (error) {
      updateProgress({ loading: false, error: error.message });
    }
  };

  useEffect(() => {
    getUrls();
  }, [offset]);

  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="heading">URL List</h1>
        <ul className="container-list">
          <li className="url-list item-head">
            <h3 className="url-list head stats">Stat</h3>
            <h3 className="url-list head">Short</h3>
            <h3 className="url-list head">Original</h3>
          </li>
          {urls[0] && urls.map((url, i) => <Url url={url} key={i} />)}
        </ul>
        <Pagination buttons={buttons} setOffset={setOffset} pageNumber={offset / limit} limit={limit} />
      </div>
    </div>
  );
};
