import React from "react";

export default ({ url }) => {
  return (
    <li className="url-list item">
      <p className="url-list cell stats">{url.accessCount}</p>
      <p className="url-list cell">{url.short}</p>
      <p className="url-list cell">{url.original}</p>
    </li>
  );
};
