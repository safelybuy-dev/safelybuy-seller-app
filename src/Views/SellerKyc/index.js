import React, { useState, useContext, useEffect } from "react";
import { ArrowRight } from "../../svg";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";
import utilities from "../../utilities";
import { requests, action } from "../../requests";
import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ContextUser } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import states from "../../state";

const SellerKyc = () => {
  const history = useHistory();
  const { addToast } = useToasts();

  const { user, isAuthenticated } = useContext(ContextUser)[0];
  const dispatch = useContext(ContextUser)[1];

  console.log(user);

  const schema = yup.object().shape({
    business_name: yup.string().required("business name is  required "),
    dob: yup.string().required("date of birth  is  required ")
  });

  // const [loadingUser, setLoadingUser] = useState(false);
  // const [loadingVerification, setLoadingVerification] = useState(false);
  const [userRegSteps, setUserRegSteps] = useState("seller-info");
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    setIsLoading(true);

    try {
      await requests.post("/seller/profile", data);
      dispatch(action("GET_USER", { ...user, ...data }));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err.response?.data?.error) {
        return addToast(
          utilities.formatErrorResponse(
            Object.values(err.response?.data?.error).flat()
          ),
          { appearance: "error" }
        );
      }

      return addToast("Failed to complete seller information. Try again", {
        appearance: "error"
      });
    }
  };

  const Loading = () => (
    <>
      <div className={`animate-pulse`}>
        <div className="flex flex-col">
          <div className="h-6 my-2 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 my-2 bg-gray-300 rounded-full w-full"></div>
        </div>

        <div className="flex mt-6 flex-col">
          <div className="h-6 my-2 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 my-2 bg-gray-300 rounded-full w-full"></div>
        </div>

        <div className="flex mt-6 flex-col">
          <div className="h-6 my-2 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 my-2 bg-gray-300 rounded-full w-full"></div>
        </div>

        <div className="flex mt-6 flex-col">
          <div className="h-6 my-2 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 my-2 bg-gray-300 rounded-full w-full"></div>
        </div>

        <div className="flex mt-6 flex-col">
          <div className="h-6 my-2 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 my-2 bg-gray-300 rounded-full w-full"></div>
        </div>
      </div>
    </>
  );

  const SubmitButton = () => (
    <Button
      primaryOutline
      roundedMd
      icon={
        <div className="animate-bounceSide">
          <ArrowRight color="black" />
        </div>
      }
      text="Continue"
      Continue
    />
  );

  const Form = () => {


    if (!user.business_name) {
      return (
        <>
          <h1 className="tracking-wide pt-2 pb-2 font-bold px-12 text-4xl z-10 md:px-8 md:text-3xl">
            Complete your information
          </h1>
          <small
            style={{ color: "rgba(130, 130, 130, 1)" }}
            className="font-thin"
          >
            {" "}
            Fill in the details in the form below to complete your information.
          </small>
          <div className="flex justify-center mt-5">
            <form
              className="scrollable-form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-96 md:max-w-7xl md:px-8"
            >
              <div className="text-left">
                <div className="text-left mr-2">
                  <label className="text-sm my-2" htmlFor="email">
                    Full Name
                  </label>
                  <div className="relative md:w-full mb-2 mt-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      disabled
                      id="fullname"
                      value={`${user.firstname} ${user.lastname}`}
                      className={`border border-black  w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
                  </div>
                </div>

                <label className="text-sm my-2" htmlFor="email">
                  Email
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <input
                    type="email"
                    value={user.email}
                    placeholder="email@example.com"
                    name="email"
                    id="email"
                    disabled
                    className={`border border-black  w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />
                </div>
              </div>
              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  Phone Number
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <input
                    type="text"
                    value={user.phone}
                    disabled
                    className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />
                </div>
              </div>
              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  Date of Birth
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <input
                    type="date"
                    placeholder="Click to select a date"
                    name="dob"
                    ref={register({
                      required: true
                    })}
                    // required
                    className={`border ${
                      errors.dob ? "border-red" : "border-black"
                    } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />

                  {errors.dob && (
                    <span className="error-span">{errors.dob?.message}</span>
                  )}
                </div>
              </div>
              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  Business Name
                </label>
                <div className="relative md:w-full mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    name="business_name"
                    ref={register({
                      required: true
                    })}
                    // required
                    className={`border ${
                      errors.business_name ? "border-red" : "border-black"
                    } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />

                  {errors.business_name && (
                    <span className="error-span">
                      {errors.business_name?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-left">
                <div className="my-4 flex justify-center">
                  <small className="mt-3">
                    Proceed to complete creating your profile.
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </small>

                  <SubmitButton />
                </div>
              </div>
            </form>
          </div>
        </>
      );
    }

    if (!user.isBusinessDetails) {
      return (
        <>
          <h1 className="tracking-wide pt-2 pb-2 font-bold px-12 text-4xl z-10 md:px-8 md:text-3xl">
            Add business information
          </h1>
          <small
            style={{ color: "rgba(130, 130, 130, 1)" }}
            className="font-thin"
          >
            {" "}
            Fill in the legal details of your company.
          </small>
          <div className="flex justify-center mt-5">
            <form
              className="scrollable-form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-96 md:max-w-7xl md:px-8"
            >
              <div className="text-left">
                <div className="text-left mr-2">
                  <label className="text-sm my-2" htmlFor="email">
                    Business Name
                  </label>
                  <div className="relative md:w-full mb-2 mt-2">
                    <input
                      type="text"
                      disabled
                      id="fullname"
                      value={`${user.business_name}`}
                      className={`border border-black  w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
                  </div>
                </div>

                <label className="text-sm my-2" htmlFor="email">
                  Address
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <input
                    type="name"
                    name="street"
                    className={`border border-black  w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />
                </div>
              </div>
              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  City / Town
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <input
                    type="text"
                    name="city"
                    className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />
                </div>
              </div>

              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  Date of Birth
                </label>
                <div className="relative md:w-full mb-2 mt-2">
                  <select name="state" ref={register}>
                    {states.map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                  {errors.dob && (
                    <span className="error-span">{errors.dob?.message}</span>
                  )}
                </div>
              </div>
              <div className="text-left mr-2">
                <label className="text-sm my-2" htmlFor="email">
                  Business Name
                </label>
                <div className="relative md:w-full mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    name="business_name"
                    ref={register({
                      required: true
                    })}
                    // required
                    className={`border ${
                      errors.business_name ? "border-red" : "border-black"
                    } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                  />

                  {errors.business_name && (
                    <span className="error-span">
                      {errors.business_name?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-left">
                <div className="my-4 flex justify-center">
                  <small className="mt-3">
                    Proceed to complete creating your profile.
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </small>

                  <SubmitButton />
                </div>
              </div>
            </form>
          </div>
        </>
      );
    }

    // if (!user.isBankDetailsVerified) {
    //   return <></>;
    // }
  };



  return isAuthenticated ? (
    <div className="relative justify-between flex flex-col min-h-screen text-center">
      <header className="flex tracking-wide justify-center mx-12 my-8 md:mx-6 md:my-3">
        <Logo color="black" text="transact with no regret" />
      </header>

      <div className="box">
        <div>
          <div className="timeline-container mt-10">
            <div className="history-tl-container">
              <ul className="tl">
                <li
                  style={{ borderLeft: "3px solid  rgba(134, 97, 255, 1)" }}
                  className="tl-item verify-phone-num"
                  ng-repeat="item in retailer_history"
                >
                  <div className="item-detail">Step 01</div>
                  <div className="item-title">Verify Seller Phone Number</div>
                </li>

                <li
                  style={
                    user.business_name && user.dob
                      ? { borderLeft: "3px solid  rgba(134, 97, 255, 1)" }
                      : { borderLeft: "3px solid  rgb(225,215,255)" }
                  }
                  className={`tl-item ${
                    user.business_name && user.dob
                      ? "complete-seller-info-1-done"
                      : "complete-seller-info-1"
                  }`}
                  ng-repeat="item in retailer_history"
                >
                  <div className="item-detail">Step 02</div>
                  <div className="item-title">Complete Seller Information</div>
                </li>

                <li
                  style={
                    true
                      ? { borderLeft: "3px solid  rgb(224,224,224)" }
                      : { borderLeft: "3px solid  rgba(134, 97, 255, 1)" }
                  }
                  className="tl-item complete-seller-business-info"
                  ng-repeat="item in retailer_history"
                >
                  <div className="item-detail">Step 03</div>
                  <div className="item-title">Seller Business Information</div>
                </li>

                <li
                  className="tl-item complete-bank-info"
                  ng-repeat="item in retailer_history"
                >
                  <div className="item-detail">Step 04</div>
                  <div className="item-title">Seller Business Information</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>{isLoading ? <Loading /> : <Form />}</div>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default SellerKyc;
