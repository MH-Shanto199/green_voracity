import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex h-14 items-center px-11 justify-between shadow-md">
      <div className="flex justify-between items-center">
        <Image src="/favicon.png" alt="" width={30} height={15}></Image>
        <Link href="/" className="text-lg ml-1 font-bold green-voracity-text">
          GreenVoracity
        </Link>
      </div>
      <div className="nav-right">
        <Link href="/cart" className="p-2">
          Cart
        </Link>
        <Link href="/ligin" className="p-2">
          LogIn
        </Link>
      </div>
    </nav>
  );
}
