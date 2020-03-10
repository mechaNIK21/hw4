import React from "react";
import style from "./style.module.css";

interface Props {
  result: string;
  timer: NodeJS.Timeout;
}

export default class Timer extends React.Component<Props> {
  componentWillUnmount() {
    clearInterval(this.props.timer);
    console.log("Удаление компонента и демонтаж из дерева");
  }
  render() {
    return (
      <div className={style.StopWatchWrapper}>
        <span>Время</span>
        <p>{this.props.result}</p>
      </div>
    ); 
  }
}
