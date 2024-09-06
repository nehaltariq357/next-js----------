import React from "react";

const Shadows = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="mb-10">
        <button className="bg-white mx-10 p-10 shadow-sm">one</button>
        <button className="bg-white mx-10 p-10 shadow-sm">two</button>
        <button className="bg-white mx-10 p-10 shadow-lg">three</button>
      </div>
      <div>
        <button className="bg-white mx-10 p-10 shadow-xl">four</button>
        <button className="bg-white mx-10 p-10 shadow-2xl">five</button>
        <button className="bg-white mx-10 p-10 shadow-inner">six</button>
      </div>
    </div>
  );
};

export default Shadows;
