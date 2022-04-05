import React from 'react';
import { SafelyBuyLogo } from 'svg';

export default function Logo({ text, color, allowSub }) {
  return (
    <div className="flex items-center">
      <div className="md:hidden inline-block">
        <SafelyBuyLogo scale={0.625} />
      </div>
      <div className="hidden md:block">
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
        {text}
      </div>
    </div>
  );
}
