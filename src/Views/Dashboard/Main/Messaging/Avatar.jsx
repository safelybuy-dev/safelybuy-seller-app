export const Avatar = ({ image, status, styles }) => {
  return (
    <div className="relative inline-block">
      <img
        src={image}
        alt="User Avatar"
        className={`
         rounded-full ${styles}
        `}
      />
      {status && (
        <span
          className={`h-[0.625rem] w-[0.625rem] border rounded-full bottom-[35%] right-0 border-white absolute  ${
            status === 'online' ? 'bg-[#4BBF75]' : 'bg-gray-400'
          }  `}
        />
      )}
    </div>
  );
};
