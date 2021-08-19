import { useContext } from 'react';
import { AngleRight, CloseIcon, UserAvatar } from 'svg';
import { Link, useHistory } from 'react-router-dom';
import { ContextUser } from 'context';

const SidebarLink = ({
  title,
  subtitle,
  icon,
  activeText,
  setActive,
  middle,
  active,
}) => (
  <div
    onClick={() => setActive(activeText)}
    className={`flex cursor-pointer ${middle ? 'my-6 md:my-4' : 'my-3 md:my-2'}`}
  >
    {icon}
    <div className='ml-5 md:ml-3'>
      <h4
        className={`${active === activeText ? 'text-purple-600 ' : ''}'-mt-1'`}
      >
        {title}
      </h4>
      <small className='text-sm tracking-wider text-gray-400'>{subtitle}</small>
    </div>
  </div>
);

export default function Sidebar({ setActive, active }) {
  const [{ user, loadingUser }] = useContext(ContextUser);
  const history = useHistory();
  return (
    <div className='bg-white w-100 h-screen fixed shadow-inner overflow-y-scroll md:w-full md:relative'>
      <div className='flex pt-8 px-12 justify-between items-center md:pt-4 md:px-6'>
        <h3 className='text-2xl font-medium text-purple-600'>
          Profile Settings
        </h3>
        <Link to='/shopping' className='text-gray-400'>
          <CloseIcon color='currentColor' />
        </Link>
      </div>
      <div
        onClick={() => setActive('personal')}
        className='flex w-full px-12 py-8 items-center cursor-pointer md:pt-4 md:px-6'
      >
        <div className='avatar p-2 bg-white rounded-full shadow-2xl md:py-1'>
          <UserAvatar scale={2.6} />
        </div>
        <div className='avatar flex justify-between items-center bg-white rounded-full shadow-2xl px-6 py-3 ml-4 leading-none flex-1 md:px-3 md:py-2'>
          <div>
            {loadingUser ? (
              '•••'
            ) : (
              <h4 className={active === 'personal' ? 'text-purple-400' : ''}>
                {user.firstname} {user.lastname}
              </h4>
            )}
            <small className='uppercase text-xs tracking-widest text-gray-400'>
              Seller
            </small>
          </div>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M17.3332 15.6666V9.83329H15.6665V15.6666H2.33317V2.33329H8.1665V0.666626H2.33317C1.4127 0.666626 0.666504 1.41282 0.666504 2.33329V15.6666C0.666504 16.5871 1.4127 17.3333 2.33317 17.3333H15.6665C16.587 17.3333 17.3332 16.5871 17.3332 15.6666ZM14.9816 1.26948C14.5996 0.884476 14.0766 0.666626 13.531 0.666626C12.986 0.666626 12.4635 0.883984 12.0793 1.27048L5.10525 8.24448C4.48206 8.79357 4.07354 9.61066 4.00254 10.4894L3.99984 13.1686V14.0019H7.44534C8.39059 13.9371 9.21569 13.5245 9.79776 12.8531L16.7323 5.92149C17.1171 5.53676 17.3332 5.01495 17.3332 4.47086C17.3332 3.92677 17.1171 3.40496 16.7323 3.02023L14.9816 1.26948ZM7.38649 12.3373C7.83168 12.3058 8.24608 12.0986 8.57883 11.718L13.6304 6.6664L11.3352 4.37102L6.24659 9.45795C5.90896 9.75656 5.70009 10.1743 5.6665 10.5565V12.3357L7.38649 12.3373ZM12.5139 3.1927L14.8089 5.48788L15.5538 4.74298C15.626 4.67081 15.6665 4.57292 15.6665 4.47086C15.6665 4.36879 15.626 4.27091 15.5538 4.19874L13.8008 2.44567C13.7294 2.37375 13.6323 2.33329 13.531 2.33329C13.4296 2.33329 13.3325 2.37375 13.2611 2.44567L12.5139 3.1927Z'
              fill='#7C3AED'
            />
          </svg>
        </div>
      </div>
      <div className='flex-col border-t-2 border-b-2 border-gray-200 pl-12 mr-12 py-8 md:pl-6 md:mr-6 md:py-4'>
        {/* Profile information  */}
        <SidebarLink
          title='Edit Business Information'
          subtitle='Details about your business'
          icon={
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 3.33329V2.73329C1.71399 2.73329 1.46774 2.93517 1.41165 3.21562L2 3.33329ZM18 3.33329L18.5883 3.21562C18.5323 2.93517 18.286 2.73329 18 2.73329V3.33329ZM19.3333 9.99996V10.6C19.5131 10.6 19.6834 10.5194 19.7973 10.3804C19.9113 10.2413 19.9569 10.0586 19.9217 9.88229L19.3333 9.99996ZM0.666667 9.99996L0.0783183 9.88229C0.0430652 10.0586 0.0886981 10.2413 0.202661 10.3804C0.316625 10.5194 0.486911 10.6 0.666667 10.6V9.99996ZM4.66667 14H4.06667V14.6H4.66667V14ZM15.3333 14V14.6H15.9333V14H15.3333ZM0 19.9333H20V18.7333H0V19.9333ZM1.4 9.99996V19.3333H2.6V9.99996H1.4ZM17.4 9.99996V19.3333H18.6V9.99996H17.4ZM2 3.93329H18V2.73329H2V3.93329ZM17.4117 3.45096L18.745 10.1176L19.9217 9.88229L18.5883 3.21562L17.4117 3.45096ZM19.3333 9.39996H0.666667V10.6H19.3333V9.39996ZM1.25502 10.1176L2.58835 3.45096L1.41165 3.21562L0.0783183 9.88229L1.25502 10.1176ZM1.33333 1.26663H18.6667V0.066626H1.33333V1.26663ZM4.06667 9.99996V14H5.26667V9.99996H4.06667ZM4.66667 14.6H15.3333V13.4H4.66667V14.6ZM15.9333 14V9.99996H14.7333V14H15.9333Z'
                fill='black'
              />
            </svg>
          }
          active={active}
          setActive={setActive}
          activeText='business'
        />
        <SidebarLink
          title='Change Password'
          subtitle='Change your account password for safety'
          icon={
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.6665 11.3333V9.99996C16.6665 9.26358 16.0695 8.66663 15.3332 8.66663H1.99984C1.26346 8.66663 0.666504 9.26358 0.666504 9.99996V18C0.666504 18.7363 1.26346 19.3333 1.99984 19.3333H15.3332C16.0695 19.3333 16.6665 18.7363 16.6665 18V16.6666M16.6665 11.3333H11.3332C9.86041 11.3333 8.6665 12.5272 8.6665 14C8.6665 15.4727 9.86041 16.6666 11.3332 16.6666H16.6665M16.6665 11.3333C18.1393 11.3333 19.3332 12.5272 19.3332 14C19.3332 15.4727 18.1393 16.6666 16.6665 16.6666M4.6665 8.66663V4.66663C4.6665 2.45749 6.45736 0.666626 8.6665 0.666626C10.8756 0.666626 12.6665 2.45749 12.6665 4.66663V8.66663M15.9998 14H17.3332M13.3332 14H14.6665M10.6665 14H11.9998'
                stroke='black'
                strokeWidth='1.2'
              />
            </svg>
          }
          setActive={setActive}
          middle
          active={active}
          activeText='password'
        />
        <SidebarLink
          title='Bank Details'
          subtitle='Details about the bank registered for withdrawals'
          icon={
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.666504 4.66667L0.666504 16.6667C0.666504 17.403 1.26346 18 1.99984 18L17.9998 18C18.7362 18 19.3332 17.403 19.3332 16.6667V6C19.3332 5.26362 18.7362 4.66667 17.9998 4.66667L3.99984 4.66667M0.666504 4.66667V3.33333C0.666504 2.59695 1.26346 2 1.99984 2H12.6665C13.4029 2 13.9998 2.59695 13.9998 3.33333V4.66667L3.99984 4.66667M0.666504 4.66667L3.99984 4.66667M11.9998 12.6667H15.9998'
                stroke='black'
                strokeWidth='1.2'
              />
            </svg>
          }
          setActive={setActive}
          middle
          activeText='bank'
          active={active}
        />
      </div>
      <div className='flex-col px-12 py-8'>
        {/* Help and Logout  */}
        <div className='flex my-3 w-full justify-between items-center'>
          <div className='flex'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.6665 16.6666C18.1393 16.6666 19.3332 15.4727 19.3332 14V11.3333C19.3332 9.86053 18.1393 8.66663 16.6665 8.66663C15.9301 8.66663 15.3332 9.26358 15.3332 9.99996V15.3333C15.3332 16.0697 15.9301 16.6666 16.6665 16.6666ZM16.6665 16.6666C16.6665 18.1394 15.4726 19.3333 13.9998 19.3333H10.6665M19.3332 13.3333V9.99996C19.3332 4.8453 15.1545 0.666626 9.99984 0.666626C4.84518 0.666626 0.666504 4.8453 0.666504 9.99996V13.3333M3.33317 16.6666C4.06955 16.6666 4.6665 16.0697 4.6665 15.3333V9.99996C4.6665 9.26358 4.06955 8.66663 3.33317 8.66663C1.86041 8.66663 0.666504 9.86053 0.666504 11.3333V14C0.666504 15.4727 1.86041 16.6666 3.33317 16.6666Z'
                stroke='black'
                strokeWidth='1.2'
              />
            </svg>
            <div className='ml-5'>
              <h4 className='-mt-1'>Help & Support</h4>
              <small className='text-sm tracking-wider text-gray-400'>
                Having issues? Send us a message
              </small>
            </div>
          </div>
          <AngleRight scale={2} />
        </div>
        <div className='flex my-6'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17 9L13 13.3333M17 9L13 5M17 9L4.33333 9M9.66667 17L1 17L1 1L9.66667 1'
              stroke='#EB5757'
              strokeWidth='1.2'
            />
          </svg>

          <div
            onClick={(e) => {
              localStorage.removeItem('safely_buy_token');
              history.push('/login');
            }}
            className='ml-5 cursor-pointer'
          >
            <h4 className='-mt-1'>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
