import React from 'react';

const ImageSlide = ({ images }) => {
  return (
    <div className="flex">
      {images.map(
        (image, index) =>
          index <= 1 && (
            <img
              src={image}
              alt="Pexels Copyright"
              key={Math.random() * Date.now()}
              className="h-14 w-14 object-cover  rounded-sm -ml-4 border-2 border-gray-100"
            />
          )
      )}
      {images.length > 2 && (
        <div className="bg-gray-300 text-gray-50 h-14 w-14 flex justify-center items-center rounded-sm -ml-4 ">
          +{images.length - 2}
        </div>
      )}
    </div>
  );
};

export default ImageSlide;
