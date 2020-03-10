import React from "react";
import Button from "./Button";
import Timer from "./Timer";
import style from "./style.module.css";

interface State {
  result: string;
  go: boolean;
}

export default class StopwatchClass extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    console.log("Запуск конструктора");
    this.timer = null;
  }

  timer: any = null;
  state = {
    result: "00:00:00",
    go: false
  };

  timerEnd() {
    let timeStart = new Date();
    let timer = setInterval(() => {
      const date = new Date(new Date().getTime() - timeStart.getTime());
      date.setHours(date.getHours() - 3);
      this.setState({ result: date.toLocaleTimeString() });
    }, 1000);
    this.timer = timer;
    console.log("Отсчет времени");
  }

  shouldComponentUpdate(newProps: {}, newState: State) {
    return newState !== this.state;
  }
  componentDidMount() {
    console.log(
      "Вызывается сразу после монтирования компонента в DOM дерево, а так же служит для подписки"
    );
  }

  componentDidUpdate(newProps: {}, newState: State) {
    if (newState.go !== this.state.go) {
      if (this.state.go) {
        console.log(`Старт секундомера`);
        this.timerEnd();
      } else {
        console.log(`Остановка секундомера`);
        this.setState({ result: "00:00:00" });
        clearInterval(this.timer);
      }
    }
    console.log(
      "Вызывается после обновления состояния, но не после первого рендера"
    );
  }

  componentWillUnmount() {
    console.log(
      "вызывается перез удалением компонента в дерево, а точнее его размонтировании"
    );
    clearInterval(this.timer);
  }

  toogleStopWatch = () => {
    this.setState({ go: !this.state.go });
    console.log("Запуск по клику");
  };

  render() {
    const { go } = this.state;
    return (
      <>
        <h1>Class Component</h1>
        <div className={style.stopwatch}>
          <Button go={go} click={this.toogleStopWatch} />
          {go && <Timer result={this.state.result} timer={this.timer} />}
        </div>
      </>
    );
  }
}
