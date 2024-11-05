
 

 import Link from "next/link";
 import Image from 'next/image';
import { comment } from "postcss";
const Footer = () => {
  return(

<div id="section_Footer" className="grid-flow-row justify-center text-center " >
  <div className="text-center grid-rows-3 py-4">
<img src="/zia pic.png" className="h-20 w-20 rounded-full"></img>
<ul className="">
  <li className=""><Link href="/map logo.png "  className="h-11 w-11 rounded-3xl hover:bg-green-400" ><img src="/map logo.png" className="h-11 w-11 rounded-3xl"></img> Google Map</Link></li>
  <li><Link href="/facebook logo.png "  className="h-11 w-11 rounded-3xl hover:bg-green-400" ><img src="/facebook logo.png"></img>Facebook </Link></li>
  <li><Link href="/logo_twitter.png "  className="h-11 w-11 rounded-3xl hover:bg-green-400" ><img src="/Logo_twitter.png"></img> Twitter</Link></li>

</ul>
<h1>M Asif Zia</h1>
<p>Copy rights @ 2024 as Govt laws</p>


</div>

</div>

  )
}
export default Footer


