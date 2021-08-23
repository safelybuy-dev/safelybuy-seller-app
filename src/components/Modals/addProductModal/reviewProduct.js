import React from 'react';
import { BackArrowSVG } from '.';

const KeyValue = ({ title, value }) => (
  <div className='my-3 '>
    <small className='text-gray-500'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const subCategoryObj = {
  1: [
    {
      value: 1,
      name: 'Phone_and_access_subcat',
      label: 'Phone',
    },
    {
      value: 2,
      name: 'Phone_and_access_subcat',
      label: 'Accessories',
    },
  ],
  2: [
    {
      value: 3,
      name: 'Ipad_tablet_access_subcat',
      label: 'Ipad',
    },
    {
      value: 4,
      name: 'Ipad_tablet_access_subcat',
      label: 'Tablets',
    },
    {
      value: 5,
      name: 'Ipad_tablet_access_subcat',
      label: 'Accessories',
    },
  ],
  4: [
    {
      value: 8,
      name: 'other_subcat',
      label: 'Power Bank',
    },
    {
      value: 9,
      name: 'other_subcat',
      label: 'Apple Watch',
    },
    {
      value: 10,
      name: 'other_subcat',
      label: 'Speaker',
    },
    {
      value: 11,
      name: 'other_subcat',
      label: 'Headphone',
    },
  ],
  3: [
    {
      value: 6,
      name: 'Laptop_access_subcat',
      label: 'Laptop',
    },
    {
      value: 7,
      name: 'Laptop_access_subcat',
      label: 'Accessories',
    },
  ],
};

const category = [
  {
    value: 1,
    name: 'gadgetType',
    label: 'Phone and Accessories',
  },
  {
    value: 2,
    name: 'gadgetType',
    label: 'IPad, Tablet and Accessories',
  },
  {
    value: 3,
    name: 'gadgetType',
    label: 'Laptop and Accessories',
  },
  {
    value: 4,
    name: 'gadgetType',
    label: 'Other Gadgets',
  },
];
const ReviewProducts = ({
  ProductsFormAndUpdater,
  setSteps,
  data: { subcategory_id, condition, brand, category_id },
}) => {
  return (
    <>
      <div className='flex justify-between w-full pb-10 items-start'>
        <BackArrowSVG setSteps={setSteps} value={4} />
      </div>
      <div className='flex mr-4 md:mr-0 md:flex-col'>
        <div className='flex flex-col w-6/12 md:w-full'>
          <div className='border-b w-2/3 border-gray-100 pb-4'>
            <div className='w-28 md:w-24 rounded-xl h-28 md:h-24 bg-gray-200'>
              <img
                className={`object-cover w-full h-full`}
                src={ProductsFormAndUpdater[0].main_image}
                alt='main product'
              />
            </div>
          </div>
          <div className='flex w-2/3 justify-between flex-wrap'>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_1 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_1}
                  alt='main product'
                />
              )}
            </div>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_2 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_2}
                  alt='main product'
                />
              )}
            </div>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_3 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_3}
                  alt='main product'
                />
              )}
            </div>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_4 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_4}
                  alt='main product'
                />
              )}
            </div>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_5 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_5}
                  alt='main product'
                />
              )}
            </div>
            <div className='w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'>
              {ProductsFormAndUpdater[0].other_product_img_6 && (
                <img
                  className={`object-cover w-full h-full`}
                  src={ProductsFormAndUpdater[0].other_product_img_6}
                  alt='main product'
                />
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-6/12  md:w-full md:ml-0 md:mt-4'>
          <div className='each-category-wrapper  divide-y divide-light-blue-400'>
            {/*   */}
            <div className='each-category-wrapper'>
              <h4 className='each-category-title text-xl text-purple-500'>
                Category
              </h4>
              <div className='each-category grid grid-cols-2 gap-4 '>
                <KeyValue
                  title='Category'
                  value={
                    category.filter((e) => e['value'] === category_id)[0].label
                  }
                />
                <KeyValue
                  title='Sub-category'
                  value={
                    subCategoryObj[category_id].filter(
                      (e) => e['value'] === subcategory_id
                    )[0].label
                  }
                />
                <KeyValue title='Condition' value={condition} />
                <KeyValue title='Brand' value={brand} />
              </div>
            </div>
            {/*   */}

            {/*   */}
            <div className='each-category-wrapper'>
              <h4 className='mt-3 each-category-title text-xl text-purple-500'>
                Title and Specifications
              </h4>

              {category_id === 4 && (
                <div className='each-category grid grid-cols-1 gap-4 '>
                  <KeyValue
                    title='Product Title'
                    value={ProductsFormAndUpdater[0].title}
                  />

                  <KeyValue
                    title='Specifications'
                    value={ProductsFormAndUpdater[0].specifications}
                  />

                  <KeyValue
                    title='Weight'
                    value={ProductsFormAndUpdater[0].weight}
                  />
                </div>
              )}

              {category_id === 3 && (
                <div className='each-category grid grid-cols-2 gap-4 '>
                  <KeyValue
                    title='Product Title'
                    value={ProductsFormAndUpdater[0].title}
                  />

                  <KeyValue
                    title='RAM'
                    value={ProductsFormAndUpdater[0].ram_size}
                  />

                  <KeyValue
                    title='Internal Memory (Hard disk size)'
                    value={ProductsFormAndUpdater[0].internal_memory}
                  />

                  <KeyValue
                    title='Processor'
                    value={ProductsFormAndUpdater[0].processor}
                  />

                  <KeyValue
                    title='Display'
                    value={ProductsFormAndUpdater[0].display}
                  />

                  <KeyValue
                    title='Battery'
                    value={ProductsFormAndUpdater[0].battery}
                  />

                  <KeyValue
                    title='CPU Speed'
                    value={ProductsFormAndUpdater[0].cpu_speed}
                  />
                  <KeyValue
                    title='Network Connectivity'
                    value={ProductsFormAndUpdater[0].network}
                  />
                  <KeyValue
                    title='Operating System'
                    value={ProductsFormAndUpdater[0].operating_system}
                  />

                  <KeyValue
                    title='Color'
                    value={ProductsFormAndUpdater[0].colour}
                  />

                  <KeyValue
                    title='Weight'
                    value={ProductsFormAndUpdater[0].weight}
                  />
                </div>
              )}

              {category_id === 2 && (
                <div className='each-category grid grid-cols-2 gap-4 '>
                  <KeyValue
                    title='Product Title'
                    value={ProductsFormAndUpdater[0].title}
                  />

                  <KeyValue
                    title='RAM'
                    value={ProductsFormAndUpdater[0].ram_size}
                  />

                  <KeyValue
                    title='Processor'
                    value={ProductsFormAndUpdater[0].processor}
                  />

                  <KeyValue
                    title='Front Camera'
                    value={ProductsFormAndUpdater[0].front_camera}
                  />
                  <KeyValue
                    title='Rear Camera'
                    value={ProductsFormAndUpdater[0].rear_camera}
                  />

                  <KeyValue
                    title='Battery'
                    value={ProductsFormAndUpdater[0].battery}
                  />

                  <KeyValue
                    title='Display'
                    value={ProductsFormAndUpdater[0].display}
                  />

                  <KeyValue
                    title='CPU Speed'
                    value={ProductsFormAndUpdater[0].cpu_speed}
                  />
                  <KeyValue
                    title='Network Connectivity'
                    value={ProductsFormAndUpdater[0].network}
                  />
                  <KeyValue
                    title='Operating System'
                    value={ProductsFormAndUpdater[0].operating_system}
                  />

                  <KeyValue
                    title='Color'
                    value={ProductsFormAndUpdater[0].colour}
                  />

                  <KeyValue
                    title='Weight'
                    value={ProductsFormAndUpdater[0].weight}
                  />
                </div>
              )}

              {category_id === 1 && (
                <div className='each-category grid grid-cols-2 gap-4 '>
                  <div className='each-category grid grid-cols-2 gap-4 '>
                    <KeyValue
                      title='Product Title'
                      value={ProductsFormAndUpdater[0].title}
                    />
                    <KeyValue
                      title='RAM'
                      value={ProductsFormAndUpdater[0].ram_size}
                    />
                    <KeyValue
                      title='Processor'
                      value={ProductsFormAndUpdater[0].processor}
                    />

                    {/* not available for laptop */}
                    <KeyValue
                      title='Front Camera'
                      value={ProductsFormAndUpdater[0].front_camera}
                    />
                    <KeyValue
                      title='Rear Camera'
                      value={ProductsFormAndUpdater[0].rear_camera}
                    />
                    <KeyValue
                      title='Battery'
                      value={ProductsFormAndUpdater[0].battery}
                    />
                    {/* not available for laptop */}

                    <KeyValue
                      title='Display'
                      value={ProductsFormAndUpdater[0].display}
                    />

                    <KeyValue
                      title='Internal Memory'
                      value={ProductsFormAndUpdater[0].internal_memory}
                    />
                    <KeyValue
                      title='CPU Speed'
                      value={ProductsFormAndUpdater[0].cpu_speed}
                    />
                    <KeyValue
                      title='Network Connectivity'
                      value={ProductsFormAndUpdater[0].network}
                    />
                    <KeyValue
                      title='Operating System'
                      value={ProductsFormAndUpdater[0].operating_system}
                    />

                    <KeyValue
                      title='Color'
                      value={ProductsFormAndUpdater[0].colour}
                    />
                    <KeyValue
                      title='Weight'
                      value={ProductsFormAndUpdater[0].weight}
                    />
                  </div>
                </div>
              )}
            </div>
            {/*   */}

            {/*   */}
            <div className='each-category-wrapper'>
              <h4 className='mt-3 each-category-title text-xl text-purple-500'>
                Inventory and Sales
              </h4>
              <div className='each-category grid grid-cols-2 gap-4 '>
                <KeyValue
                  title='Seller SKU'
                  value={ProductsFormAndUpdater[0].seller_sku}
                />
                <KeyValue
                  title='Your Price'
                  value={ProductsFormAndUpdater[0].price}
                />
                <KeyValue
                  title='Quantiy'
                  value={ProductsFormAndUpdater[0].available}
                />
              </div>
            </div>
            {/*   */}

            {/*   */}
            <div className='each-category py-3'>
              <h4 className='mt-3 each-category-title text-xl text-purple-500'>
                Product Location
              </h4>
              <div className='each-category grid grid-cols-2 gap-4 '>
                <KeyValue
                  title='State'
                  value={ProductsFormAndUpdater[0].shipping_state}
                />
                <KeyValue
                  title='City / Town'
                  value={ProductsFormAndUpdater[0].shipping_city}
                />
                <KeyValue
                  title='Weight'
                  value={ProductsFormAndUpdater[0].shipping_weight}
                />
              </div>
            </div>
            {/*   */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewProducts;
