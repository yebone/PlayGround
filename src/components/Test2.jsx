import React from "react";

const Test2 = () => {
  const obj = {
    result: {
      value: 1,
    },
  };
  console.log(obj?.results);
  return (
    <div>
      <h1 className="text-3xl text-red-300">hello</h1>
    </div>
  );
};

export default Test2;
