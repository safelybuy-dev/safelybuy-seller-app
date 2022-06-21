import React from 'react';

function Container({ children, topPadding, zIndex }) {
  return (
    <div
      style={{
        maxWidth: '1240px',
      }}
      className={`
        ${topPadding && !zIndex && 'md:pt-32 md:px-4 w-full mx-auto my-0 pt-0'}
            ${zIndex && 'md:pt-44 md:px-4 w-full mx-auto my-0 pt-0 z-20'}
           w-full md:px-4 mx-auto my-0 h-full lg:h-fit 
      `}>
      {children}
    </div>
  );
}

export default Container;
