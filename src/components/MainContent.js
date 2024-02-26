import React from "react";
import PieChart from "./Card/Chart/Piechart";
import SpendingCard from "./Card/SpendingCard";
import TransactionCard from "./Card/TransactionCard";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  WalletIcon,
  BanknotesIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { icon: WalletIcon, name: "Balance", stat: "$1,500.15" },
  { icon: PlusCircleIcon, name: "Income", stat: "$200,00" },
  { icon: MinusCircleIcon, name: "Outcome", stat: "$500,00" },
  { icon: BanknotesIcon, name: "Savings", stat: "$1,125,50" },
];

const data = [
  { id: "Shopping", label: "Shopping", value: 200 },
  { id: "Workspace", label: "Workspace", value: 400 },
  { id: "Food", label: "Food", value: 300 },
  { id: "Entertainment", label: "Entertainment", value: 300 },
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
                  <div className="absolute rounded-full bg-sky-400 p-2">
                    <item.icon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </dt>
                <dt className="truncate text-sm font-medium text-gray-500 pt-12">
                  {item.name}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-800">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="expense grid grid-cols-2 gap-4 mt-10">
        <PieChart data={data} />
        <SpendingCard />
      </div>

      <div className="transaction mt-10">
        <TransactionCard />
      </div>
    </div>
  );
};

export default MainContent;
