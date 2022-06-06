import React from "react";
import "./Button.css";

export default function Button(props) {
  const { text, color, ...rest } = props;
  return (
    <>
      <button className="button" style={{ backgroundColor: color }} {...rest}>
        {text}
      </button>
    </>
  );
}
