import React from "react";

const Ring = () => {
  return (
    <div className="m-10">
      <button className="m-4 p-4 rounded-md ring">four</button>
      <button className="m-4 p-4 rounded-2xl ring-2">five</button>
      <button className="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">six</button>
    </div>
  );
};

export default Ring;
