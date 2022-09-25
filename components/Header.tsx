import React from 'react';
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img
          alt=""
          className="rounded-full h-20 w-20"
          src="https://i.imgur.com/4h7mAu7.png"
        />
        <div>
          <h1 className="text-lg text-white font-bold">ZAQUIEL DRAW</h1>
          <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
      </div>
      <div>
        <div className="bg-[#0A1F1C]">
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>

      <div>
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
