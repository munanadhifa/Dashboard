/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const expenses = [
  {
    title: "Online store",
    date: "Feb 20, 2024 at 10.00 pm",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681488243109-14af9194e149?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pay the hospital",
    date: "Jan 19, 2024 at 08.00 pm",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661740940614-e8cac9342154?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Concert tickets",
    date: "Jan 10, 2024 at 12.00 pm",
    imageUrl:
      "https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ChartCard = () => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">Latest Spending</h2>
    </div>
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {expenses.map((expense) => (
          <li key={expense.title} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={expense.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {expense.title}
                </p>
                <p className=" truncate text-xs leading-5 text-gray-500">
                  {expense.date}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block text-center pt-10"
      >
        View All
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </div>
);

export default ChartCard;
