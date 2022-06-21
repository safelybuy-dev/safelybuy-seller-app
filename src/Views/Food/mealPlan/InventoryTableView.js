import React, { useState } from 'react';
import TabHeader from './TabHeader';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ProductDetails from './ProductDetails';

function InventoryTableView({
  loading,
  items,
  deleteItem,
  selloutItem,
  setRestaurantMenuModal,
  setItem,
  setEdit,
}) {
  const [active, setActive] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="w-full mt-8">
      <TabHeader
        active={active}
        setActive={setActive}
        activeLength={items.filter((item) => item.status === 'active').length}
        inactiveLength={items.filter((item) => item.status !== 'active').length}
      />
      <div className="bg-white  overflow-x relative md:rounded-b-2xl md:rounded-tr-2xl md:p-10 z-40 p-2 md:-mx-6 ">
        <TableHeader active={active} setActive={setActive} />
        {loading ? (
          <div className="mt-20 mb-20 flex justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-purple-500 animate-pulse">
              Loading items...
            </span>
          </div>
        ) : (
          <TableBody
            setSelectedProduct={setSelectedProduct}
            active={active}
            setActive={setActive}
            items={items}
            deleteItem={deleteItem}
            selloutItem={selloutItem}
            setRestaurantMenuModal={setRestaurantMenuModal}
            setEdit={setEdit}
            setItem={setItem}
          />
        )}
      </div>
      {selectedProduct && (
        <ProductDetails
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default InventoryTableView;
