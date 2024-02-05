import Link from 'next/link';
import { FC } from 'react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { PiRobotBold } from 'react-icons/pi';
import { SiGooglehome } from 'react-icons/si';
import { RiSettingsFill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';

const Header: FC = () => {
  return (
    <header className=" flex h-12 items-center justify-between gap-[10px]">
      <button className="flex h-full min-w-12 items-center justify-center rounded-lg bg-white">
        <BiSolidCategoryAlt className="size-6" />
      </button>
      <div className="flex size-full items-center justify-start rounded-lg bg-white px-5">
        <Link href="/">
          <SiGooglehome size={24} />
        </Link>
        <div className="pl-3 text-xs text-gray-500 lg:text-sm">
          Chul&apos;s Blog
        </div>
      </div>
      <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
        <Link href="/posts">
          <PiRobotBold size={24} />
        </Link>
      </div>
      <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
        <Link href="/admin">
          <RiSettingsFill size={24} />
        </Link>
      </div>
      <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
        <Link href="/write">
          <BsFillPencilFill size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
