import { useCallback, useState } from 'react';
import ContactList from './ContactList';
import Search from './Search';

function Contacts({ contacts, handleContactSelection }) {
  const [searchText, setSearchText] = useState('');
  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  return (
    <div className="flex-[0.4] border-r border-[#E0E0E0] ">
      <div className="flex justify-center">
        <Search searchText={searchText} handleChange={handleChange} />
      </div>
      <ContactList
        contacts={contacts}
        handleContactSelection={handleContactSelection}
      />
    </div>
  );
}

export default Contacts;
