import { useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default function ProfileSettings() {
  const [active, setActive] = useState('none');
  return (
    <div className='profile-settings flex bg-purple-200 min-h-screen md:bg-transparent'>
      <Sidebar setActive={setActive} active={active} />
      <MainContent active={active} setActive={setActive} />
    </div>
  );
}
