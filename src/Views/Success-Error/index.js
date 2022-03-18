import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "components/Logo";
import Footer from "components/Footer";
import Button from "components/Button";
import { ArrowRight, FailureIcon, SuccessIcon } from "svg";

const SuccessError = () => {
  const history = useHistory();

  return (
    <div className="relative justify-between flex flex-col min-h-screen text-center">
      <div className="pb-60">
        <header className="flex tracking-wide justify-center mx-12 my-8 md:mx-6 md:my-3">
          <Logo color="black" text="transact with no regret" />
        </header>
        <div className="flex justify-center flex-col items-center">
          {history.location.state?.data ? <SuccessIcon /> : <FailureIcon />}

          {
            //  Meal Plan creation

            history.location.state?.mealPlan && (
              <div>
                <h3 className="text-[#4BBF75] mt-6 mb-3 text-[30px]">
                  {history.location.state?.isEdit
                    ? "Meal Plan Updated"
                    : "Meal Plan Created"}
                </h3>
                <p>
                  Your item has been added successfully and pending approval
                </p>
              </div>
            )
          }

          {!history.location.state?.data && (
            <div>
              <h3 className="text-[#EB5757] mt-6 mb-3 text-[34px]">
                Adding Failed
              </h3>
              <p>
                There must been an error with the network, do you wish to try
                again?
              </p>
            </div>
          )}
        </div>
        <div className="mt-10"></div>
        <Link to={`${history.location.state?.path || "/"}`}>
          <Button secondary roundedLg icon={<ArrowRight color="white" />}>
            {history.location.state?.data ? "Continue" : "Retry"}
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessError;
