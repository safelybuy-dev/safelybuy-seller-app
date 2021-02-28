import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from './productModal';
const BorderImageUpload = ({ title, containerID,  dispatch }) => {
  const [imgSrc, setImageSrc] = useState('');
  const loadFile = e => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
    dispatch({
      type: "updateProductForm",
      payload: URL.createObjectURL(e.target.files[0]),
      field: "main_image"
    });
    const output = document.getElementById(containerID);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };

  return (
    <label
      className="border-2
                      p-4
                      border-gray-200 
                      border-dashed 
                      w-32 
                      cursor-pointer
                      rounded-lg block
                      text-center 
                      mr-3
                      "
    >
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="getFile"
        onChange={loadFile}
      />

      <div 
      style={{
        height : imgSrc ? "100px" : '0px'
      }}
        className="w-full h-1/4 m-0 rounded-full">
        <img
           className="object-cover w-full h-full"
          id={containerID}
          src={imgSrc ? imgSrc : ''}
          alt={imgSrc ? 'product' : ''}
        />
      </div>
      {!imgSrc && <CameraSVG />}

      {title}
    </label>
  );
};

const ProductImages = ({
  setThirdContinueBtn,
  setSteps,
  ProductsFormAndUpdater
}) => {


  const dispatch = ProductsFormAndUpdater[1];


  const fieldValues = [
    {
      title: 'Seller SKU',
      name: 'seller_sku',
      placeholder: 'Ex. SBD-123',
      isNumOnly: false
    },
    {
      title: 'Quantity',
      name: 'quantity',
      placeholder: 'Ex. 4',
      isNumOnly: true
    }
  ];

  // const watchFields = watch([...fieldValues.map(e => e.name), "price"]);

  // useEffect(() => {
  //   if (
  //     Object.values(watchFields)
  //       .filter(Boolean)
  //       .filter(e => e.trim().length).length === 3
  //   ) {
  //     setThirdContinueBtn(true);
  //   } else {
  //     setThirdContinueBtn(false);
  //   }
  //   return () => {};
  // }, [setThirdContinueBtn, watchFields]);
  return (
    <>
      <div className="flex ">
        <div className="flex w-5/12 justify-center">
          <div className="divide-y divide-light-blue-400 w-full">
            <div className="text-xs pb-2">
              <BackArrowSVG setSteps={setSteps} value={2} />
              &nbsp;&nbsp;&nbsp;
              <svg
                className="inline-flex cursor-pointer"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.72326 5.99999L0.861328 1.13806L1.80414 0.195251L7.60888 5.99999L1.80414 11.8047L0.861328 10.8619L5.72326 5.99999Z"
                  fill="#A7A7A7"
                />
              </svg>
              &nbsp;&nbsp;&nbsp; 3 <span className="text-gray-400">/ 4</span>
            </div>

            <div>
              <span className="text-safebuyColor mt-2 font-medium inline-block">
                Product Images
              </span>
              <p>
                {' '}
                <small>
                  Products without a main image will not appear in the search or
                  browse area unless added. Ensure the images are clear, crisp,
                  informative and appealing. Follow the requirements below:
                </small>
              </p>

              <ul className="list-disc mt-2 text-safebuyColor">
                {[
                  'Preferred formats are; JPEG & TIFF',
                  'Products must fill 80% of the image.  It should only contain the product for sale; no logos, watermarks or props. The only text contained in the image should only be about the product.',
                  'Main images must have a pure white or very soft grey background, must be a photo (not a drawing) and must not contain excluded accessories.',
                  'Images must be at least 1000 pixels and not more than 10,000 pixels.'
                ].map((each, index) => (
                  <li key={index}>
                    <small className="text-black">{each}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-7/12 justify-center ">
          <div>
            <BorderImageUpload
              title="Main Image"
              containerID="main-product-img"
               dispatch={ dispatch}
            />

            <div className="grid grid-cols-1 divide-y divide-grey-500">
              <div className="mt-8 "></div>
              <div className="mb-8"></div>
            </div>
            <div className="flex mt-5">
              <BorderImageUpload title="Other Image" />
              <BorderImageUpload title="Other Image" />
              <BorderImageUpload title="Other Image" />
            </div>

            <div className="flex mt-5">
              <BorderImageUpload title="Other Image" />
              <BorderImageUpload title="Other Image" />
              <BorderImageUpload title="Other Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
