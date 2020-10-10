import React, { useContext, useState } from "react";
import { AppContext } from "../../state/app-state";
import "./create-url.css";

export default (props) => {
  const { Request, updateProgress } = useContext(AppContext);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      updateProgress({ loading: true });
      const res = await Request.send({ url: form.url.value }, "/api/shorten"); // {short: ""}
      setResponse(res);
      form.reset();
      updateProgress({ loading: false, error: "" });
    } catch (error) {
      updateProgress({ loading: false, error: error.message });
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="heading">Insert a URl to convert</h1>
        <form className="create-url form" onSubmit={handleSubmit}>
          <input type="text" name="url" placeholder="https://example.com/path/something" />
          <button type="submit">Convert</button>
        </form>
        {response && (
          <article className="response wrapper">
            <h3 className="heading">Shortened URL</h3>
            <p className="response value">{response.short}</p>
          </article>
        )}
      </div>
    </div>
  );
};
