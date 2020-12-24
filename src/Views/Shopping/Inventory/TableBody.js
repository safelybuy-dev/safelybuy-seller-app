import React from "react";
import { useTable } from "react-table";
import image4 from "../../../assets/images/image4.png";
import Button from "../../../components/Button";

const TableBody = () => {
  const data = React.useMemo(
    () => [
      {
        status: "Active",
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={image4}
            alt="..."
          />
        ),
        sku: (
          <>
            <div>SB-#2123434343</div>
            <div className="text-sm text-gray-400">New</div>
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">Xaomi Pocophone F1</p>
            <p className="text-sm text-gray-400">128GB RAM / 64GB ROM</p>
          </div>
        ),
        location: "Warri, Delta",
        seller: <p className="text-purple-500">Kareem Chibuzor</p>,
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <div>
            <Button roundedFull primary>
              Approve
            </Button>
            <span className="inline-block p-1"></span>
            <Button roundedFull danger>
              Deny
            </Button>
          </div>
        ),
      },
      {
        status: "Active",
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={image4}
            alt="..."
          />
        ),
        sku: (
          <>
            <div>SB-#2123434343</div>
            <div className="text-sm text-gray-400">New</div>
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">Xaomi Pocophone F1</p>
            <p className="text-sm text-gray-400">128GB RAM / 64GB ROM</p>
          </div>
        ),
        location: "Warri, Delta",
        seller: <p className="text-purple-500">Kareem Chibuzor</p>,
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="justify-around">
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
      {
        status: "Active",
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={image4}
            alt="..."
          />
        ),
        sku: (
          <>
            <div>SB-#2123434343</div>
            <div className="text-sm text-gray-400">New</div>
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">Xaomi Pocophone F1</p>
            <p className="text-sm text-gray-400">128GB RAM / 64GB ROM</p>
          </div>
        ),
        location: "Warri, Delta",
        seller: <p className="text-purple-500">Kareem Chibuzor</p>,
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="justify-around">
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
      {
        status: "Active",
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={image4}
            alt="..."
          />
        ),
        sku: (
          <>
            <div>SB-#2123434343</div>
            <div className="text-sm text-gray-400">New</div>
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">Xaomi Pocophone F1</p>
            <p className="text-sm text-gray-400">128GB RAM / 64GB ROM</p>
          </div>
        ),
        location: "Warri, Delta",
        seller: <p className="text-purple-500">Kareem Chibuzor</p>,
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="justify-around">
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
      {
        status: "Active",
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={image4}
            alt="..."
          />
        ),
        sku: (
          <>
            <div>SB-#2123434343</div>
            <div className="text-sm text-gray-400">New</div>
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">Xaomi Pocophone F1</p>
            <p className="text-sm text-gray-400">128GB RAM / 64GB ROM</p>
          </div>
        ),
        location: "Warri, Delta",
        seller: <p className="text-purple-500">Kareem Chibuzor</p>,
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="justify-around">
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Image", accessor: "image" },
      {
        Header: (
          <div className="flex flex-col">
            <div>SKU</div>
            <div className="text-sm text-gray-400">Condition</div>
          </div>
        ),
        accessor: "sku",
      },
      {
        Header: (
          <div className="flex flex-col">
            <div>Product Name</div>
            <div className="text-sm text-gray-400">Description</div>
          </div>
        ),
        accessor: "desc",
      },
      { Header: "Product Location", accessor: "location" },
      { Header: "Seller", accessor: "seller" },
      {
        Header: (
          <div className="flex flex-col">
            <div>Date created</div>
            <div className="text-sm text-gray-400">Last updated</div>
          </div>
        ),
        accessor: "date",
      },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="overflow-x-scroll mt-8">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="pb-4 font-normal" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: "120px" }}
                      className="border-b-2 pr-4 min-w-max border-gray-100 py-4"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
