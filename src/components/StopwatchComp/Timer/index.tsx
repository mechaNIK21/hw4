import React from "react";

interface State {
  timer: number;
}

export default () => {
  const [result, setResult] = React.useState("00.00.00");
  const [start, setStart] = React.useState(new Date());

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => {
      const date: Date = new Date(new Date().getTime() - start.getTime());
      date.setHours(date.getHours() - 3);
      setResult(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    console.log("Запуск после рендера, при каждом изменении состояния");
  }, [result]);
  return (
    <div>
      <span>Времня</span>
      <p>{result}</p>
    </div>
  );
};
