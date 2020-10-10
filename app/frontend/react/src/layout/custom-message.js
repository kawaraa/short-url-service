import React, { useContext } from "react";
import { AppContext } from "../state/app-state";

export default (props) => {
  const { updateProgress } = useContext(AppContext);
  const close = () => updateProgress({ error: "" });
  let text = props.text;
  // Validate the error output to make sure the error is not coming from database or any other process
  if (/error/gim.test(props.name)) {
    text = /\([!]+\)/i.test(text) ? text : "Something wrong happened, sorry for inconvenience(!)";
  }

  return (
    <p className={(props.name || "") + " wrapper"}>
      {text}

      <img
        src="/image/x-icon.svg"
        className={(props.name || "") + " x-icon"}
        onClick={props.listener || close}
      />
    </p>
  );
};
