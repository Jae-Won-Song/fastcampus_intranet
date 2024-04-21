import { useState, useEffect } from "react";

function Time(props) {
  const [time, setTime] = useState(new Date());

  function ampm() {
    if (time.getHours() < 12) {
      return "오전";
    }
    return "오후";
  }

  function hour() {
    if (time.getHours < 10) {
      return `0${time.getHours()}`;
    }
    return time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  }

  function minute() {
    if (time.getMinutes() < 10) {
      return `0${time.getMinutes()}`;
    }
    return time.getMinutes();
  }

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <span className="ampm">{ampm()}</span>
      <span className="time">{`${hour()}:${minute()}`}</span>
    </>
  );
}

export default Time;
