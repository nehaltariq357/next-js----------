import React from "react";
import Image from "next/image";
import verserlPic from "../public/vercel.svg";
const Ver1 = () => {
  return (
    <>
      <div className="main">
        <div className="img">
          <Image alt="logo" src={verserlPic} width={80} height={80} />
        </div>
        <div className="div">
          <h1 className="h1">
            welcome to panaverse
          </h1>
          <h2 className="h2">
            Community of Web 3 and Metaverse Developers
          </h2>
          <button className="btn">
            leanr more
          </button>
        </div>
      </div>
    </>
  );
};

export default Ver1;
