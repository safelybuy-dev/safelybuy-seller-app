import { CloseIcon } from 'svg';

export default function Container({ title, subtitle, children, setActive }) {
  return (
    <div className="bg-white flex flex-col md:min-h-[33.125rem]  rounded-3xl md:p-8  p-3">
      <div className="flex justify-between items-center w-full md:px-5">
        <div className="">
          <h3 className="text-lg  md;text-2xl font-semibold  tracking-[0.04em]">
            {title}
          </h3>
          <small className=" text-xs md:text-sm tracking-wider text-[#a7a7a7]">
            {subtitle}
          </small>
        </div>
        <div
          onClick={() => setActive('none')}
          className="text-gray-400 inline-block">
          <CloseIcon color="currentColor" />
        </div>
      </div>
      <div className="w-full md:w-[90%]">{children}</div>
    </div>
  );
}
