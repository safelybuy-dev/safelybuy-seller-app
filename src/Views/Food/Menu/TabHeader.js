import React from 'react';
import { Active, Inactive, List } from 'svg';

function TabbedButton({ text, position = 1, active, svg, tag }) {
  return (
    <div
      className={`${
        position < 3 && '-ml-4'
      } relative rounded-tl-3xl rounded-tr-lg z-${position * 10}${
        active ? ' z-40' : ''
      }`}
      style={{ filter: 'drop-shadow(0 0 10px rgba(50, 50, 50, 0.15))' }}>
      <div
        className={`${
          !active
            ? 'bg-gradient-to-b text-purple-300 from-white to-gray-100'
            : 'bg-white text-purple-500'
        } cursor-pointer md:px-8 md:pr-20 flex items-center rounded-tl-3xl rounded-tr-lg py-3 px-3 pr-6`}
        style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}>
        <span className="inline-block md:mr-4 mr-2">{svg}</span>
        {text}
        <span
          className={`md:inline-block ml-3 px-2 py-1 text-xs ${
            !active ? 'bg-purple-100' : 'bg-purple-500 text-white'
          } rounded-full hidden`}>
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function TabHeader({
  active,
  setActive,
  activeLength,
  inactiveLength,
}) {
  return (
    <div className="flex overflow-x md:-mx-6">
      <div
        className="wrapper"
        onClick={() => {
          setActive('all');
        }}>
        <TabbedButton
          svg={
            <List
              color={`${
                active === 'all'
                  ? '#8661FF'
                  : 'rgba(196, 181, 253, var(--tw-text-opacity))'
              }`}
            />
          }
          text="All"
          position={3}
          active={active === 'all'}
          tag={activeLength + inactiveLength}
        />
      </div>
      <div
        className="wrapper"
        onClick={() => {
          setActive('Active');
        }}>
        <TabbedButton
          text="Active"
          position={2}
          active={active === 'Active'}
          svg={
            <Active
              color={`${
                active === 'Active'
                  ? '#8661FF'
                  : 'rgba(196, 181, 253, var(--tw-text-opacity))'
              }`}
            />
          }
          tag={activeLength}
        />
      </div>
      <div
        className="wrapper"
        onClick={() => {
          setActive('Inactive');
        }}>
        <TabbedButton
          text="Inactive"
          position={1}
          active={active === 'Inactive'}
          svg={
            <Inactive
              color={`${
                active === 'Inactive'
                  ? '#8661FF'
                  : 'rgba(196, 181, 253, var(--tw-text-opacity))'
              }`}
            />
          }
          tag={inactiveLength}
        />
      </div>
    </div>
  );
}
