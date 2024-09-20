
import Link from "next/link"

export default function Home() {
  return (
    <div 
    className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black">
    <p> Hello world</p>
    <Link href='/blog'>Blog</Link>
    <Link href="products">Products</Link>
    </div>
  );
}
