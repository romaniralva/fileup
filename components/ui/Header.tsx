import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5 text-white">
      <Link href="/">FileUp</Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/myfile"
            className="text-base cursor-pointer capitalize"
          >
            My File
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
