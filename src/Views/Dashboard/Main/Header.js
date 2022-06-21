import React from 'react';
import Logo from 'components/Logo';
import { useComponentVisible } from 'hooks';
// import { Hamburger, CloseIcon } from 'svg';
import { navMenuItems, ticketNavMenuItems, foodNavMenuItems } from 'data';
import { useHistory } from 'react-router-dom';
import Container from 'components/Container';
import NavItem from './NavItem';
import Notifications from './Notifications';
import NotificationDetails from './NotificationDetails';
import User from './User';
import OptionsSelector from 'components/options-selector';

export const buttonStyles = (color) =>
  `hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl focus:outline-none`;

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const preferences = {
  Shopping: navMenuItems,
  Tickets: ticketNavMenuItems,
  Food: foodNavMenuItems,
};

function Header({ prefrence, setPrefrence, handleSettingsOpen }) {
  const history = useHistory();
  const {
    ref: notRef,
    isComponentVisible: notIsVisible,
    setIsComponentVisible: setNotIsVisible,
  } = useComponentVisible(false);

  const {
    ref: userRef,
    isComponentVisible: userIsVisible,
    setIsComponentVisible: setUserIsVisible,
  } = useComponentVisible(false);

  return (
    <header className="flex bg-white flex-col  md:pt-6   p-3 md:p-0  fixed top-0 z-50 w-full shadow-md">
      <Container>
        <NotificationDetails
          setNotIsVisible={setNotIsVisible}
          closeNav={closeNav}
        />
        <div className="flex tracking-wide justify-between items-center">
          <div className="flex lg:hidden">
            <Logo color="purple" text="SELLER" />
          </div>
          <div className="hidden lg:flex items-center">
            {/* <div className="mr-2 mb-1">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`block px-2 py-3 rounded-md ${buttonStyles()}`}>
                {!isMenuOpen ? (
                  <Hamburger scale={1} color="black" />
                ) : (
                  <CloseIcon />
                )}
              </button>
            </div> */}
            <Logo color="purple" text="SELLER CENTER" allowSub />
          </div>
          <div className="flex items-center md:pl-12">
            <OptionsSelector
              preference={
                localStorage.getItem('dashboard_view_preference')
                  ? JSON.parse(
                      localStorage.getItem('dashboard_view_preference')
                    )
                  : 'Shopping'
              }
              options={['Shopping', 'Tickets', 'Food']}
              cb={(text) => {
                setPrefrence(text);
                history.push(`/${text.toLowerCase()}`);
              }}
            />
            <div className="md:mr-5" />
            <Notifications
              notRef={notRef}
              setNotIsVisible={setNotIsVisible}
              notIsVisible={notIsVisible}
              openNav={openNav}
            />
            <User
              userRef={userRef}
              setUserIsVisible={setUserIsVisible}
              userIsVisible={userIsVisible}
              handleSettingsOpen={handleSettingsOpen}
              preference={prefrence}
              setPrefrence={setPrefrence}
            />
          </div>
        </div>
      </Container>
      <nav
        style={{
          color: 'white',
          backgroundColor: 'rgba(134, 97, 255, 1)',
        }}
        className="hidden md:flex items-center px-50 md:py-2  tracking-wide justify-center mt-6 ">
        <ul className="flex">
          {preferences[prefrence].map((item) => (
            <NavItem
              key={`${Math.random()}+${Date.now()}`}
              color={item.color}
              hasDropdown={item.hasDropdown}
              svg={<item.SVG scale={0.255319148936} color="white" />}
              url={item.url}
              dropDownLinks={item.dropdownLinks}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
