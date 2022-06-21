import React from 'react';
import { Link } from 'react-router-dom';
import { SafelyBuyLogo } from 'svg';

export default function Logo({ text, color, allowSub }) {
  return (
    <Link to="/">
      <div className="flex items-center">
        <div className="lg:hidden inline-block">
          <SafelyBuyLogo scale={0.5} />
        </div>
        <div className="hidden lg:block">
          <SafelyBuyLogo />
        </div>
        <div
          className={`bg-${
            color === 'black' ? 'black' : `${color}-500`
          } md:h-12 h-8 w-px border-0 md:mx-6 mx-3 ${
            !allowSub ? 'md:hidden' : ''
          }`}
        />
        <div
          className={`uppercase md:text-sm text-xs ${
            !allowSub ? 'md:hidden' : ''
          } text-${color === 'black' ? 'black' : `${color}-500`}`}>
          {text} <span className="hidden md:inline">Center</span>
        </div>
      </div>
    </Link>
  );
}
