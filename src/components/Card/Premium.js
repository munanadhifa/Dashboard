/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Premium = () => (
  <div className="bg-white shadow-md rounded-md p-2 mt-4">
    <p className="text-center text-lg font-bold">Premium</p>
    <CurrencyDollarIcon
      className="h-10 w-10 text-green-500"
      aria-hidden="true"
    />

    <h1 className="text-lg font-semibold">Need more features?</h1>
    <p className=" text-sm font-medium text-gray-500 w-[240px] ">
      Update your account to premium to get more features.
    </p>
    <a
      href="#"
      className=" mt-5 mb-3 flex w-full items-center justify-center rounded-md text-white bg-sky-500 px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300  focus-visible:outline-offset-0"
    >
      Get now
    </a>
  </div>
);

export default Premium;
