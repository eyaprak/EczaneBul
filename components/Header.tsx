import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.png";

export default function Header() {
  return (
    <div className="w-full border-b border-primary shadow-sm">
      <div className="container py-4 flex justify-between items-center bg-white">
        <Link href="/">
          <Image src={Logo} width={180} alt="EczaneBul Logo" quality={100} />
        </Link>
        <nav>
          <ul className="font-primary space-x-4 flex items-center text-gray-600">
            <li>
              <Link href="/" className="link">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="#how-app-works" className="link">
                Nasıl Çalışır?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
