import React from "react";
import style from "./Button.module.css";

export default function Button(props) {
  const { text, color, ...rest } = props;
  return (
    <>
      <button className={style.button} style={{ backgroundColor: color }} {...rest}>
        {text}
      </button>
    </>
  );
}
