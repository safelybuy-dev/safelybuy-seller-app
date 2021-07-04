import { CloseIcon } from 'svg';

export default function Container({ title, subtitle, children }) {
  return (
    <div className='bg-white flex flex-col ml-104 my-12 rounded-3xl p-8'>
      <div className='flex justify-between items-center w-full'>
        <div className=''>
          <h3 className='text-xl font-medium tracking-wide'>{title}</h3>
          <small className='text-sm tracking-wider text-gray-400'>
            {subtitle}
          </small>
        </div>
        <div className='text-gray-400'>
          <CloseIcon color='currentColor' />
        </div>
      </div>
      {children}
    </div>
  );
}
