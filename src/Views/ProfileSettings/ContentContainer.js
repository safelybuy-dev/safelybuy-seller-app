import { CloseIcon } from 'svg';

export default function Container({ title, subtitle, children, setActive }) {
  return (
    <div className="bg-white flex flex-col   rounded-3xl md:p-8  p-3">
      <div className="flex justify-between items-center w-full md:px-5">
        <div className="">
          <h3 className="text-2xl font-semibold  tracking-[0.04em]">{title}</h3>
          <small className="text-sm tracking-wider text-[#a7a7a7]">
            {subtitle}
          </small>
        </div>
        <div
          onClick={() => setActive('none')}
          className="text-gray-400 hidden md:inline-block">
          <CloseIcon color="currentColor" />
        </div>
      </div>
      <div className="w-[90%]">{children}</div>
    </div>
  );
}
