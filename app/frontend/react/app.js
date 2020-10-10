import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppProvider, { AppContext } from "./src/state/app-state";
import LoadingScreen from "./src/layout/loading-screen";
import CustomMessage from "./src/layout/custom-message";
import Navbar from "./src/layout/navbar";
import CreateUrlForm from "./src/route/form/create-url-form";
import UrlList from "./src/route/url-list/url-list";
import "./app.css";

function App() {
  const { progress } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/create-url" render={(props) => <CreateUrlForm {...props} />} />
        <Route exact path="/url-list" render={(props) => <UrlList {...props} />} />
        <Route exact path="/" render={() => <Redirect to="/create-url" />} />
      </Switch>
      {progress.error && <CustomMessage text={progress.error} name="progress-error" />}
      {progress.loading && <LoadingScreen />}
    </BrowserRouter>
  );
}

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
