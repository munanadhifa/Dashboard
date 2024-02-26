/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Balance = () => (
  <div className="bg-white shadow-md rounded-md p-6 mt-4">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="truncate text-md font-medium text-gray-500  ">
          Your Balance
        </h2>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-gray-800">
          $1,500.15
        </p>
      </div>
      <div className="flex">
        <h2 className="truncate text-sm font-medium text-green-400  ">
          + 16.60%
        </h2>
        <p className="truncate text-sm font-medium text-red-400 pl-2">
          - 16.60%
        </p>
      </div>
    </div>

    <div className="w-full border-t border-gray-300" />

    <div className="flex justify-between">
      <div className="mt-4">
        <h2 className="truncate text-md font-medium text-gray-500  ">
          Currency
        </h2>
        <p className="mt-1 text-sm font-semibold tracking-tight text-gray-800">
          USD/IDR
        </p>
      </div>

      <div className="mt-4">
        <h2 className="truncate text-md font-medium text-gray-500">Status</h2>
        <p className="mt-1 text-sm tracking-tight text-green-500">Active</p>
      </div>
    </div>
  </div>
);

export default Balance;
