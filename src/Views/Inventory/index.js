import React, { useState, useEffect } from "react";
import Modal from "components/Modals/addProductModal";
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from "components/Button";
import { useRouteMatch } from "react-router-dom";

const Inventory = ({ value }) => {
  let { url } = useRouteMatch();
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [openTicketModal, setTicketModal] = useState(false);

  useEffect(() => {
    if (url.includes("add")) return setSelectedProduct(true);
  }, [url]);

  return (
    <div className="flex flex-col w-full items-start">
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage Inventory</h2>
        <span className="inline-block md:hidden">
          {value === "Shopping" && (
            <Button
              canClick={true}
              clickHandler={() => setSelectedProduct(true)}
              event="onClick"
              text="Add  a New Product"
              primary
              roundedFull
              icon="+"
            />
          )}

          {value === "Tickets" && (
            <Button
              canClick={true}
              clickHandler={() => setTicketModal(true)}
              event="onClick"
              text="Create a ticket or an event"
              primary
              roundedFull
              icon="+"
            />
          )}

        </span>
        <span className="hidden md:inline-block">
          <Button text="Recent" secondary roundedFull preTagText="50" />
        </span>
      </div>

      <Modal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />


     <TicketModal 
     openTicketModal={openTicketModal}
     setTicketModal={setTicketModal}
     />
    </div>
  );
};

export default Inventory;
