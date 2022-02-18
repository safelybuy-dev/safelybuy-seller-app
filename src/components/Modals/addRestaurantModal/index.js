import React, { useState, useReducer, useEffect } from "react";
import { CloseIcon, FowardSymbolSVG } from "svg";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Button from "components/Button";
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from "../addProductModal";
import axios from "axios";
import { baseUrl } from "api";
import moment from "moment";

const BorderImageUpload = ({
  title,
  containerID,
  dispatch,
  dispatchImage,
  imgSrc,
  useReducerKey,
  setMainImageUploaded,
}) => {
  const loadFile = (e) => {
    if (!e.target.files.length) return;

    const reader = new FileReader();

    reader.onloadend = function () {
      dispatch({
        type: "updateRestaurantState",
        payload: reader.result,
        field: useReducerKey,
      });

      dispatchImage({
        type: "updateImage",
        payload: e.target.files[0],
        field: useReducerKey,
      });
    };
    reader.readAsDataURL(e.target.files[0]);

    if (useReducerKey === "display_image") return setMainImageUploaded(true);
  };

  if (containerID === "cover-product-img") {
  }

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
        style={{ height: imgSrc ? "100px" : "0px" }}
        className={` "w-full h-1/4 m-0 rounded-full ${
          imgSrc ? "visible" : "invisible"
        } `}
      >
        <img
          className={`object-cover w-full h-full`}
          id={containerID}
          src={imgSrc ? imgSrc : ""}
          alt={imgSrc ? "product" : ""}
        />
      </div>
      {!imgSrc && <CameraSVG />}

      {!imgSrc && title}
    </label>
  );
};

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const initialState = {
  state_id: "",
  name: "",
  opening_time: "",
  closing_time: "",
  min_order_price: "",
  address: "",
  contact_email: "",
  display_image: "",
  contact_phone: "",
  time_to_deliver: "",
};

function restaurant_Reducer(state, action) {
  console.log(action);
  const { type, payload, field } = action;
  switch (type) {
    case "updateRestaurantState":
      return {
        ...state,
        [field]: payload,
      };
    default:
      return { ...state };
  }
}

const initialImageState = {
  restaurant_image: "",
};

const imageReducer = (state, action) => {
  console.log(action);
  const { payload, field, type } = action;
  switch (type) {
    case "updateImage":
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

const RestaurantModal = ({ openRestaurantModal, setRestaurantModal }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [restaurantStates, setRestaurantStates] = useState([]);
  const history = useHistory();
  const { addToast } = useToasts();
  const [mainImageUploaded, setMainImageUploaded] = useState(false);
  const [imageState, dispatchImage] = useReducer(
    imageReducer,
    initialImageState
  );
  const [eventData, dispatch] = useReducer(restaurant_Reducer, initialState);

  const {
    state_id,
    name,
    opening_time,
    closing_time,
    min_order_price,
    address,
    contact_email,
    display_image,
    contact_phone,
    time_to_deliver,
  } = eventData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      state_id: "",
      name: "",
      opening_time: "",
      closing_time: "",
      min_order_price: "",
      address: "",
      contact_email: "",
      contact_phone: "",
      time_to_deliver: "",
    },
  });

  const watchFields_Step1 = watch([
    "state_id",
    "name",
    "opening_time",
    "closing_time",
    "min_order_price",
  ]);

  const watchFields_Step2 = watch([
    "contact_email",
    "contact_phone",
    "time_to_deliver",
    "address",
  ]);

  const formValuesLength_1 = Object.values(watchFields_Step1)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;
  const formValuesLength_2 = Object.values(watchFields_Step2)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;
  const onSubmit = () => console.log("f");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/restuarants/locations/states`)
      .then((result) => setRestaurantStates(result.data.data))
      .catch((error) => console.error(error.message));
  }, []);
  if (!openRestaurantModal) return null;

  const handleRestaurantCreation = async () => {
    setLoading(true);

    const data = {
      state_id,
      name,
      opening_time,
      closing_time,
      min_order_price,
      address,
      contact_email,
      contact_phone,
      time_to_deliver,
    };

    try {
      const cloudinaryURl =
        "https://api.cloudinary.com/v1_1/hack-sc/image/upload";
      const body = new FormData();
      body.append("file", imageState.display_image);
      body.append("upload_preset", "events");

      const mainImageUrl = await axios.post(cloudinaryURl, body);

      data.display_image = mainImageUrl.data.secure_url;

      await axios({
        method: "post",
        url: `${baseUrl}/api/v1/restuarants/create`,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("safely_buy_token")}`,
        },
      });

      setLoading(false);
      history.push({
        pathname: "/success-error",
        state: {
          data: true,
        },
      });
    } catch (error) {
      let errorMessage;

      if (error.response) {
        const errors = Object.values(error.response.data.errors);
        errorMessage = errors.map((error) => error[0]).join("<br />");
      } else {
        errorMessage = error.message || "Something went wrong";
      }
      addToast(errorMessage, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div
      onClick={() => setRestaurantModal(null)}
      className="fixed overflow-y-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">
            {step === 4 ? "Review details" : "Create a restaurant"}
            {step === 4 && (
              <div onClick={() => setStep(3)} className="text-xs pb-2">
                <BackArrowSVG setSteps={setStep} value={3} />
                &nbsp;&nbsp; Go back
              </div>
            )}
          </h3>

          <div className="">
            {step === 1 &&
              (formValuesLength_1 > 1 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  canClick={true}
                  clickHandler={() => setStep(2)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : formValuesLength_1 !== 6 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}

            {step === 2 &&
              (formValuesLength_2 > 1 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  canClick={true}
                  clickHandler={() => setStep(3)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : formValuesLength_2 !== 4 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}
            {step === 3 &&
              (mainImageUploaded ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  canClick={true}
                  clickHandler={() => setStep(4)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : !mainImageUploaded ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}

            {step === 4 ? (
              <Button
                className="focus:outline-none"
                text="Submit"
                canClick={true}
                clickHandler={handleRestaurantCreation}
                roundedFull
                primary
                icon={<FowardSymbolSVG />}
              />
            ) : step === 4 && loading ? (
              <Button
                className="focus:outline-none"
                text="Submit"
                roundedFull
                disabled
                icon={<FowardSymbolSVG />}
              />
            ) : null}

            <span
              onClick={() => setRestaurantModal(null)}
              className="inline-block cursor-pointer rounded-full bg-red-500 p-3  absolute -right-8 -top-7"
            >
              <div>
                <CloseIcon color="white" />
              </div>
            </span>
          </div>
        </div>

        {step === 1 && (
          <>
            <div className="flex justify-between">
              <div className="flex w-5/12 justify-center">
                <div className="divide-y divide-light-blue-400 w-full">
                  <div className="text-xs pb-2">
                    &nbsp;&nbsp;&nbsp; 1{" "}
                    <span className="text-gray-400">/ 3</span>
                  </div>

                  <div>
                    <span className="text-safebuyColor mt-2 font-medium inline-block">
                      Display Information
                    </span>
                    <p>
                      {" "}
                      <small>
                        Enter the proper information as this section will be
                        displayed to the users.
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-6/12 justify-center">
                <>
                  <div className="flex">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col  md:max-w-7xl md:px-8"
                    >
                      <div className="text-left mr-2">
                        <label className="text-sm my-2" htmlFor="email">
                          Enter State
                        </label>
                        <div className="relative md:w-full mb-2 mt-2">
                          <select
                            className="border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                            {...register("state_id")}
                            onChange={(e) => {
                              dispatch({
                                type: "updateRestaurantState",
                                payload: e.target.value,
                                field: "state_id",
                              });
                            }}
                          >
                            <option value="" disabled>
                              select state
                            </option>
                            {restaurantStates.map((state) => (
                              <option value={state.id} key={state.id}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="Product_title">
                          Restaurant Name
                        </label>
                        <input
                          type="text"
                          {...register("title", {
                            required: true,
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "name",
                            });
                          }}
                          placeholder="Enter Restaurant Name"
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>

                      <div className="mt-2">
                        <label className="text-sm my-2" htmlFor="opening_time">
                          Opening Time
                        </label>
                        <input
                          type="time"
                          {...register("opening_time", {
                            required: "Required",
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "opening_time",
                            });
                          }}
                          placeholder="opening time"
                          className={`border border-black
                           w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>

                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="Product_title">
                          Closing Time
                        </label>
                        <input
                          type="time"
                          {...register("closing_time", {
                            required: "Required",
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "closing_time",
                            });
                          }}
                          placeholder="Closing time"
                          className={`border border-black
                           w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="Product_title">
                          Minimum Order Price
                        </label>
                        <input
                          type="number"
                          {...register("min_order_price", {
                            required: "Required",
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "min_order_price",
                            });
                          }}
                          placeholder="minimum order price"
                          className={`border border-black
                           w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                    </form>
                  </div>
                </>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex justify-between">
              <div className="flex w-5/12 justify-center">
                <div className="divide-y divide-light-blue-400 w-full">
                  <div className="text-xs pb-2">
                    &nbsp;&nbsp;&nbsp; 2{" "}
                    <span className="text-gray-400">/ 3</span>
                  </div>

                  <div>
                    <span className="text-safebuyColor mt-2 font-medium inline-block">
                      Display Information
                    </span>
                    <p>
                      {" "}
                      <small>
                        Enter the proper information as this section will be
                        displayed to the users.
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-6/12 justify-center">
                <>
                  <div className="flex">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col  md:max-w-7xl md:px-8"
                    >
                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="contact_email">
                          Contact Email
                        </label>
                        <input
                          type="text"
                          {...register("contact_email", {
                            required: true,
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "contact_email",
                            });
                          }}
                          placeholder="Email Address"
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="contact_phone">
                          Contact Phone
                        </label>
                        <input
                          type="number"
                          {...register("contact_phone", {
                            required: true,
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "contact_phone",
                            });
                          }}
                          placeholder="contact phone"
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                      <div className="text-left mr-2 mt-2">
                        <label className="text-sm my-2" htmlFor="Product_title">
                          Delivery Time
                        </label>
                        <input
                          type="text"
                          {...register("time_to_deliver", {
                            required: true,
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "time_to_deliver",
                            });
                          }}
                          placeholder="delivery time"
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                      <div className="mt-2">
                        <label className="text-sm my-2" htmlFor="address">
                          Address
                        </label>

                        <textarea
                          className={`border ${
                            errors.name ? "border-red" : "border-black"
                          } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                          rows="4"
                          cols="50"
                          placeholder="enter the address of the restaurant"
                          {...register("address", {
                            required: "Required",
                          })}
                          onChange={(e) => {
                            dispatch({
                              type: "updateRestaurantState",
                              payload: e.target.value,
                              field: "address",
                            });
                          }}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="flex justify-between">
              <div className="flex w-5/12 justify-center">
                <div className="divide-y divide-light-blue-400 w-full">
                  <div className="text-xs pb-2">
                    <BackArrowSVG setSteps={setStep} value={2} />
                    &nbsp;&nbsp;&nbsp;
                    <FowardArrowSVG
                      setSteps={setStep}
                      value={mainImageUploaded ? 4 : ""}
                      // value={main_event_ticket_image.length ? 4 : ""}
                    />
                    &nbsp;&nbsp;&nbsp; 3{" "}
                    <span className="text-gray-400">/ 3</span>
                  </div>

                  <div>
                    <span className="text-safebuyColor mt-2 font-medium inline-block">
                      Promotional Images
                    </span>
                    <p>
                      {" "}
                      <small>
                        Events or tickets without a main image will not appear
                        in the search or browse area unless added. Ensure the
                        images are clear, crisp, informative and appealing.
                        Follow the requirements below:
                      </small>
                    </p>

                    <ul className="list-disc mt-2 text-safebuyColor">
                      {[
                        "Preferred formats are; JPEG & TIFF",
                        "Products must fill 80% of the image.  It should only contain information about the specific event and nothing more, flyers or posters will do.",
                        "Main images should have a preferred dimension of 1200 by 600 pixels.",
                        "Images must be at least 1000 pixels and not more than 10,000 pixels.",
                      ].map((each, index) => (
                        <li key={index}>
                          <small className="text-black">{each}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex w-6/12 justify-center ">
                <div>
                  <BorderImageUpload
                    title="Cover Image"
                    containerID="cover-product-img"
                    dispatch={dispatch}
                    imgSrc={display_image}
                    useReducerKey="display_image"
                    setMainImageUploaded={setMainImageUploaded}
                    dispatchImage={dispatchImage}
                  />

                  <div className="grid grid-cols-1 divide-y divide-grey-500">
                    <div className="mt-8 "></div>
                    <div className="mb-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="flex md:mr-4 mr-0 flex-col md:flex-row">
            <div className="flex flex-col md:w-6/12 w-full">
              <div className="border-b border-gray-100 pb-4 w-full">
                <div className="md:w-64 w-24 rounded-xl md:h-32 h-24 bg-gray-200">
                  <img
                    src={display_image}
                    className={`object-cover w-full h-full`}
                    alt="Restaurant"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-6/12 ml-4 w-full">
              <div className="flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4">
                <h4 className="text-xl text-purple-500">Display Information</h4>
                <div className="flex mt-6 flex-col">
                  <div className="flex justify-between w-full">
                    <KeyValue title="Restaurant Name" value={name} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Address" value={address} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Opening Time"
                      value={moment(opening_time, "LT").format("HH:mm a")}
                    />
                    <KeyValue
                      title="Closing Time"
                      value={moment(closing_time, "LT").format("HH:mm a")}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Minimum Order Price"
                      value={`₦${min_order_price}`}
                    />
                    <KeyValue title="Delivery Time" value={time_to_deliver} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Contact Email" value={contact_email} />
                    <KeyValue title="Contact Phone" value={contact_phone} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue title="State" value={state_id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantModal;
