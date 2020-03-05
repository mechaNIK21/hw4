import React from "react";
import style from "./style.module.css";
import start from "./start.svg";
import stop from "./stop.svg";

interface Props {
  go: boolean;
  click: () => void;
}

export default (props: Props) => {
  const { go, click } = props;
  return (
    <div className={style.Button}>
      <button onClick={click}>
        <img src={go ? stop : start} />
      </button>
    </div>
  );
};
