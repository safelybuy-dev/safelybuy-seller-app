import React, { useState, useReducer, useEffect } from "react";
import { CloseIcon, FowardSymbolSVG } from "svg";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Button from "components/Button";
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from "../addProductModal";
import axios from "axios";
import { baseUrl } from "api";
import DayButton from "components/DayButton";

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
        type: "updateState",
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

function restaurant_Reducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case "updateState":
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

const RestaurantMenuModal = ({
  setRestaurantMenuModal,
  isEdit,
  currentItem,
  setEdit,
}) => {
  const initialState = {
    display_image: isEdit ? currentItem.main_image : "",
    category: "",
    title: isEdit ? currentItem.name : "",
    sku: isEdit ? currentItem.sku : "",
    price: isEdit ? currentItem.cost : "",
    availability: isEdit ? currentItem.available_days : [],
    state_id: isEdit ? currentItem.state.id : "",
    city: isEdit ? currentItem.city : "",
  };
  const [restaurantStates, setRestaurantStates] = useState([]);
  const [step, setStep] = useState(isEdit ? 2 : 1);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState({
    monday: isEdit
      ? currentItem.available_days.find((day) => day === "monday")
      : "",
    tuesday: isEdit
      ? currentItem.available_days.find((day) => day === "tuesday")
      : "",
    wednesday: isEdit
      ? currentItem.available_days.find((day) => day === "wednesday")
      : "",
    thursday: isEdit
      ? currentItem.available_days.find((day) => day === "thursday")
      : "",
    friday: isEdit
      ? currentItem.available_days.find((day) => day === "friday")
      : "",
    saturday: isEdit
      ? currentItem.available_days.find((day) => day === "saturday")
      : "",
  });
  const history = useHistory();
  const { addToast } = useToasts();
  const [mainImageUploaded, setMainImageUploaded] = useState(false);
  const [imageState, dispatchImage] = useReducer(
    imageReducer,
    initialImageState
  );
  const [eventData, dispatch] = useReducer(restaurant_Reducer, initialState);

  const {
    title,
    sku,
    price,
    state_id,
    city,
    display_image,
    availability,
    category,
  } = eventData;

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {},
  });
  const watchFields_Step1 = watch([
    "title",
    "sku",
    "price",
    "state_id",
    "city",
  ]);

  const formValuesLength_1 = Object.values(watchFields_Step1)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/restuarants/locations/states`)
      .then((result) => setRestaurantStates(result.data.data))
      .catch((error) => console.error(error.message));
  }, []);

  const onSubmit = () => console.log("f");

  const handleDays = (state, day) => {
    let newAvailability;
    if (!state) {
      newAvailability = [...availability, day.toLowerCase()];
    } else {
      setDays({ ...days, [state]: "" });
      newAvailability = availability.filter((days) => days !== day);
    }
    dispatch({
      type: "updateState",
      payload: newAvailability,
      field: "availability",
    });
  };

  const handleRestaurantCreation = async () => {
    const data = {
      state_id,
      city,
      name: title,
      sku,
      cost: price,
      available_days: availability,
    };

    if (isEdit) {
      data.id = currentItem.id;
    }
    try {
      if (imageState.display_image) {
        const cloudinaryURl =
          "https://api.cloudinary.com/v1_1/hack-sc/image/upload";
        const body = new FormData();
        body.append("file", imageState.display_image);
        body.append("upload_preset", "events");

        const mainImageUrl = await axios.post(cloudinaryURl, body);

        data.main_image = mainImageUrl.data.secure_url;
      } else {
        data.main_image = display_image;
      }

      await axios({
        method: "post",
        url: `${baseUrl}/api/v1/meal-plans/seller/${
          isEdit ? "update" : "create"
        }`,
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
          mealPlan: true,
          path: "/food/meal-plan",
          isEdit,
        },
      });
    } catch (error) {
      let errorMessage;

      if (error.response && error.response.data.errors) {
        const errors = Object.values(error.response.data.errors);
        errorMessage = errors.map((error) => error[0]).join("\n");
      } else {
        errorMessage =
          error.response.data.message ||
          error.message ||
          "Something went wrong";
      }
      addToast(errorMessage, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div
      onClick={() => {
        setEdit(false);
        setRestaurantMenuModal(false);
      }}
      className="fixed overflow-scroll md:overflow-hidden md:overflow-y-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">
            {step === 4 ? "Review meal" : "Add a food"}
            {step === 4 && (
              <div onClick={() => setStep(3)} className="text-xs pb-2">
                <BackArrowSVG setSteps={setStep} value={3} />
                &nbsp;&nbsp; Go back
              </div>
            )}
          </h3>

          <div className="">
            {step === 1 &&
              (category ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  canClick={true}
                  clickHandler={() => setStep(2)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : !category ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}
            {step === 2 &&
              ((formValuesLength_1 === 5 || formValuesLength_1 === 4) &&
              availability.length > 0 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  canClick={true}
                  clickHandler={() => setStep(3)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : formValuesLength_1 !== 5 || formValuesLength_1 !== 4 ? (
                <Button
                  className="focus:outline-none"
                  text="Continue"
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}
            {step === 3 &&
              (mainImageUploaded || isEdit ? (
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
              onClick={() => {
                setEdit(false);
                setRestaurantMenuModal(false);
              }}
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
            <div className="flex-col">
              <div className="flex w-full justify-center">
                <div className="divide-y divide-light-blue-400 w-full">
                  <div className="text-xs pb-2">
                    {category && (
                      <FowardArrowSVG setSteps={setStep} value={2} />
                    )}
                    &nbsp;&nbsp;&nbsp; 1{" "}
                    <span className="text-gray-400">/ 3</span>
                  </div>

                  <div>
                    <span className="text-safebuyColor text-[22px] mt-2 font-medium block">
                      Select category
                    </span>
                    <p>
                      {" "}
                      <small>
                        Pick a category listed below, after completing this
                        process your product will be reviewed.
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-6/12  mt-10">
                <>
                  <div className="flex">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col  md:max-w-7xl md:px-8"
                    >
                      <div>
                        <h3 className="mb-5 text-[18px] tracking-[0.06em]">
                          Category
                        </h3>
                        <div className="mb-4 flex justify-center items-center">
                          <input
                            type="radio"
                            name="category"
                            id="category1"
                            className="mr-2"
                            value="Meal Plan"
                            onChange={(e) => {
                              dispatch({
                                type: "updateState",
                                payload: e.target.value,
                                field: e.target.name,
                              });
                            }}
                          />
                          <label
                            className={`text-[#828282]`}
                            htmlFor="category1"
                          >
                            Meal plan
                          </label>
                        </div>
                        <div className="mb-4 flex justify-center items-center">
                          <input
                            type="radio"
                            name="category"
                            id="category2"
                            className="mr-2"
                            value="Restaurant"
                            onChange={(e) => {
                              dispatch({
                                type: "updateState",
                                payload: e.target.value,
                                field: e.target.name,
                              });
                            }}
                          />
                          <label
                            className={`text-[#828282]`}
                            htmlFor="category2"
                          >
                            Restaurant
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex w-5/12 justify-center mb-6 md:mb-0">
              <div className="divide-y divide-light-blue-400 w-full">
                <div className="text-xs pb-2">
                  <BackArrowSVG setSteps={setStep} value={1} />
                  &nbsp;&nbsp;&nbsp;
                  {(formValuesLength_1 === 5 || formValuesLength_1 === 4) &&
                    availability.length > 0 && (
                      <FowardArrowSVG setSteps={setStep} value={3} />
                    )}
                  &nbsp;&nbsp;&nbsp; 2{" "}
                  <span className="text-gray-400">/ 3</span>
                </div>

                <div>
                  <span className="text-safebuyColor text-[22px] mt-2 font-medium inline-block">
                    Title and Details
                  </span>
                  <p>
                    {" "}
                    <small className="tracking-[0.06em]">
                      Enter a display title for your product as well as other
                      vital information.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-6/12 justify-center">
              <>
                <div className="flex w-full">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col  w-full md:px-8"
                  >
                    <div className="text-left mr-2 mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="title">
                        Food Title
                      </label>
                      <input
                        type="text"
                        {...register("title")}
                        value={title}
                        onChange={(e) => {
                          dispatch({
                            type: "updateState",
                            payload: e.target.value,
                            field: "title",
                          });
                        }}
                        placeholder="Ex. Yamarita & sauce"
                        className={`border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    </div>

                    <div className="mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="sku">
                        Food SKU
                      </label>

                      <input
                        type="text"
                        {...register("sku")}
                        value={sku}
                        onChange={(e) => {
                          dispatch({
                            type: "updateState",
                            payload: e.target.value,
                            field: "sku",
                          });
                        }}
                        placeholder="Ex. SB-#2123434343"
                        className={`border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    </div>
                    <div className="text-left mr-2 mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="price">
                        Food Price
                      </label>
                      <input
                        type="number"
                        {...register("price")}
                        value={price}
                        onChange={(e) => {
                          dispatch({
                            type: "updateState",
                            payload: e.target.value,
                            field: "price",
                          });
                        }}
                        placeholder="Ex. 5,500NGN"
                        className={`border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    </div>
                    <div className="text-left mr-2 mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="availability">
                        Food Availablity
                      </label>
                      <div
                        className="border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-xl px-6 py-2 focus:outline-none focus:shadow-xl h-[90px]"
                      >
                        {[
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                          "saturday",
                        ].map((day) => (
                          <DayButton
                            day={day}
                            key={day}
                            days={days}
                            setDays={setDays}
                            handleDays={handleDays}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-left mr-2 mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="state">
                        State
                      </label>
                      <select
                        {...register("state_id")}
                        value={state_id}
                        onChange={(e) => {
                          dispatch({
                            type: "updateState",
                            payload: e.target.value,
                            field: "state_id",
                          });
                        }}
                        className={`border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      >
                        <option value="">select state</option>
                        {restaurantStates.map((state) => (
                          <option key={state.id} value={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-left mr-2 mt-2 mb-2">
                      <label className="text-sm my-2" htmlFor="city">
                        City
                      </label>
                      <input
                        type="text"
                        {...register("city")}
                        value={city}
                        onChange={(e) => {
                          dispatch({
                            type: "updateState",
                            payload: e.target.value,
                            field: "city",
                          });
                        }}
                        placeholder="Ex. Lekki"
                        className={`border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    </div>
                  </form>
                </div>
              </>
            </div>
          </div>
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
                    <p className="py-4">
                      {" "}
                      <small>
                        Meals without a main image will not appear in the search
                        or browse area unless added. Ensure the images are
                        clear, crisp, informative and appealing. Follow the
                        requirements below:
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
              <div className="border-t-2 border-[#e0e0e066] pt-4 w-full">
                <div className="md:w-64 w-24 rounded-xl md:h-32 h-24 bg-gray-200">
                  <img
                    src={display_image}
                    className={`object-cover w-full h-full`}
                    alt="Restaurant"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-6/12 ml-6 w-full">
              <div className="flex flex-col  pb-4 w-full mt-4 md:mt-0">
                <div className="flex  flex-col">
                  <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                    <h4 className="text-lg text-purple-500">Category</h4>
                    <div className="flex justify-between w-full">
                      <KeyValue title="Category" value={category} />
                    </div>
                  </div>
                  <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                    <h4 className="text-lg text-purple-500">
                      Title and Specifications
                    </h4>
                    <div className="flex justify-between w-full">
                      <KeyValue title="Food Title" value={title} />
                      <KeyValue title="Food SKU" value={sku} />
                    </div>
                    <div className="flex justify-between w-full">
                      <KeyValue title="Food Price" value={price} />
                      <KeyValue
                        title="Food Availability"
                        value={availability.join(", ")}
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <KeyValue
                        title="State"
                        value={
                          restaurantStates.find(
                            (state) => state.id === +state_id
                          ).name
                        }
                      />
                      <KeyValue title="City" value={city} />
                    </div>
                  </div>
                  <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                    <h4 className="text-lg text-purple-500">
                      Inventory and Sales
                    </h4>
                    <div className="flex justify-between w-full">
                      <KeyValue title="Seller SKU" value="SB-#2123434343" />
                      <KeyValue title="Your Price" value={price + "NGN"} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-500">Meal Location</h4>
                    <div className="flex justify-between w-full">
                      <KeyValue
                        title="State"
                        value={
                          restaurantStates.find(
                            (state) => state.id === +state_id
                          ).name
                        }
                      />
                      <KeyValue title="City / Town" value={city} />
                    </div>
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

export default RestaurantMenuModal;
