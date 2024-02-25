import React from "react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

const stats = [
  { icon: UserIcon, name: "Balance", stat: "71,897" },
  { icon: UserIcon, name: "Income", stat: "58.16%" },
  { icon: UserIcon, name: "Outcome", stat: "24.57%" },
  { icon: UserIcon, name: "Savings", stat: "24.57%" },
];

const MainContent = () => {
  return (
    <div className="Container">
      <div className="flex ">
        <h1 className="text-2xl font-bold">Hello, Difa!</h1>
        <div className="flex flex-1 justify-end px-2 lg:ml-6 ">
          <div className="w-full max-w-lg lg:max-w-xs border border-gray-200 rounded">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white  sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="pt-[2px] text-gray-700"> Welcome to your dashboard</p>

      <div className="cards pt-5">
        <div>
          <dl className="mt-5 grid grid-cols-4 gap-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 "
              >
                <dt>
                  <div className="absolute rounded-full bg-indigo-500 p-2">
                    <item.icon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </dt>
                <dt className="truncate text-sm font-medium text-gray-500 pt-12">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
