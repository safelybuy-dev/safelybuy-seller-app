import { useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default function ProfileSettings() {
  const [active, setActive] = useState('personal');
  return (
    <div className='profile-settings flex bg-purple-200 min-h-screen'>
      <Sidebar setActive={setActive} active={active} />
      <MainContent active={active} />
    </div>
  );
}
