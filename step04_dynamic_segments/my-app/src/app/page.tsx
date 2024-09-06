import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>home</h1>
<br />
   <Link href="/nehal">go to nehal page</Link>
<br />
   <Link href="/hamza">go to hamza page</Link>
   <br />
   <Link href="/kashif">go to kashi page</Link>

   <br />
   you can also create a dynamic page by entering this URL in the browser:  http://localhost:3000/xyz
   </>
  );
}
