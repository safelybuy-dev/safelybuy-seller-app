import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const index = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="Delivery" parentLink="/delivery" />
    </div>
  );
};

export default index;
