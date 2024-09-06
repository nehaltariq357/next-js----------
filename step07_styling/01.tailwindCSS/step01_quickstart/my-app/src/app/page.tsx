import Image from "next/image";
import verselPic from "../../public/vercel.svg"
import Var1 from "../app/ver1/page"
export default function Home() {
  return (
  <>
  {/* <h1>home</h1>
<br />
<div className="flex">
  <Image alt="verelPic" src={verselPic} width={80} height={80}></Image>
  <div>
      <h1>Welcome to Panaverse</h1>
      <h2>A Community of Web 3 and Metaverse Developers</h2>
      <button>Learn More</button>
    </div>
</div> */}
<Var1/>
  </>
  );
}


