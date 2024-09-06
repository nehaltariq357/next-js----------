import Image from "next/image";
import Gradients from "./gradients/page";
import Ring from "./ring/page";
import Shadows from "./shadows/page";

export default function Home() {
  return (
    <>
      {/* <h1>home</h1> */}
      gradients
      <Gradients />
      rings
      <Ring/>
      shadows
      <Shadows/>
    </>
  );
}
