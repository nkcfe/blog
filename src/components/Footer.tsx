import Link from 'next/link';
import { FC } from 'react';
import { RiSettingsFill } from 'react-icons/ri';
import { TbMoodEdit } from 'react-icons/tb';

const Footer: FC = () => {
  return (
    <footer className="flex justify-between border-t p-4 font-medium">
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="pr-1 text-sm lg:pr-2 lg:text-base">ABOUT</div>
        <div className="text-xs text-gray-500 lg:text-sm">
          프론트엔드 엔지니어
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="pr-1 text-sm lg:pr-2 lg:text-base">ADMIN</div>
        <Link href="/admin">
          <RiSettingsFill />
        </Link>
        <Link href="/write">
          <TbMoodEdit />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
