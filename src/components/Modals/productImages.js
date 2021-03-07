import React from 'react';
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from './productModal';
const BorderImageUpload = ({
  title,
  containerID,
  dispatch,
  imgSrc,
  useReducerKey,
  setThirdContinueBtn
}) => {
  const loadFile = e => {
     if(!e.target.files.length) return;

     const reader = new FileReader();

     reader.onloadend = function() {
      dispatch({
        type: 'updateProductForm',
        payload: reader.result,
        field: useReducerKey
      });
    }
    reader.readAsDataURL(e.target.files[0]);

    if(useReducerKey === "main_image") return setThirdContinueBtn(true);
  };

  return (
    <label
      className="border-2 p-4 border-gray-200 
      border-dashed  w-32 cursor-pointer
      rounded-lg block  text-center 
       mr-3  "
    >
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="getFile"
        onChange={loadFile}
      />

      <div
        style={{ height: imgSrc ? '100px' : '0px'}}
        className={` "w-full h-1/4 m-0 rounded-full ${imgSrc ? 'visible' : 'invisible'} `}
      >   
        <img
          className={`object-cover w-full h-full`}
          id={containerID}
          src={imgSrc ? imgSrc : ''}
          alt={imgSrc ? 'product' : ''}
        />
      </div>
      {!imgSrc && <CameraSVG />}

      {!imgSrc && title}
    </label>
  );
};

const ProductImages = ({
  setThirdContinueBtn,
  setSteps,
  ProductsFormAndUpdater
}) => {
  const dispatch = ProductsFormAndUpdater[1];
  const { main_image } = ProductsFormAndUpdater[0];


  return (
    <>
      <div className="flex ">
        <div className="flex w-5/12 justify-center">
          <div className="divide-y divide-light-blue-400 w-full">
            <div className="text-xs pb-2">
              <BackArrowSVG setSteps={setSteps} value={2} />
              &nbsp;&nbsp;&nbsp;
              <FowardArrowSVG
                setSteps={setSteps}
                value={ main_image.length ? 4 : ""}
              />
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
              dispatch={dispatch}
              imgSrc={main_image}
              useReducerKey="main_image"
              setThirdContinueBtn={setThirdContinueBtn}
            />

            <div className="grid grid-cols-1 divide-y divide-grey-500">
              <div className="mt-8 "></div>
              <div className="mb-8"></div>
            </div>
            <div className="flex mt-5">
              {[
                'other_product_img_1',
                'other_product_img_2',
                'other_product_img_3'
              ].map((each, index) => (
                <BorderImageUpload
                  key={index}
                  title="Other Image"
                  dispatch={dispatch}
                  containerID={each}
                  imgSrc={ProductsFormAndUpdater[0][each]}
                  useReducerKey={each}
                />
              ))}
            </div>

            <div className="flex mt-5">
              {[
                'other_product_img_4',
                'other_product_img_5',
                'other_product_img_6'
              ].map((each, index) => (
                <BorderImageUpload
                  key={index}
                  title="Other Image"
                  dispatch={dispatch}
                  containerID={each}
                  imgSrc={ProductsFormAndUpdater[0][each]}
                  useReducerKey={each}
                  setThirdContinueBtn={setThirdContinueBtn}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
