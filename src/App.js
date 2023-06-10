import { useState, useEffect } from "react";
export default function App() {
  const [advice, setAdvice] = useState("Click to read one...");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Read Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p> So far you read {props.count} advices... </p>;
}
