/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const statuses = {
  Completed: "text-green-700 bg-green-50 ring-green-600/20",
  Pending: "text-orange-400 bg-orange-50 ring-gray-500/10",
  Failed: "text-red-700 bg-red-50 ring-red-600/10",
};

const transaction = [
  {
    name: "F45 Training",
    purpose: "Booked",
    date: "02/02/2024",
    time: "11:20:10 PM",
    amount: " - $10.00 ",
    status: "Pending",
  },
  {
    name: "Spotify",
    purpose: "Subscription",
    date: "26/02/2024",
    time: "10:20:10 PM",
    amount: " - $30.00 ",
    status: "Failed",
  },
  {
    name: "Gigi Hadid",
    purpose: "Transfer",
    date: "10/01/2024",
    time: "13:20:10 PM",
    amount: " + $210.00 ",
    status: "Completed",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TransactionCard = ({ selectedOption, onSelectChange }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">Transactions</h2>
      <div>
        <select
          value={selectedOption}
          onChange={onSelectChange}
          className="border rounded-md px-2 py-1"
        >
          <option value="option1">Monthly</option>
          <option value="option2">Daily</option>
          <option value="option2">Weekly</option>
        </select>
      </div>
    </div>

    <div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Purpose
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transaction.map((transactions) => (
                  <tr key={transactions.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {transactions.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transactions.purpose}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transactions.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transactions.time}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transactions.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div
                        className={classNames(
                          statuses[transactions.status],
                          "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-center h-[25px]"
                        )}
                      >
                        {transactions.status}
                      </div>
                      {/* {transactions.status} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a
            href="#"
            className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block text-center pt-10"
          >
            View All
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TransactionCard;
