import { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default function ProfileSettings({ handleSettingsOpen }) {
  const [active, setActive] = useState('none');
  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'scroll';
    };
  }, []);
  return (
    <div className="flex bg-[#F1F0FF] bg-opacity-60  h-screen  fixed top-0 left-0 w-full z-50">
      <Sidebar
        setActive={setActive}
        active={active}
        handleSettingsOpen={handleSettingsOpen}
      />
      <MainContent active={active} setActive={setActive} />
    </div>
  );
}
