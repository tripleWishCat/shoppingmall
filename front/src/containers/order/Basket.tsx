import React, { useEffect, useState } from "react";
interface Props {
  text: string;
  number: number;
}

export default function Basket({ ...props }: Props) {
  const [state, setState] = useState<number>(0);
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    const countDouble = function () {
      setState(state + 2);
    };
    countDouble();
  }, []);

  const count = function () {
    setState(state + 1);
  };
  const countNum = function () {
    setNum(num + 3);
  };
  return (
    <>
      {state}
      {num}
      <div>
        <button onClick={count}>클릭</button>
      </div>
      <div>
        <button onClick={countNum}>클릭</button>
      </div>
    </>
  );
}
